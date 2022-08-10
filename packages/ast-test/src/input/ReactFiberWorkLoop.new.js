/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */
import { enableProfilerTimer, enableProfilerNestedUpdateScheduledHook, deferRenderPhaseUpdateToNextBatch, enableUpdaterTracking, enableTransitionTracing } from '../../shared/ReactFeatureFlags';
import ReactSharedInternals from '../../shared/ReactSharedInternals';
import { // Aliased because `act` will override and push to an internal queue
scheduleCallback as Scheduler_scheduleCallback, cancelCallback as Scheduler_cancelCallback, now, ImmediatePriority as ImmediateSchedulerPriority, UserBlockingPriority as UserBlockingSchedulerPriority, NormalPriority as NormalSchedulerPriority, IdlePriority as IdleSchedulerPriority } from './Scheduler';
import { flushSyncCallbacks, flushSyncCallbacksOnlyInLegacyMode, scheduleSyncCallback, scheduleLegacySyncCallback } from './ReactFiberSyncTaskQueue.new';
import { getCurrentEventPriority, supportsMicrotasks, scheduleMicrotask } from './ReactFiberHostConfig';
import { NoMode, ProfileMode, ConcurrentMode } from './ReactTypeOfMode';
import { Profiler } from './ReactWorkTags';
import { LegacyRoot } from './ReactRootTags';
import { NoLanes, NoLane, SyncLane, NoTimestamp, claimNextTransitionLane, mergeLanes, removeLanes, pickArbitraryLane, getNextLanes, markStarvedLanesAsExpired, markRootUpdated, markRootSuspended as markRootSuspended_dontCallThisOneDirectly, getHighestPriorityLane, addFiberToLanesMap, addTransitionToLanesMap } from './ReactFiberLane.new';
import { DiscreteEventPriority, ContinuousEventPriority, DefaultEventPriority, IdleEventPriority, getCurrentUpdatePriority, lanesToEventPriority } from './ReactEventPriorities.new';
import { requestCurrentTransition, NoTransition } from './ReactFiberTransition';
import { beginWork as originalBeginWork } from './ReactFiberBeginWork.new';
import { isDevToolsPresent } from './ReactFiberDevToolsHook.new';
const {
  ReactCurrentBatchConfig
} = ReactSharedInternals;
export const NoContext =
/*             */
0b000;
const RenderContext =
/*                */
0b010;
const CommitContext =
/*                */
0b100;
const RootInProgress = 0;
const RootSuspendedWithDelay = 4; // Describes where we are in the React execution stack

let executionContext = NoContext; // The root we're working on

let workInProgressRoot = null; // The fiber we're working on
// The lanes we're rendering

let workInProgressRootRenderLanes = NoLanes; // Stack that allows components to change the render lanes for its subtree
// This is a superset of the lanes we started working on at the root. The only
// case where it's different from `workInProgressRootRenderLanes` is when we
// enter a subtree that is hidden and needs to be unhidden: Suspense and
// Offscreen component.
//
// Most things in the work loop should deal with workInProgressRootRenderLanes.
// Most things in begin/complete phases should deal with subtreeRenderLanes.

export let subtreeRenderLanes = NoLanes; // Whether to root completed, errored, suspended, etc.

let workInProgressRootExitStatus = RootInProgress; // A fatal error, if one is thrown
// "Included" lanes refer to lanes that were worked on during this render. It's
// slightly different than `renderLanes` because `renderLanes` can change as you
// enter and exit an Offscreen tree. This value is the combination of all render
// lanes for the entire render phase.
// Lanes that were updated (in an interleaved event) during this render.

let workInProgressRootInterleavedUpdatedLanes = NoLanes; // Lanes that were updated during the render phase (*not* an interleaved event).

let workInProgressRootRenderPhaseUpdatedLanes = NoLanes; // Lanes that were pinged (in an interleaved event) during this render.

let workInProgressRootPingedLanes = NoLanes; // Errors that are thrown during the render phase.
// The absolute time for when we should start giving up on rendering
// more and prefer CPU suspense heuristics instead.
// How long a render is supposed to take before we start following CPU
// suspense heuristics and opt out of rendering more content.

const RENDER_TIMEOUT_MS = 500;

function resetRenderTimer() {
  workInProgressRootRenderTargetTime = now() + RENDER_TIMEOUT_MS;
} // Only used when enableProfilerNestedUpdateScheduledHook is true;
// to track which root is currently committing layout effects.


let rootCommittingMutationOrLayoutEffects = null; // Use these to prevent an infinite loop of nested updates

const NESTED_UPDATE_LIMIT = 50;
let nestedUpdateCount = 0; // If two updates are scheduled within the same event, we should treat their
// event times as simultaneous, even if the actual clock time has advanced
// between the first and second call.

let currentEventTime = NoTimestamp;
let currentEventTransitionLane = NoLanes;
export function requestEventTime() {
  if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
    // We're inside React, so it's fine to read the actual time.
    return now();
  } // We're not inside React, so we may be in the middle of a browser event.


  if (currentEventTime !== NoTimestamp) {
    // Use the same start time for all updates until we enter React again.
    return currentEventTime;
  } // This is the first update since React yielded. Compute a new start time.


  currentEventTime = now();
  return currentEventTime;
}
export function requestUpdateLane(fiber) {
  // Special cases
  const mode = fiber.mode;

  if ((mode & ConcurrentMode) === NoMode) {
    return SyncLane;
  } else if (!deferRenderPhaseUpdateToNextBatch && (executionContext & RenderContext) !== NoContext && workInProgressRootRenderLanes !== NoLanes) {
    // This is a render phase update. These are not officially supported. The
    // old behavior is to give this the same "thread" (lanes) as
    // whatever is currently rendering. So if you call `setState` on a component
    // that happens later in the same render, it will flush. Ideally, we want to
    // remove the special case and treat them as if they came from an
    // interleaved event. Regardless, this pattern is not officially supported.
    // This behavior is only a fallback. The flag only exists until we can roll
    // out the setState warning, since existing code might accidentally rely on
    // the current behavior.
    return pickArbitraryLane(workInProgressRootRenderLanes);
  }

  const isTransition = requestCurrentTransition() !== NoTransition;

  if (isTransition) {
    // The algorithm for assigning an update to a lane should be stable for all
    // updates at the same priority within the same event. To do this, the
    // inputs to the algorithm must be the same.
    //
    // The trick we use is to cache the first of each of these inputs within an
    // event. Then reset the cached values once we can be sure the event is
    // over. Our heuristic for that is whenever we enter a concurrent work loop.
    if (currentEventTransitionLane === NoLane) {
      // All transitions within the same event are assigned the same lane.
      currentEventTransitionLane = claimNextTransitionLane();
    }

    return currentEventTransitionLane;
  } // Updates originating inside certain React methods, like flushSync, have
  // their priority set by tracking it with a context variable.
  //
  // The opaque type returned by the host config is internally a lane, so we can
  // use that directly.
  // TODO: Move this type conversion to the event priority module.


  const updateLane = getCurrentUpdatePriority();

  if (updateLane !== NoLane) {
    return updateLane;
  } // This update originated outside React. Ask the host environment for an
  // appropriate priority, based on the type of event.
  //
  // The opaque type returned by the host config is internally a lane, so we can
  // use that directly.
  // TODO: Move this type conversion to the event priority module.


  const eventLane = getCurrentEventPriority();
  return eventLane;
}
export function scheduleUpdateOnFiber(root, fiber, lane, eventTime) {
  // Mark that the root has a pending update.
  markRootUpdated(root, lane, eventTime);

  if ((executionContext & RenderContext) !== NoLanes && root === workInProgressRoot) {
    // This update was dispatched during the render phase. This is a mistake
    // if the update originates from user space (with the exception of local
    // hook updates, which are handled differently and don't reach this
    // function), but there are some internal React features that use this as
    // an implementation detail, like selective hydration.
    warnAboutRenderPhaseUpdatesInDEV(fiber); // Track lanes that were updated during the render phase

    workInProgressRootRenderPhaseUpdatedLanes = mergeLanes(workInProgressRootRenderPhaseUpdatedLanes, lane);
  } else {
    // This is a normal update, scheduled from outside the render phase. For
    // example, during an input event.
    if (enableUpdaterTracking) {
      if (isDevToolsPresent) {
        addFiberToLanesMap(root, fiber, lane);
      }
    }

    warnIfUpdatesNotWrappedWithActDEV(fiber);

    if (enableProfilerTimer && enableProfilerNestedUpdateScheduledHook) {
      if ((executionContext & CommitContext) !== NoContext && root === rootCommittingMutationOrLayoutEffects) {
        if (fiber.mode & ProfileMode) {
          let current = fiber;

          while (current !== null) {
            if (current.tag === Profiler) {
              const {
                id,
                onNestedUpdateScheduled
              } = current.memoizedProps;

              if (typeof onNestedUpdateScheduled === 'function') {
                onNestedUpdateScheduled(id);
              }
            }

            current = current.return;
          }
        }
      }
    }

    if (enableTransitionTracing) {
      const transition = ReactCurrentBatchConfig.transition;

      if (transition !== null) {
        if (transition.startTime === -1) {
          transition.startTime = now();
        }

        addTransitionToLanesMap(root, transition, lane);
      }
    }

    if (root === workInProgressRoot) {
      // Received an update to a tree that's in the middle of rendering. Mark
      // that there was an interleaved update work on this root. Unless the
      // `deferRenderPhaseUpdateToNextBatch` flag is off and this is a render
      // phase update. In that case, we don't treat render phase updates as if
      // they were interleaved, for backwards compat reasons.
      if (deferRenderPhaseUpdateToNextBatch || (executionContext & RenderContext) === NoContext) {
        workInProgressRootInterleavedUpdatedLanes = mergeLanes(workInProgressRootInterleavedUpdatedLanes, lane);
      }

      if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
        // The root already suspended with a delay, which means this render
        // definitely won't finish. Since we have a new update, let's mark it as
        // suspended now, right before marking the incoming update. This has the
        // effect of interrupting the current render and switching to the update.
        // TODO: Make sure this doesn't override pings that happen while we've
        // already started rendering.
        markRootSuspended(root, workInProgressRootRenderLanes);
      }
    }

    ensureRootIsScheduled(root, eventTime);

    if (lane === SyncLane && executionContext === NoContext && (fiber.mode & ConcurrentMode) === NoMode) {
      // Flush the synchronous work now, unless we're already working or inside
      // a batch. This is intentionally inside scheduleUpdateOnFiber instead of
      // scheduleCallbackForFiber to preserve the ability to schedule a callback
      // without immediately flushing it. We only do this for user-initiated
      // updates, to preserve historical behavior of legacy mode.
      resetRenderTimer();
      flushSyncCallbacksOnlyInLegacyMode();
    }
  }
}
export function isUnsafeClassRenderPhaseUpdate(fiber) {
  // Check if this is a render phase update. Only called by class components,
  // which special (deprecated) behavior for UNSAFE_componentWillReceive props.
  return (// TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
    // decided not to enable it.
    (!deferRenderPhaseUpdateToNextBatch || (fiber.mode & ConcurrentMode) === NoMode) && (executionContext & RenderContext) !== NoContext
  );
} // Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the priority
// of the existing task is the same as the priority of the next level that the
// root has work on. This function is called on every update, and right before
// exiting a task.

function ensureRootIsScheduled(root, currentTime) {
  const existingCallbackNode = root.callbackNode; // Check if any lanes are being starved by other work. If so, mark them as
  // expired so we know to work on those next.

  markStarvedLanesAsExpired(root, currentTime); // Determine the next lanes to work on, and their priority.

  const nextLanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);

  if (nextLanes === NoLanes) {
    // Special case: There's nothing to work on.
    if (existingCallbackNode !== null) {
      cancelCallback(existingCallbackNode);
    }

    root.callbackNode = null;
    root.callbackPriority = NoLane;
    return;
  } // We use the highest priority lane to represent the priority of the callback.


  const newCallbackPriority = getHighestPriorityLane(nextLanes); // Check if there's an existing task. We may be able to reuse it.

  const existingCallbackPriority = root.callbackPriority;

  if (existingCallbackPriority === newCallbackPriority) {
    // The priority hasn't changed. We can reuse the existing task. Exit.
    return;
  }

  if (existingCallbackNode != null) {
    // Cancel the existing callback. We'll schedule a new one below.
    cancelCallback(existingCallbackNode);
  } // Schedule a new callback.


  let newCallbackNode;

  if (newCallbackPriority === SyncLane) {
    // Special case: Sync React callbacks are scheduled on a special
    // internal queue
    if (root.tag === LegacyRoot) {
      scheduleLegacySyncCallback(performSyncWorkOnRoot.bind(null, root));
    } else {
      scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
    }

    if (supportsMicrotasks) {
      // Flush the queue in a microtask.
      scheduleMicrotask(() => {
        // In Safari, appending an iframe forces microtasks to run.
        // https://github.com/facebook/react/issues/22459
        // We don't support running callbacks in the middle of render
        // or commit so we need to check against that.
        if ((executionContext & (RenderContext | CommitContext)) === NoContext) {
          // Note that this would still prematurely flush the callbacks
          // if this happens outside render or commit phase (e.g. in an event).
          flushSyncCallbacks();
        }
      });
    } else {
      // Flush the queue in an Immediate task.
      scheduleCallback(ImmediateSchedulerPriority, flushSyncCallbacks);
    }

    newCallbackNode = null;
  } else {
    let schedulerPriorityLevel;

    switch (lanesToEventPriority(nextLanes)) {
      case DiscreteEventPriority:
        schedulerPriorityLevel = ImmediateSchedulerPriority;
        break;

      case ContinuousEventPriority:
        schedulerPriorityLevel = UserBlockingSchedulerPriority;
        break;

      case DefaultEventPriority:
        schedulerPriorityLevel = NormalSchedulerPriority;
        break;

      case IdleEventPriority:
        schedulerPriorityLevel = IdleSchedulerPriority;
        break;

      default:
        schedulerPriorityLevel = NormalSchedulerPriority;
        break;
    }

    newCallbackNode = scheduleCallback(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root));
  }

  root.callbackPriority = newCallbackPriority;
  root.callbackNode = newCallbackNode;
} // This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.


function markRootSuspended(root, suspendedLanes) {
  // When suspending, we should always exclude lanes that were pinged or (more
  // rarely, since we try to avoid it) updated during the render phase.
  // TODO: Lol maybe there's a better way to factor this besides this
  // obnoxiously named function :)
  suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
  suspendedLanes = removeLanes(suspendedLanes, workInProgressRootInterleavedUpdatedLanes);
  markRootSuspended_dontCallThisOneDirectly(root, suspendedLanes);
} // This is the entry point for synchronous tasks that don't go
// through Scheduler


export const onUncaughtError = prepareToThrowUncaughtError; // Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates. We expect to adjust them based on research.

export function throwIfInfiniteUpdateLoopDetected() {
  if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
    nestedUpdateCount = 0;
    rootWithNestedUpdates = null;
    throw new Error('Maximum update depth exceeded. This can happen when a component ' + 'repeatedly calls setState inside componentWillUpdate or ' + 'componentDidUpdate. React limits the number of nested updates to ' + 'prevent infinite loops.');
  }
}
beginWork = originalBeginWork;

function warnAboutRenderPhaseUpdatesInDEV(fiber) {}

function scheduleCallback(priorityLevel, callback) {
  // In production, always call Scheduler. This function will be stripped out.
  return Scheduler_scheduleCallback(priorityLevel, callback);
}

function cancelCallback(callbackNode) {
  // In production, always call Scheduler. This function will be stripped out.
  return Scheduler_cancelCallback(callbackNode);
}

function warnIfUpdatesNotWrappedWithActDEV(fiber) {}
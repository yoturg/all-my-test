module.exports = {
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberReconciler.js": {
    "updateContainer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "requestEventTime",
        "requestUpdateLane",
        "scheduleUpdateOnFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markRenderScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberReconciler.js": [
        "getContextForSubtree"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "createUpdate",
        "enqueueUpdate",
        "entangleTransitions"
      ]
    },
    "getContextForSubtree": {
      "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactInstanceMap": [
        "get"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new": [
        "findCurrentUnmaskedContext",
        "isContextProvider",
        "processChildContext"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": {
    "requestEventTime": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ]
    },
    "requestUpdateLane": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "pickArbitraryLane",
        "claimNextTransitionLane"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTransition": [
        "requestCurrentTransition"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new": [
        "getCurrentUpdatePriority"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "getCurrentEventPriority"
      ]
    },
    "scheduleUpdateOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "markRootUpdated",
        "mergeLanes",
        "addFiberToLanesMap",
        "addTransitionToLanesMap"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "warnAboutRenderPhaseUpdatesInDEV",
        "warnIfUpdatesNotWrappedWithActDEV",
        "markRootSuspended",
        "ensureRootIsScheduled",
        "resetRenderTimer"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSyncTaskQueue.new": [
        "flushSyncCallbacksOnlyInLegacyMode"
      ]
    },
    "warnAboutRenderPhaseUpdatesInDEV": {},
    "warnIfUpdatesNotWrappedWithActDEV": {},
    "markRootSuspended": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "removeLanes",
        "markRootSuspended"
      ]
    },
    "ensureRootIsScheduled": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "markStarvedLanesAsExpired",
        "getNextLanes",
        "getHighestPriorityLane"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "cancelCallback",
        "performSyncWorkOnRoot",
        "scheduleCallback",
        "performConcurrentWorkOnRoot"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSyncTaskQueue.new": [
        "scheduleLegacySyncCallback",
        "scheduleSyncCallback",
        "flushSyncCallbacks"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "scheduleMicrotask"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new": [
        "lanesToEventPriority"
      ]
    },
    "resetRenderTimer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ]
    },
    "cancelCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "cancelCallback"
      ]
    },
    "performSyncWorkOnRoot": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "syncNestedUpdateFlag"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "flushPassiveEffects",
        "ensureRootIsScheduled",
        "renderRootSync",
        "recoverFromConcurrentError",
        "prepareFreshStack",
        "markRootSuspended",
        "commitRoot"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "getNextLanes",
        "includesSomeLane",
        "getLanesToRetrySynchronouslyOnError"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ]
    },
    "scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "scheduleCallback"
      ]
    },
    "performConcurrentWorkOnRoot": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "resetNestedUpdateFlag"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "flushPassiveEffects",
        "renderRootConcurrent",
        "renderRootSync",
        "recoverFromConcurrentError",
        "prepareFreshStack",
        "markRootSuspended",
        "ensureRootIsScheduled",
        "isRenderConsistentWithExternalStores",
        "finishConcurrentRender",
        "performConcurrentWorkOnRoot"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "getNextLanes",
        "includesBlockingLane",
        "includesExpiredLane",
        "getLanesToRetrySynchronouslyOnError"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ]
    },
    "isUnsafeClassRenderPhaseUpdate": {},
    "flushPassiveEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new": [
        "lanesToEventPriority",
        "lowerEventPriority",
        "getCurrentUpdatePriority",
        "setCurrentUpdatePriority"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "flushPassiveEffectsImpl",
        "releaseRootPooledCache"
      ]
    },
    "renderRootSync": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "pushDispatcher",
        "restorePendingUpdaters",
        "prepareFreshStack",
        "workLoopSync",
        "handleError",
        "popDispatcher"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "movePendingFibersToMemoized",
        "getTransitionsForLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markRenderStarted",
        "markRenderStopped"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "resetContextDependencies"
      ]
    },
    "recoverFromConcurrentError": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberShellHydration": [
        "isRootDehydrated"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "prepareFreshStack",
        "renderRootSync",
        "queueRecoverableErrors"
      ]
    },
    "prepareFreshStack": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "cancelTimeout"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberUnwindWork.new": [
        "unwindInterruptedWork"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiber.new": [
        "createWorkInProgress"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new": [
        "finishQueueingConcurrentUpdates"
      ]
    },
    "commitRoot": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new": [
        "getCurrentUpdatePriority",
        "setCurrentUpdatePriority"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "commitRootImpl"
      ]
    },
    "renderRootConcurrent": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "pushDispatcher",
        "restorePendingUpdaters",
        "resetRenderTimer",
        "prepareFreshStack",
        "workLoopConcurrent",
        "handleError",
        "popDispatcher"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "movePendingFibersToMemoized",
        "getTransitionsForLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markRenderStarted",
        "markRenderYielded",
        "markRenderStopped"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "resetContextDependencies"
      ]
    },
    "isRenderConsistentWithExternalStores": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "is"
      ]
    },
    "finishConcurrentRender": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "commitRoot",
        "markRootSuspended",
        "shouldForceFlushFallbacksInDEV",
        "requestEventTime",
        "jnd"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "includesOnlyRetries",
        "getNextLanes",
        "isSubsetOfLanes",
        "markRootPinged",
        "includesOnlyTransitions",
        "getMostRecentEventTime"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "scheduleTimeout"
      ]
    },
    "flushPassiveEffectsImpl": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markPassiveEffectsStarted",
        "markPassiveEffectsStopped",
        "onPostCommitRoot"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new": [
        "commitPassiveUnmountEffects",
        "commitPassiveMountEffects",
        "commitPassiveEffectDurations"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSyncTaskQueue.new": [
        "flushSyncCallbacks"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "scheduleCallback"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTracingMarkerComponent.new": [
        "processTransitionCallbacks"
      ]
    },
    "releaseRootPooledCache": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new": [
        "releaseCache"
      ]
    },
    "pushDispatcher": {},
    "restorePendingUpdaters": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "addFiberToLanesMap"
      ]
    },
    "workLoopSync": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "performUnitOfWork"
      ]
    },
    "handleError": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "resetContextDependencies"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHooks.new": [
        "resetHooksAfterThrow"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "stopProfilerTimerIfRunningAndRecordDelta"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markComponentRenderStopped",
        "markComponentSuspended",
        "markComponentErrored"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberThrow.new": [
        "throwException"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "completeUnitOfWork"
      ]
    },
    "popDispatcher": {},
    "queueRecoverableErrors": {},
    "commitRootImpl": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "flushPassiveEffects",
        "flushRenderPhaseStrictModeWarningsInDEV",
        "scheduleCallback",
        "releaseRootPooledCache",
        "ensureRootIsScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markCommitStarted",
        "markCommitStopped",
        "markLayoutEffectsStarted",
        "markLayoutEffectsStopped",
        "onCommitRoot"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes",
        "markRootFinished",
        "includesSomeLane"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new": [
        "getConcurrentlyUpdatedLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new": [
        "getCurrentUpdatePriority",
        "setCurrentUpdatePriority"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new": [
        "commitBeforeMutationEffects",
        "commitMutationEffects",
        "commitLayoutEffects"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "recordCommitTime",
        "markNestedUpdateScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "afterActiveInstanceBlur",
        "resetAfterCommit"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "requestPaint",
        "now"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSyncTaskQueue.new": [
        "flushSyncCallbacks"
      ]
    },
    "workLoopConcurrent": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "shouldYield"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "performUnitOfWork"
      ]
    },
    "is": {},
    "shouldForceFlushFallbacksInDEV": {},
    "jnd": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "ceil"
      ]
    },
    "throwIfInfiniteUpdateLoopDetected": {},
    "performUnitOfWork": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startProfilerTimer",
        "stopProfilerTimerIfRunningAndRecordDelta"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "beginWork",
        "completeUnitOfWork"
      ]
    },
    "completeUnitOfWork": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCompleteWork.new": [
        "completeWork"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startProfilerTimer",
        "stopProfilerTimerIfRunningAndRecordDelta"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberUnwindWork.new": [
        "unwindWork"
      ]
    },
    "flushRenderPhaseStrictModeWarningsInDEV": {},
    "ceil": {},
    "beginWork": {},
    "popRenderLanes": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    },
    "renderDidSuspendDelayIfPossible": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "includesNonIdleWork"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "markRootSuspended"
      ]
    },
    "renderDidError": {},
    "isAlreadyFailedLegacyErrorBoundary": {},
    "getWorkInProgressTransitions": {},
    "renderDidSuspend": {},
    "renderHasNotSuspendedYet": {},
    "getRenderTargetTime": {},
    "captureCommitPhaseError": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "captureCommitPhaseErrorOnRoot",
        "isAlreadyFailedLegacyErrorBoundary",
        "requestEventTime",
        "ensureRootIsScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCapturedValue": [
        "createCapturedValueAtFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberThrow.new": [
        "createClassErrorUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "enqueueUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "markRootUpdated"
      ]
    },
    "markCommitTimeOfFallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ]
    },
    "pingSuspendedRoot": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "requestEventTime",
        "warnIfSuspenseResolutionNotWrappedWithActDEV",
        "prepareFreshStack",
        "ensureRootIsScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "markRootPinged",
        "isSubsetOfLanes",
        "includesOnlyRetries",
        "mergeLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ]
    },
    "onUncaughtError": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "prepareToThrowUncaughtError"
      ]
    },
    "markLegacyErrorBoundaryAsFailed": {},
    "resolveRetryWakeable": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "retryTimedOutBoundary"
      ]
    },
    "captureCommitPhaseErrorOnRoot": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCapturedValue": [
        "createCapturedValueAtFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberThrow.new": [
        "createRootErrorUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "enqueueUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "requestEventTime",
        "ensureRootIsScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "markRootUpdated"
      ]
    },
    "warnIfSuspenseResolutionNotWrappedWithActDEV": {},
    "prepareToThrowUncaughtError": {},
    "retryTimedOutBoundary": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "requestRetryLane",
        "requestEventTime",
        "ensureRootIsScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new": [
        "enqueueConcurrentRenderForLane"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "markRootUpdated"
      ]
    },
    "requestRetryLane": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "claimNextRetryLane"
      ]
    },
    "addTransitionStartCallbackToPendingTransition": {},
    "addTransitionCompleteCallbackToPendingTransition": {},
    "enqueuePendingPassiveProfilerEffect": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js": [
        "scheduleCallback",
        "flushPassiveEffects"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new.js": {
    "markRenderScheduled": {},
    "markRenderStarted": {},
    "markRenderStopped": {},
    "markRenderYielded": {},
    "markPassiveEffectsStarted": {},
    "markPassiveEffectsStopped": {},
    "onPostCommitRoot": {},
    "markComponentRenderStopped": {},
    "markComponentSuspended": {},
    "markComponentErrored": {},
    "markCommitStarted": {},
    "markCommitStopped": {},
    "markLayoutEffectsStarted": {},
    "markLayoutEffectsStopped": {},
    "onCommitRoot": {},
    "markComponentPassiveEffectUnmountStarted": {},
    "markComponentLayoutEffectUnmountStarted": {},
    "markComponentPassiveEffectUnmountStopped": {},
    "markComponentLayoutEffectUnmountStopped": {},
    "markComponentPassiveEffectMountStarted": {},
    "markComponentLayoutEffectMountStarted": {},
    "markComponentPassiveEffectMountStopped": {},
    "markComponentLayoutEffectMountStopped": {},
    "onCommitUnmount": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new.js": {
    "createUpdate": {},
    "enqueueUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "isUnsafeClassRenderPhaseUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new": [
        "unsafe_markUpdateLaneFromFiberToRoot",
        "enqueueConcurrentClassUpdate"
      ]
    },
    "entangleTransitions": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "isTransitionLane",
        "intersectLanes",
        "mergeLanes",
        "markRootEntangled"
      ]
    },
    "enqueueCapturedUpdate": {},
    "commitUpdateQueue": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new.js": [
        "callCallback"
      ]
    },
    "callCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new.js": [
        "callback"
      ]
    },
    "callback": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new.js": [
        "callback"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactInstanceMap.js": {
    "get": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new.js": {
    "findCurrentUnmaskedContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeReflection": [
        "isFiberMounted"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new.js": [
        "isContextProvider"
      ]
    },
    "isContextProvider": {},
    "processChildContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new.js": [
        "getComponentNameFromFiber"
      ]
    },
    "getComponentNameFromFiber": {},
    "popContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    },
    "popTopLevelContextObject": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler.js": {
    "now": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler": [
        "unstable_now"
      ]
    },
    "scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler": [
        "unstable_scheduleCallback"
      ]
    },
    "cancelCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler": [
        "unstable_cancelCallback"
      ]
    },
    "requestPaint": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler": [
        "unstable_requestPaint"
      ]
    },
    "shouldYield": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler": [
        "unstable_shouldYield"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": {
    "pickArbitraryLane": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "getHighestPriorityLane"
      ]
    },
    "claimNextTransitionLane": {},
    "markRootUpdated": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "mergeLanes": {},
    "addFiberToLanesMap": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "addTransitionToLanesMap": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "isTransitionLane": {},
    "intersectLanes": {},
    "markRootEntangled": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "pickArbitraryLaneIndex"
      ]
    },
    "removeLanes": {},
    "markRootSuspended": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "pickArbitraryLaneIndex"
      ]
    },
    "markStarvedLanesAsExpired": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "pickArbitraryLaneIndex",
        "computeExpirationTime"
      ]
    },
    "getNextLanes": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "getHighestPriorityLanes",
        "getHighestPriorityLane",
        "pickArbitraryLaneIndex"
      ]
    },
    "getHighestPriorityLane": {},
    "laneToIndex": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "pickArbitraryLaneIndex"
      ]
    },
    "pickArbitraryLaneIndex": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/clz32": [
        "clz32"
      ]
    },
    "computeExpirationTime": {},
    "getHighestPriorityLanes": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "getHighestPriorityLane"
      ]
    },
    "includesNonIdleWork": {},
    "includesSomeLane": {},
    "getLanesToRetrySynchronouslyOnError": {},
    "includesBlockingLane": {},
    "includesExpiredLane": {},
    "markHiddenUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "movePendingFibersToMemoized": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "getTransitionsForLanes": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "includesOnlyRetries": {},
    "isSubsetOfLanes": {},
    "markRootPinged": {},
    "includesOnlyTransitions": {},
    "getMostRecentEventTime": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "pickArbitraryLaneIndex"
      ]
    },
    "markRootFinished": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "pickArbitraryLaneIndex"
      ]
    },
    "includesSyncLane": {},
    "clearTransitionsForLanes": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "claimNextRetryLane": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTransition.js": {
    "requestCurrentTransition": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new.js": {
    "getCurrentUpdatePriority": {},
    "lanesToEventPriority": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "getHighestPriorityLane",
        "includesNonIdleWork"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new.js": [
        "isHigherEventPriority"
      ]
    },
    "isHigherEventPriority": {},
    "setCurrentUpdatePriority": {},
    "lowerEventPriority": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig.js": {
    "getCurrentEventPriority": {},
    "scheduleMicrotask": {},
    "cancelTimeout": {},
    "scheduleTimeout": {},
    "afterActiveInstanceBlur": {},
    "resetAfterCommit": {},
    "prepareForCommit": {},
    "createInstance": {},
    "finalizeInitialChildren": {},
    "createTextInstance": {},
    "preparePortalMount": {},
    "prepareScopeUpdate": {},
    "resetTextContent": {},
    "commitUpdate": {},
    "commitTextUpdate": {},
    "commitHydratedContainer": {},
    "replaceContainerChildren": {},
    "shouldDeleteUnhydratedTailInstances": {},
    "shouldSetTextContent": {},
    "getNextHydratableSibling": {},
    "hydrateInstance": {},
    "hydrateTextInstance": {},
    "didNotMatchHydratedContainerTextInstance": {},
    "didNotMatchHydratedTextInstance": {},
    "beforeActiveInstanceBlur": {},
    "hideInstance": {},
    "unhideInstance": {},
    "hideTextInstance": {},
    "unhideTextInstance": {},
    "isSuspenseInstancePending": {},
    "isSuspenseInstanceFallback": {},
    "getNextHydratableInstanceAfterSuspenseInstance": {},
    "clearContainer": {},
    "getPublicInstance": {},
    "commitMount": {},
    "hydrateSuspenseInstance": {},
    "detachDeletedInstance": {},
    "removeChildFromContainer": {},
    "removeChild": {},
    "clearSuspenseBoundaryFromContainer": {},
    "clearSuspenseBoundary": {},
    "insertBefore": {},
    "appendChild": {},
    "insertInContainerBefore": {},
    "appendChildToContainer": {},
    "commitHydratedSuspenseInstance": {},
    "createContainerChildSet": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js": {
    "flushSyncCallbacksOnlyInLegacyMode": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js": [
        "flushSyncCallbacks"
      ]
    },
    "scheduleLegacySyncCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js": [
        "scheduleSyncCallback"
      ]
    },
    "scheduleSyncCallback": {},
    "flushSyncCallbacks": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactEventPriorities.new": [
        "getCurrentUpdatePriority",
        "setCurrentUpdatePriority"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "scheduleCallback"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": {
    "unsafe_markUpdateLaneFromFiberToRoot": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "markUpdateLaneFromFiberToRoot",
        "getRootForUpdatedFiber"
      ]
    },
    "enqueueConcurrentClassUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "enqueueUpdate",
        "getRootForUpdatedFiber"
      ]
    },
    "markUpdateLaneFromFiberToRoot": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes",
        "markHiddenUpdate"
      ]
    },
    "getRootForUpdatedFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "throwIfInfiniteUpdateLoopDetected"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "detectUpdateOnUnmountedFiber"
      ]
    },
    "enqueueUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes"
      ]
    },
    "detectUpdateOnUnmountedFiber": {},
    "finishQueueingConcurrentUpdates": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "markUpdateLaneFromFiberToRoot"
      ]
    },
    "getConcurrentlyUpdatedLanes": {},
    "enqueueConcurrentRenderForLane": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "enqueueUpdate",
        "getRootForUpdatedFiber"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeReflection.js": {
    "isFiberMounted": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeReflection.js": [
        "getNearestMountedFiber"
      ]
    },
    "getNearestMountedFiber": {},
    "doesFiberContain": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/scheduler/index.js": {
    "unstable_now": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler": [
        "unstable_now"
      ]
    },
    "unstable_scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler": [
        "unstable_scheduleCallback"
      ]
    },
    "unstable_cancelCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler": [
        "unstable_cancelCallback"
      ]
    },
    "unstable_requestPaint": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler": [
        "unstable_requestPaint"
      ]
    },
    "unstable_shouldYield": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler": [
        "unstable_shouldYield"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": {
    "syncNestedUpdateFlag": {},
    "resetNestedUpdateFlag": {},
    "stopProfilerTimerIfRunningAndRecordDelta": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": [
        "now"
      ]
    },
    "recordCommitTime": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": [
        "now"
      ]
    },
    "markNestedUpdateScheduled": {},
    "startProfilerTimer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": [
        "now"
      ]
    },
    "getCommitTime": {},
    "isCurrentUpdateNested": {},
    "now": {},
    "transferActualDuration": {},
    "startLayoutEffectTimer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": [
        "now"
      ]
    },
    "recordLayoutEffectDuration": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": [
        "now"
      ]
    },
    "startPassiveEffectTimer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": [
        "now"
      ]
    },
    "recordPassiveEffectDuration": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new.js": [
        "now"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": {
    "unstable_now": {},
    "unstable_scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "getCurrentTime",
        "cancelHostTimeout",
        "requestHostTimeout",
        "requestHostCallback"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerMinHeap": [
        "push",
        "peek"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerProfiling": [
        "markTaskStart"
      ]
    },
    "unstable_cancelCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "getCurrentTime"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerProfiling": [
        "markTaskCanceled"
      ]
    },
    "getCurrentTime": {},
    "cancelHostTimeout": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "localClearTimeout"
      ]
    },
    "requestHostTimeout": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "localSetTimeout",
        "callback",
        "getCurrentTime"
      ]
    },
    "requestHostCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "schedulePerformWorkUntilDeadline"
      ]
    },
    "localClearTimeout": {},
    "localSetTimeout": {},
    "callback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "callback"
      ]
    },
    "schedulePerformWorkUntilDeadline": {},
    "unstable_requestPaint": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "requestPaint"
      ]
    },
    "unstable_shouldYield": {},
    "requestPaint": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/clz32.js": {
    "clz32": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new.js": {
    "resetContextDependencies": {},
    "popProvider": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    },
    "propagateParentContextChangesToDeferredTree": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new.js": [
        "propagateParentContextChanges"
      ]
    },
    "propagateParentContextChanges": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new.js": [
        "is",
        "propagateContextChanges"
      ]
    },
    "is": {},
    "propagateContextChanges": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new.js": [
        "scheduleContextWorkOnParentPath"
      ]
    },
    "scheduleContextWorkOnParentPath": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "isSubsetOfLanes",
        "mergeLanes"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberShellHydration.js": {
    "isRootDehydrated": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberUnwindWork.new.js": {
    "unwindInterruptedWork": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeContext.new": [
        "popTreeContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new": [
        "popContext",
        "popTopLevelContextObject"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new": [
        "popCacheProvider"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTransition.new": [
        "popRootTransition",
        "popTransition"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostContext.new": [
        "popHostContainer",
        "popHostContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactMutableSource.new": [
        "resetWorkInProgressVersions"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseContext.new": [
        "popSuspenseContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "popProvider"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "popRenderLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTracingMarkerComponent.new": [
        "popTracingMarker"
      ]
    },
    "unwindWork": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeContext.new": [
        "popTreeContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new": [
        "isContextProvider",
        "popContext",
        "popTopLevelContextObject"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "transferActualDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new": [
        "popCacheProvider"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTransition.new": [
        "popRootTransition",
        "popTransition"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostContext.new": [
        "popHostContainer",
        "popHostContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactMutableSource.new": [
        "resetWorkInProgressVersions"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseContext.new": [
        "popSuspenseContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new": [
        "resetHydrationState"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "popProvider"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "popRenderLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTracingMarkerComponent.new": [
        "popTracingMarker"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiber.new.js": {
    "createWorkInProgress": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiber.new.js": [
        "createFiber"
      ]
    },
    "createFiber": {},
    "resetWorkInProgress": {},
    "createFiberFromHostInstanceForDeletion": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiber.new.js": [
        "createFiber"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": {
    "commitPassiveUnmountEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPassiveUnmountEffects_begin"
      ]
    },
    "commitPassiveMountEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPassiveMountEffects_begin"
      ]
    },
    "commitPassiveEffectDurations": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "getCommitTime",
        "isCurrentUpdateNested"
      ]
    },
    "commitBeforeMutationEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "prepareForCommit"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitBeforeMutationEffects_begin"
      ]
    },
    "commitMutationEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitMutationEffectsOnFiber"
      ]
    },
    "commitLayoutEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitLayoutEffects_begin"
      ]
    },
    "commitPassiveUnmountEffects_begin": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPassiveUnmountEffectsInsideOfDeletedTree_begin",
        "commitPassiveUnmountEffects_complete"
      ]
    },
    "commitPassiveMountEffects_begin": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPassiveMountEffects_complete"
      ]
    },
    "commitBeforeMutationEffects_begin": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitBeforeMutationEffectsDeletion",
        "commitBeforeMutationEffects_complete"
      ]
    },
    "commitMutationEffectsOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "recursivelyTraverseMutationEffects",
        "commitReconciliationEffects",
        "commitHookEffectListUnmount",
        "commitHookEffectListMount",
        "safelyDetachRef",
        "commitSuspenseCallback",
        "attachSuspenseRetryListeners",
        "disappearLayoutEffects_begin",
        "hideOrUnhideAllChildren",
        "safelyAttachRef"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError",
        "markCommitTimeOfFallback"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startLayoutEffectTimer",
        "recordLayoutEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "resetTextContent",
        "commitUpdate",
        "commitTextUpdate",
        "commitHydratedContainer",
        "replaceContainerChildren",
        "prepareScopeUpdate"
      ]
    },
    "commitLayoutEffects_begin": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitLayoutMountEffects_complete",
        "reappearLayoutEffects_begin",
        "commitLayoutEffects_begin"
      ]
    },
    "commitPassiveUnmountEffectsInsideOfDeletedTree_begin": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPassiveUnmountInsideDeletedTreeOnFiber",
        "commitPassiveUnmountEffectsInsideOfDeletedTree_complete"
      ]
    },
    "commitPassiveUnmountEffects_complete": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPassiveUnmountOnFiber"
      ]
    },
    "commitPassiveMountEffects_complete": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPassiveMountOnFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "commitBeforeMutationEffectsDeletion": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeReflection": [
        "doesFiberContain"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "beforeActiveInstanceBlur"
      ]
    },
    "commitBeforeMutationEffects_complete": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitBeforeMutationEffectsOnFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "recursivelyTraverseMutationEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitDeletionEffects",
        "commitMutationEffectsOnFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "getCurrentFiber",
        "setCurrentFiber"
      ]
    },
    "commitReconciliationEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitPlacement"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "commitHookEffectListUnmount": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markComponentPassiveEffectUnmountStarted",
        "markComponentLayoutEffectUnmountStarted",
        "markComponentPassiveEffectUnmountStopped",
        "markComponentLayoutEffectUnmountStopped"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "safelyCallDestroy"
      ]
    },
    "commitHookEffectListMount": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markComponentPassiveEffectMountStarted",
        "markComponentLayoutEffectMountStarted",
        "markComponentPassiveEffectMountStopped",
        "markComponentLayoutEffectMountStopped"
      ]
    },
    "safelyDetachRef": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startLayoutEffectTimer",
        "recordLayoutEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "ref"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "commitSuspenseCallback": {},
    "attachSuspenseRetryListeners": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "resolveRetryWakeable",
        "restorePendingUpdaters"
      ]
    },
    "disappearLayoutEffects_begin": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startLayoutEffectTimer",
        "recordLayoutEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitHookEffectListUnmount",
        "safelyDetachRef",
        "safelyCallComponentWillUnmount",
        "disappearLayoutEffects_complete"
      ]
    },
    "hideOrUnhideAllChildren": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "hideInstance",
        "unhideInstance",
        "hideTextInstance",
        "unhideTextInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "safelyAttachRef": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitAttachRef"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "commitLayoutMountEffects_complete": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitLayoutEffectOnFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "reappearLayoutEffects_begin": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "reappearLayoutEffects_complete"
      ]
    },
    "commitPassiveUnmountInsideDeletedTreeOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startPassiveEffectTimer",
        "recordPassiveEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitHookEffectListUnmount"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new": [
        "retainCache",
        "releaseCache"
      ]
    },
    "commitPassiveUnmountEffectsInsideOfDeletedTree_complete": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "detachFiberAfterEffects"
      ]
    },
    "commitPassiveUnmountOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startPassiveEffectTimer",
        "recordPassiveEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitHookEffectListUnmount"
      ]
    },
    "commitPassiveMountOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startPassiveEffectTimer",
        "recordPassiveEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitHookEffectListMount",
        "commitTransitionProgress"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new": [
        "retainCache",
        "releaseCache"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "addTransitionStartCallbackToPendingTransition",
        "addTransitionCompleteCallbackToPendingTransition"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "clearTransitionsForLanes"
      ]
    },
    "commitBeforeMutationEffectsOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "isSuspenseBoundaryBeingHidden"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeReflection": [
        "doesFiberContain"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "beforeActiveInstanceBlur",
        "clearContainer"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLazyComponent.new": [
        "resolveDefaultProps"
      ]
    },
    "commitDeletionEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitDeletionEffectsOnFiber",
        "detachFiberMutation"
      ]
    },
    "commitPlacement": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "getHostParentFiber",
        "getHostSibling",
        "insertOrAppendPlacementNode",
        "insertOrAppendPlacementNodeIntoContainer"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "resetTextContent"
      ]
    },
    "safelyCallDestroy": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "destroy"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "ref": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "ref"
      ]
    },
    "safelyCallComponentWillUnmount": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "callComponentWillUnmountWithTimer"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "disappearLayoutEffects_complete": {},
    "commitAttachRef": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "getPublicInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startLayoutEffectTimer",
        "recordLayoutEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "ref"
      ]
    },
    "commitLayoutEffectOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startLayoutEffectTimer",
        "recordLayoutEffectDuration",
        "getCommitTime",
        "isCurrentUpdateNested"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitHookEffectListMount",
        "commitSuspenseHydrationCallbacks",
        "commitAttachRef"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLazyComponent.new": [
        "resolveDefaultProps"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "commitUpdateQueue"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "getPublicInstance",
        "commitMount"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "enqueuePendingPassiveProfilerEffect"
      ]
    },
    "reappearLayoutEffects_complete": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber": [
        "setCurrentFiber",
        "resetCurrentFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "reappearLayoutEffectsOnFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "detachFiberAfterEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "detachFiberAfterEffects"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "detachDeletedInstance"
      ]
    },
    "commitTransitionProgress": {},
    "isSuspenseBoundaryBeingHidden": {},
    "commitDeletionEffectsOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "onCommitUnmount",
        "markComponentLayoutEffectUnmountStarted",
        "markComponentLayoutEffectUnmountStopped"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "safelyDetachRef",
        "recursivelyTraverseDeletionEffects",
        "emptyPortalContainer",
        "safelyCallDestroy",
        "safelyCallComponentWillUnmount"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "removeChildFromContainer",
        "removeChild",
        "clearSuspenseBoundaryFromContainer",
        "clearSuspenseBoundary"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startLayoutEffectTimer",
        "recordLayoutEffectDuration"
      ]
    },
    "detachFiberMutation": {},
    "getHostParentFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "isHostParent"
      ]
    },
    "getHostSibling": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "isHostParent"
      ]
    },
    "insertOrAppendPlacementNode": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "insertBefore",
        "appendChild"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "insertOrAppendPlacementNode"
      ]
    },
    "insertOrAppendPlacementNodeIntoContainer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "insertInContainerBefore",
        "appendChildToContainer"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "insertOrAppendPlacementNodeIntoContainer"
      ]
    },
    "destroy": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "destroy"
      ]
    },
    "callComponentWillUnmountWithTimer": {},
    "commitSuspenseHydrationCallbacks": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "commitHydratedSuspenseInstance"
      ]
    },
    "reappearLayoutEffectsOnFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "startLayoutEffectTimer",
        "recordLayoutEffectDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "safelyCallCommitHookLayoutEffectListMount",
        "safelyCallComponentDidMount",
        "safelyAttachRef"
      ]
    },
    "recursivelyTraverseDeletionEffects": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitDeletionEffectsOnFiber"
      ]
    },
    "emptyPortalContainer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "createContainerChildSet",
        "replaceContainerChildren"
      ]
    },
    "isHostParent": {},
    "safelyCallCommitHookLayoutEffectListMount": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCommitWork.new.js": [
        "commitHookEffectListMount"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    },
    "safelyCallComponentDidMount": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "captureCommitPhaseError"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTracingMarkerComponent.new.js": {
    "processTransitionCallbacks": {},
    "popTracingMarker": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new.js": {
    "releaseCache": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new.js": [
        "scheduleCallback"
      ]
    },
    "popCacheProvider": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "popProvider"
      ]
    },
    "scheduleCallback": {},
    "retainCache": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHooks.new.js": {
    "resetHooksAfterThrow": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCurrentFiber.js": {
    "resetCurrentFiber": {},
    "setCurrentFiber": {},
    "getCurrentFiber": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberThrow.new.js": {
    "throwException": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "restorePendingUpdaters",
        "renderDidSuspendDelayIfPossible",
        "renderDidError",
        "isAlreadyFailedLegacyErrorBoundary"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberThrow.new.js": [
        "resetSuspendedComponent",
        "getNearestSuspenseBoundaryToCapture",
        "markSuspenseBoundaryShouldCapture",
        "attachPingListener",
        "attachRetryListener",
        "createRootErrorUpdate",
        "createClassErrorUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "includesSyncLane",
        "pickArbitraryLane",
        "mergeLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new": [
        "getIsHydrating",
        "markDidThrowWhileHydratingDEV",
        "queueHydrationError"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCapturedValue": [
        "createCapturedValueAtFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "enqueueCapturedUpdate"
      ]
    },
    "resetSuspendedComponent": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "propagateParentContextChangesToDeferredTree"
      ]
    },
    "getNearestSuspenseBoundaryToCapture": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseContext.new": [
        "hasSuspenseContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseComponent.new": [
        "shouldCaptureSuspense"
      ]
    },
    "markSuspenseBoundaryShouldCapture": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "createUpdate",
        "enqueueUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes"
      ]
    },
    "attachPingListener": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "pingSuspendedRoot",
        "restorePendingUpdaters"
      ]
    },
    "attachRetryListener": {},
    "createRootErrorUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "createUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "onUncaughtError"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberErrorLogger": [
        "logCapturedError"
      ]
    },
    "createClassErrorUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "createUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberThrow.new.js": [
        "getDerivedStateFromError"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberErrorLogger": [
        "logCapturedError"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "markLegacyErrorBoundaryAsFailed"
      ]
    },
    "getDerivedStateFromError": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeContext.new.js": {
    "popTreeContext": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTransition.new.js": {
    "popRootTransition": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    },
    "popTransition": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostContext.new.js": {
    "popHostContainer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    },
    "popHostContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    },
    "getRootHostContainer": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostContext.new.js": [
        "requiredContext"
      ]
    },
    "getHostContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostContext.new.js": [
        "requiredContext"
      ]
    },
    "requiredContext": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactMutableSource.new.js": {
    "resetWorkInProgressVersions": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseContext.new.js": {
    "popSuspenseContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "pop"
      ]
    },
    "hasSuspenseContext": {},
    "pushSuspenseContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new": [
        "push"
      ]
    },
    "setShallowSuspenseContext": {},
    "setDefaultShallowSuspenseContext": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerMinHeap.js": {
    "push": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerMinHeap.js": [
        "siftUp"
      ]
    },
    "peek": {},
    "siftUp": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerMinHeap.js": [
        "compare"
      ]
    },
    "compare": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerProfiling.js": {
    "markTaskStart": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerProfiling.js": [
        "logEvent"
      ]
    },
    "markTaskCanceled": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerProfiling.js": [
        "logEvent"
      ]
    },
    "logEvent": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/SchedulerProfiling.js": [
        "stopLoggingProfilingEvents"
      ]
    },
    "stopLoggingProfilingEvents": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCompleteWork.new.js": {
    "completeWork": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTreeContext.new": [
        "popTreeContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCompleteWork.new.js": [
        "bubbleProperties",
        "markUpdate",
        "updateHostContainer",
        "updateHostComponent",
        "markRef",
        "appendAllChildren",
        "updateHostText",
        "completeDehydratedSuspenseBoundary",
        "cutOffTailIfNeeded"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new": [
        "isContextProvider",
        "popContext",
        "popTopLevelContextObject"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "getWorkInProgressTransitions",
        "renderDidSuspend",
        "renderDidSuspendDelayIfPossible",
        "renderHasNotSuspendedYet",
        "getRenderTargetTime",
        "popRenderLanes"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCacheComponent.new": [
        "popCacheProvider"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTransition.new": [
        "popRootTransition",
        "popTransition"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostContext.new": [
        "popHostContainer",
        "popHostContext",
        "getRootHostContainer",
        "getHostContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactMutableSource.new": [
        "resetWorkInProgressVersions"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new": [
        "popHydrationState",
        "upgradeHydrationErrorsToRecoverable",
        "prepareToHydrateHostInstance",
        "prepareToHydrateHostTextInstance",
        "getIsHydrating"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "createInstance",
        "finalizeInitialChildren",
        "createTextInstance",
        "preparePortalMount",
        "prepareScopeUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseContext.new": [
        "popSuspenseContext",
        "hasSuspenseContext",
        "pushSuspenseContext",
        "setShallowSuspenseContext",
        "setDefaultShallowSuspenseContext"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactProfilerTimer.new": [
        "transferActualDuration"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberNewContext.new": [
        "popProvider"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseComponent.new": [
        "findFirstSuspended"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactChildFiber.new": [
        "resetChildFibers"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "now"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberScope.new": [
        "createScopeInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "includesSomeLane"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberTracingMarkerComponent.new": [
        "popTracingMarker"
      ]
    },
    "bubbleProperties": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes"
      ]
    },
    "markUpdate": {},
    "updateHostContainer": {},
    "updateHostComponent": {},
    "markRef": {},
    "appendAllChildren": {},
    "updateHostText": {},
    "completeDehydratedSuspenseBoundary": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new": [
        "hasUnhydratedTailNodes",
        "warnIfUnhydratedTailNodes",
        "resetHydrationState",
        "popHydrationState",
        "prepareToHydrateHostSuspenseInstance",
        "upgradeHydrationErrorsToRecoverable"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberCompleteWork.new.js": [
        "bubbleProperties"
      ]
    },
    "cutOffTailIfNeeded": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new": [
        "getIsHydrating"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberStack.new.js": {
    "pop": {},
    "push": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new.js": {
    "getIsHydrating": {},
    "markDidThrowWhileHydratingDEV": {},
    "queueHydrationError": {},
    "popHydrationState": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new.js": [
        "popToNextHostParent",
        "shouldClientRenderOnMismatch",
        "warnIfUnhydratedTailNodes",
        "throwOnHydrationMismatch",
        "deleteHydratableInstance",
        "skipPastDehydratedSuspenseInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "shouldDeleteUnhydratedTailInstances",
        "shouldSetTextContent",
        "getNextHydratableSibling"
      ]
    },
    "upgradeHydrationErrorsToRecoverable": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "queueRecoverableErrors"
      ]
    },
    "prepareToHydrateHostInstance": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "hydrateInstance"
      ]
    },
    "prepareToHydrateHostTextInstance": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "hydrateTextInstance",
        "didNotMatchHydratedContainerTextInstance",
        "didNotMatchHydratedTextInstance"
      ]
    },
    "resetHydrationState": {},
    "popToNextHostParent": {},
    "shouldClientRenderOnMismatch": {},
    "warnIfUnhydratedTailNodes": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new.js": [
        "warnUnhydratedInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "getNextHydratableSibling"
      ]
    },
    "throwOnHydrationMismatch": {},
    "deleteHydratableInstance": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHydrationContext.new.js": [
        "warnUnhydratedInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiber.new": [
        "createFiberFromHostInstanceForDeletion"
      ]
    },
    "skipPastDehydratedSuspenseInstance": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "getNextHydratableInstanceAfterSuspenseInstance"
      ]
    },
    "warnUnhydratedInstance": {},
    "hasUnhydratedTailNodes": {},
    "prepareToHydrateHostSuspenseInstance": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "hydrateSuspenseInstance"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactCapturedValue.js": {
    "createCapturedValueAtFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberComponentStack": [
        "getStackByFiberInDevAndProd"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberSuspenseComponent.new.js": {
    "findFirstSuspended": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig": [
        "isSuspenseInstancePending",
        "isSuspenseInstanceFallback"
      ]
    },
    "shouldCaptureSuspense": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactChildFiber.new.js": {
    "resetChildFibers": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiber.new": [
        "resetWorkInProgress"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberScope.new.js": {
    "createScopeInstance": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberErrorLogger.js": {
    "logCapturedError": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberErrorDialog": [
        "showErrorDialog"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberComponentStack.js": {
    "getStackByFiberInDevAndProd": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberComponentStack.js": [
        "describeFiber"
      ]
    },
    "describeFiber": {
      "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactComponentStackFrame": [
        "describeBuiltInComponentFrame",
        "describeFunctionComponentFrame",
        "describeClassComponentFrame"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberErrorDialog.js": {
    "showErrorDialog": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLazyComponent.new.js": {
    "resolveDefaultProps": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLazyComponent.new.js": [
        "assign"
      ]
    },
    "assign": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactComponentStackFrame.js": {
    "describeBuiltInComponentFrame": {
      "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactComponentStackFrame.js": [
        "describeComponentFrame"
      ]
    },
    "describeFunctionComponentFrame": {
      "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactComponentStackFrame.js": [
        "describeNativeComponentFrame",
        "describeComponentFrame"
      ]
    },
    "describeClassComponentFrame": {
      "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactComponentStackFrame.js": [
        "describeNativeComponentFrame",
        "describeFunctionComponentFrame"
      ]
    },
    "describeComponentFrame": {},
    "describeNativeComponentFrame": {
      "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactComponentStackFrame.js": [
        "Fake",
        "fn",
        "describeBuiltInComponentFrame"
      ]
    },
    "Fake": {},
    "fn": {}
  }
}
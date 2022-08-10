module.exports = {
  "/Users/yogurt/workspace/test/all-my-test/packages/ast-test/src/input/ReactFiberWorkLoop.new.js": {
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
        "markRootSuspended_dontCallThisOneDirectly"
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
        "scheduleCallback"
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
        "Scheduler_cancelCallback"
      ]
    },
    "scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/Scheduler": [
        "Scheduler_scheduleCallback"
      ]
    },
    "isUnsafeClassRenderPhaseUpdate": {},
    "throwIfInfiniteUpdateLoopDetected": {}
  },
}
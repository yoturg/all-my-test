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
        "getInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new": [
        "findCurrentUnmaskedContext",
        "isLegacyContextProvider",
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
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberDevToolsHook.new.js": {
    "markRenderScheduled": {}
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
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/shared/ReactInstanceMap.js": {
    "getInstance": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new.js": {
    "findCurrentUnmaskedContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new.js": [
        "findCurrentUnmaskedContext"
      ]
    },
    "isLegacyContextProvider": {},
    "processChildContext": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberContext.new.js": [
        "processChildContext"
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
    "Scheduler_cancelCallback": {},
    "Scheduler_scheduleCallback": {}
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
    "markRootSuspended_dontCallThisOneDirectly": {},
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
    "markHiddenUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    }
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
    "setCurrentUpdatePriority": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberHostConfig.js": {
    "getCurrentEventPriority": {},
    "scheduleMicrotask": {}
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
    "detectUpdateOnUnmountedFiber": {}
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
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": {
    "unstable_now": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "getCurrentTime"
      ]
    },
    "getCurrentTime": {},
    "unstable_scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step4/scheduler/src/forks/Scheduler.js": [
        "unstable_scheduleCallback"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/clz32.js": {
    "clz32": {}
  }
}
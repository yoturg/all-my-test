module.exports = {
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberReconciler.js": {
    "updateContainer": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "requestEventTime",
        "requestUpdateLane",
        "scheduleUpdateOnFiber"
      ],
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberDevToolsHook.new": [
        "markRenderScheduled"
      ],
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberReconciler.js": [
        "getContextForSubtree"
      ],
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberClassUpdateQueue.new": [
        "createUpdate",
        "enqueueUpdate",
        "entangleTransitions"
      ]
    },
    "getContextForSubtree": {
      "/Users/yogurt/workspace/test/react-lego/step5/shared/ReactInstanceMap": [
        "getInstance"
      ],
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberContext.new": [
        "findCurrentUnmaskedContext",
        "isLegacyContextProvider",
        "processChildContext"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberWorkLoop.new.js": {
    "throwIfInfiniteUpdateLoopDetected": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberDevToolsHook.new.js": {
    "markRenderScheduled": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberClassUpdateQueue.new.js": {
    "createUpdate": {},
    "enqueueUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "isUnsafeClassRenderPhaseUpdate"
      ],
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberConcurrentUpdates.new": [
        "unsafe_markUpdateLaneFromFiberToRoot",
        "enqueueConcurrentClassUpdate"
      ]
    },
    "entangleTransitions": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberLane.new": [
        "isTransitionLane",
        "intersectLanes",
        "mergeLanes",
        "markRootEntangled"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/shared/ReactInstanceMap.js": {
    "getInstance": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberContext.new.js": {
    "findCurrentUnmaskedContext": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberContext.new.js": [
        "findCurrentUnmaskedContext"
      ]
    },
    "isLegacyContextProvider": {},
    "processChildContext": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberContext.new.js": [
        "processChildContext"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/Scheduler.js": {
    "scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step5/scheduler": [
        "unstable_scheduleCallback"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberLane.new.js": {
    "mergeLanes": {},
    "markHiddenUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberLane.new.js": [
        "laneToIndex"
      ]
    },
    "laneToIndex": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberLane.new.js": [
        "pickArbitraryLaneIndex"
      ]
    },
    "pickArbitraryLaneIndex": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/clz32": [
        "clz32"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberTransition.js": {
    "requestCurrentTransition": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactEventPriorities.new.js": {
    "getCurrentUpdatePriority": {},
    "setCurrentUpdatePriority": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberHostConfig.js": {
    "getCurrentEventPriority": {},
    "scheduleMicrotask": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js": {
    "flushSyncCallbacksOnlyInLegacyMode": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js": [
        "flushSyncCallbacks"
      ]
    },
    "scheduleLegacySyncCallback": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js": [
        "scheduleSyncCallback"
      ]
    },
    "scheduleSyncCallback": {},
    "flushSyncCallbacks": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactEventPriorities.new": [
        "getCurrentUpdatePriority",
        "setCurrentUpdatePriority"
      ],
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/Scheduler": [
        "scheduleCallback"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": {
    "unsafe_markUpdateLaneFromFiberToRoot": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "markUpdateLaneFromFiberToRoot",
        "getRootForUpdatedFiber"
      ]
    },
    "enqueueConcurrentClassUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "enqueueUpdate",
        "getRootForUpdatedFiber"
      ]
    },
    "markUpdateLaneFromFiberToRoot": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes",
        "markHiddenUpdate"
      ]
    },
    "getRootForUpdatedFiber": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberWorkLoop.new": [
        "throwIfInfiniteUpdateLoopDetected"
      ],
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js": [
        "detectUpdateOnUnmountedFiber"
      ]
    },
    "enqueueUpdate": {
      "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/ReactFiberLane.new": [
        "mergeLanes"
      ]
    },
    "detectUpdateOnUnmountedFiber": {}
  },
  "/Users/yogurt/workspace/test/react-lego/step5/scheduler/index.js": {
    "unstable_scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step5/scheduler/src/forks/Scheduler": [
        "unstable_scheduleCallback"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/scheduler/src/forks/Scheduler.js": {
    "unstable_scheduleCallback": {
      "/Users/yogurt/workspace/test/react-lego/step5/scheduler/src/forks/Scheduler.js": [
        "unstable_scheduleCallback"
      ]
    }
  },
  "/Users/yogurt/workspace/test/react-lego/step5/react-reconciler-new/src/clz32.js": {
    "clz32": {}
  }
}
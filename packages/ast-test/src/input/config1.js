module.exports = {
  '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/client/ReactDOMLegacy.js': {
    render: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/client/ReactDOMLegacy.js': ['legacyRenderSubtreeIntoContainer'],
    },
    legacyRenderSubtreeIntoContainer: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/client/ReactDOMLegacy.js': ['legacyCreateRootFromDOMContainer', 'originalCallback'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberReconciler': ['getPublicRootInstance', 'updateContainer'],
    },
    legacyCreateRootFromDOMContainer: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberReconciler': ['createContainer', 'flushSync', 'updateContainer'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/client/ReactDOMComponentTree': ['markContainerAsRoot'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/DOMPluginEventSystem': ['listenToAllSupportedEvents'],
    },
    originalCallback: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/client/ReactDOMLegacy.js': ['callback'],
    },
    callback: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberReconciler.js': {
    getPublicRootInstance: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHostConfig': ['getPublicInstance'],
    },
    updateContainer: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new': ['requestEventTime', 'requestUpdateLane', 'scheduleUpdateOnFiber'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberDevToolsHook.new': ['markRenderScheduled'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberReconciler.js': ['getContextForSubtree'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberClassUpdateQueue.new': ['createUpdate', 'enqueueUpdate', 'entangleTransitions'],
    },
    createContainer: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberRoot.new': ['createFiberRoot'],
    },
    flushSync: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberReconciler.js': ['flushSync'],
    },
    getContextForSubtree: {
      '/Users/yogurt/workspace/test/react-lego/step6/shared/ReactInstanceMap': ['getInstance'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberContext.new': ['findCurrentUnmaskedContext', 'isLegacyContextProvider', 'processChildContext'],
    },
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/client/ReactDOMComponentTree.js': {
    markContainerAsRoot: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/DOMPluginEventSystem.js': {
    listenToAllSupportedEvents: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/DOMPluginEventSystem.js': ['listenToNativeEvent'],
    },
    listenToNativeEvent: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/DOMPluginEventSystem.js': ['addTrappedEventListener'],
    },
    addTrappedEventListener: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/ReactDOMEventListener': ['createEventListenerWrapperWithPriority'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/EventListener': ['removeEventListener', 'addEventCaptureListenerWithPassiveFlag', 'addEventCaptureListener', 'addEventBubbleListenerWithPassiveFlag', 'addEventBubbleListener'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/DOMPluginEventSystem.js': ['originalListener'],
    },
    originalListener: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/DOMPluginEventSystem.js': ['listener'],
    },
    listener: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHostConfig.js': {
    getPublicInstance: {},
    getCurrentEventPriority: {},
    scheduleMicrotask: {},
    cancelTimeout: {},
    scheduleTimeout: {},
    afterActiveInstanceBlur: {},
    resetAfterCommit: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': {
    requestEventTime: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['now'],
    },
    requestUpdateLane: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['pickArbitraryLane', 'claimNextTransitionLane'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberTransition': ['requestCurrentTransition'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new': ['getCurrentUpdatePriority'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHostConfig': ['getCurrentEventPriority'],
    },
    scheduleUpdateOnFiber: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['markRootUpdated', 'mergeLanes', 'addFiberToLanesMap', 'addTransitionToLanesMap'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['warnAboutRenderPhaseUpdatesInDEV', 'warnIfUpdatesNotWrappedWithActDEV', 'markRootSuspended', 'ensureRootIsScheduled', 'resetRenderTimer'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['now'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberSyncTaskQueue.new': ['flushSyncCallbacksOnlyInLegacyMode'],
    },
    warnAboutRenderPhaseUpdatesInDEV: {},
    warnIfUpdatesNotWrappedWithActDEV: {},
    markRootSuspended: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['removeLanes', 'markRootSuspended_dontCallThisOneDirectly'],
    },
    ensureRootIsScheduled: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['markStarvedLanesAsExpired', 'getNextLanes', 'getHighestPriorityLane'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['cancelCallback', 'performSyncWorkOnRoot', 'scheduleCallback', 'performConcurrentWorkOnRoot'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberSyncTaskQueue.new': ['scheduleLegacySyncCallback', 'scheduleSyncCallback', 'flushSyncCallbacks'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHostConfig': ['scheduleMicrotask'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new': ['lanesToEventPriority'],
    },
    resetRenderTimer: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['now'],
    },
    cancelCallback: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['Scheduler_cancelCallback'],
    },
    performSyncWorkOnRoot: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactProfilerTimer.new': ['syncNestedUpdateFlag'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['flushPassiveEffects', 'ensureRootIsScheduled', 'renderRootSync', 'recoverFromConcurrentError', 'prepareFreshStack', 'markRootSuspended', 'commitRoot'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['getNextLanes', 'includesSomeLane', 'getLanesToRetrySynchronouslyOnError'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['now'],
    },
    scheduleCallback: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['Scheduler_scheduleCallback'],
    },
    performConcurrentWorkOnRoot: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactProfilerTimer.new': ['resetNestedUpdateFlag'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['flushPassiveEffects', 'renderRootConcurrent', 'renderRootSync', 'recoverFromConcurrentError', 'prepareFreshStack', 'markRootSuspended', 'ensureRootIsScheduled', 'isRenderConsistentWithExternalStores', 'finishConcurrentRender', 'performConcurrentWorkOnRoot'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['getNextLanes', 'includesBlockingLane', 'includesExpiredLane', 'getLanesToRetrySynchronouslyOnError'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['now'],
    },
    isUnsafeClassRenderPhaseUpdate: {},
    flushPassiveEffects: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new': ['lanesToEventPriority', 'lowerEventPriority', 'getCurrentUpdatePriority', 'setCurrentUpdatePriority'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['flushPassiveEffectsImpl', 'releaseRootPooledCache'],
    },
    renderRootSync: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['pushDispatcher', 'restorePendingUpdaters', 'prepareFreshStack', 'workLoopSync', 'handleError', 'popDispatcher'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['movePendingFibersToMemoized', 'getTransitionsForLanes'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberDevToolsHook.new': ['markRenderStarted', 'markRenderStopped'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberNewContext.new': ['resetContextDependencies'],
    },
    recoverFromConcurrentError: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberShellHydration': ['isRootDehydrated'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['prepareFreshStack', 'renderRootSync', 'queueRecoverableErrors'],
    },
    prepareFreshStack: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHostConfig': ['cancelTimeout'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberUnwindWork.new': ['unwindInterruptedWork'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiber.new': ['createWorkInProgress'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new': ['finishQueueingConcurrentUpdates'],
    },
    commitRoot: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new': ['getCurrentUpdatePriority', 'setCurrentUpdatePriority'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['commitRootImpl'],
    },
    renderRootConcurrent: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['pushDispatcher', 'restorePendingUpdaters', 'resetRenderTimer', 'prepareFreshStack', 'workLoopConcurrent', 'handleError', 'popDispatcher'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['movePendingFibersToMemoized', 'getTransitionsForLanes'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberDevToolsHook.new': ['markRenderStarted', 'markRenderYielded', 'markRenderStopped'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberNewContext.new': ['resetContextDependencies'],
    },
    isRenderConsistentWithExternalStores: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['is'],
    },
    finishConcurrentRender: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['commitRoot', 'markRootSuspended', 'shouldForceFlushFallbacksInDEV', 'requestEventTime', 'jnd'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['includesOnlyRetries', 'getNextLanes', 'isSubsetOfLanes', 'markRootPinged', 'includesOnlyTransitions', 'getMostRecentEventTime'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['now'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHostConfig': ['scheduleTimeout'],
    },
    flushPassiveEffectsImpl: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberDevToolsHook.new': ['markPassiveEffectsStarted', 'markPassiveEffectsStopped', 'onPostCommitRootDevTools'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberCommitWork.new': ['commitPassiveUnmountEffects', 'commitPassiveMountEffects', 'commitPassiveEffectDurations'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberSyncTaskQueue.new': ['flushSyncCallbacks'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['now'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['scheduleCallback'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberTracingMarkerComponent.new': ['processTransitionCallbacks'],
    },
    releaseRootPooledCache: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberCacheComponent.new': ['releaseCache'],
    },
    pushDispatcher: {},
    restorePendingUpdaters: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['addFiberToLanesMap'],
    },
    workLoopSync: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['performUnitOfWork'],
    },
    handleError: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberNewContext.new': ['resetContextDependencies'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHooks.new': ['resetHooksAfterThrow'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactCurrentFiber': ['resetCurrentDebugFiberInDEV'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactProfilerTimer.new': ['stopProfilerTimerIfRunningAndRecordDelta'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberDevToolsHook.new': ['markComponentRenderStopped', 'markComponentSuspended', 'markComponentErrored'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberThrow.new': ['throwException'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['completeUnitOfWork'],
    },
    popDispatcher: {},
    queueRecoverableErrors: {},
    commitRootImpl: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['flushPassiveEffects', 'flushRenderPhaseStrictModeWarningsInDEV', 'scheduleCallback', 'releaseRootPooledCache', 'ensureRootIsScheduled'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberDevToolsHook.new': ['markCommitStarted', 'markCommitStopped', 'markLayoutEffectsStarted', 'markLayoutEffectsStopped', 'onCommitRootDevTools'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['mergeLanes', 'markRootFinished', 'includesSomeLane'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new': ['getConcurrentlyUpdatedLanes'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new': ['getCurrentUpdatePriority', 'setCurrentUpdatePriority'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberCommitWork.new': ['commitBeforeMutationEffects', 'commitMutationEffects', 'commitLayoutEffects'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactProfilerTimer.new': ['recordCommitTime', 'markNestedUpdateScheduled'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberHostConfig': ['afterActiveInstanceBlur', 'resetAfterCommit'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['requestPaint', 'now'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberSyncTaskQueue.new': ['flushSyncCallbacks'],
    },
    workLoopConcurrent: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['shouldYield'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['performUnitOfWork'],
    },
    is: {},
    shouldForceFlushFallbacksInDEV: {},
    jnd: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['ceil'],
    },
    throwIfInfiniteUpdateLoopDetected: {},
    performUnitOfWork: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactCurrentFiber': ['setCurrentDebugFiberInDEV', 'resetCurrentDebugFiberInDEV'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactProfilerTimer.new': ['startProfilerTimer', 'stopProfilerTimerIfRunningAndRecordDelta'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new.js': ['beginWork', 'completeUnitOfWork'],
    },
    completeUnitOfWork: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactCurrentFiber': ['setCurrentDebugFiberInDEV', 'resetCurrentDebugFiberInDEV'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberCompleteWork.new': ['completeWork'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactProfilerTimer.new': ['startProfilerTimer', 'stopProfilerTimerIfRunningAndRecordDelta'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberUnwindWork.new': ['unwindWork'],
    },
    flushRenderPhaseStrictModeWarningsInDEV: {},
    ceil: {},
    beginWork: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberDevToolsHook.new.js': {
    markRenderScheduled: {},
    markRenderStarted: {},
    markRenderStopped: {},
    markRenderYielded: {},
    markPassiveEffectsStarted: {},
    markPassiveEffectsStopped: {},
    onPostCommitRootDevTools: {},
    markComponentRenderStopped: {},
    markComponentSuspended: {},
    markComponentErrored: {},
    markCommitStarted: {},
    markCommitStopped: {},
    markLayoutEffectsStarted: {},
    markLayoutEffectsStopped: {},
    onCommitRootDevTools: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberClassUpdateQueue.new.js': {
    createUpdate: {},
    enqueueUpdate: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new': ['isUnsafeClassRenderPhaseUpdate'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new': ['unsafe_markUpdateLaneFromFiberToRoot', 'enqueueConcurrentClassUpdate'],
    },
    entangleTransitions: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['isTransitionLane', 'intersectLanes', 'mergeLanes', 'markRootEntangled'],
    },
    initializeUpdateQueue: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberRoot.new.js': {
    createFiberRoot: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiber.new': ['createHostRootFiber'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberCacheComponent.new': ['createCache', 'retainCache'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberClassUpdateQueue.new': ['initializeUpdateQueue'],
    },
  },
  '/Users/yogurt/workspace/test/react-lego/step6/shared/ReactInstanceMap.js': {
    getInstance: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberContext.new.js': {
    findCurrentUnmaskedContext: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberContext.new.js': ['findCurrentUnmaskedContext'],
    },
    isLegacyContextProvider: {},
    processChildContext: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberContext.new.js': ['processChildContext'],
    },
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler.js': {
    now: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler': ['unstable_now'],
    },
    scheduleCallback: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler': ['unstable_scheduleCallback'],
    },
    Scheduler_cancelCallback: {},
    Scheduler_scheduleCallback: {},
    requestPaint: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler': ['unstable_requestPaint'],
    },
    shouldYield: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler': ['unstable_shouldYield'],
    },
    getCurrentSchedulerPriorityLevel: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': {
    pickArbitraryLane: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['getHighestPriorityLane'],
    },
    claimNextTransitionLane: {},
    markRootUpdated: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['laneToIndex'],
    },
    mergeLanes: {},
    addFiberToLanesMap: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['laneToIndex'],
    },
    addTransitionToLanesMap: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['laneToIndex'],
    },
    isTransitionLane: {},
    intersectLanes: {},
    markRootEntangled: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['pickArbitraryLaneIndex'],
    },
    removeLanes: {},
    markRootSuspended_dontCallThisOneDirectly: {},
    markStarvedLanesAsExpired: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['pickArbitraryLaneIndex', 'computeExpirationTime'],
    },
    getNextLanes: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['getHighestPriorityLanes', 'getHighestPriorityLane', 'pickArbitraryLaneIndex'],
    },
    getHighestPriorityLane: {},
    laneToIndex: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['pickArbitraryLaneIndex'],
    },
    pickArbitraryLaneIndex: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/clz32': ['clz32'],
    },
    computeExpirationTime: {},
    getHighestPriorityLanes: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['getHighestPriorityLane'],
    },
    includesNonIdleWork: {},
    includesSomeLane: {},
    getLanesToRetrySynchronouslyOnError: {},
    includesBlockingLane: {},
    includesExpiredLane: {},
    markHiddenUpdate: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['laneToIndex'],
    },
    movePendingFibersToMemoized: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['laneToIndex'],
    },
    getTransitionsForLanes: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['laneToIndex'],
    },
    includesOnlyRetries: {},
    isSubsetOfLanes: {},
    markRootPinged: {},
    includesOnlyTransitions: {},
    getMostRecentEventTime: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['pickArbitraryLaneIndex'],
    },
    markRootFinished: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new.js': ['pickArbitraryLaneIndex'],
    },
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberTransition.js': {
    requestCurrentTransition: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new.js': {
    getCurrentUpdatePriority: {},
    lanesToEventPriority: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['getHighestPriorityLane', 'includesNonIdleWork'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new.js': ['isHigherEventPriority'],
    },
    isHigherEventPriority: {},
    setCurrentUpdatePriority: {},
    lowerEventPriority: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js': {
    flushSyncCallbacksOnlyInLegacyMode: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js': ['flushSyncCallbacks'],
    },
    scheduleLegacySyncCallback: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberSyncTaskQueue.new.js': ['scheduleSyncCallback'],
    },
    scheduleSyncCallback: {},
    flushSyncCallbacks: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactEventPriorities.new': ['getCurrentUpdatePriority', 'setCurrentUpdatePriority'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['scheduleCallback'],
    },
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js': {
    unsafe_markUpdateLaneFromFiberToRoot: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js': ['markUpdateLaneFromFiberToRoot', 'getRootForUpdatedFiber'],
    },
    enqueueConcurrentClassUpdate: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js': ['enqueueUpdate', 'getRootForUpdatedFiber'],
    },
    markUpdateLaneFromFiberToRoot: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['mergeLanes', 'markHiddenUpdate'],
    },
    getRootForUpdatedFiber: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberWorkLoop.new': ['throwIfInfiniteUpdateLoopDetected'],
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js': ['detectUpdateOnUnmountedFiber'],
    },
    enqueueUpdate: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberLane.new': ['mergeLanes'],
    },
    detectUpdateOnUnmountedFiber: {},
    finishQueueingConcurrentUpdates: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberConcurrentUpdates.new.js': ['markUpdateLaneFromFiberToRoot'],
    },
    getConcurrentlyUpdatedLanes: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiber.new.js': {
    createHostRootFiber: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiber.new.js': ['createFiber'],
    },
    createFiber: {},
    createWorkInProgress: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiber.new.js': ['createFiber'],
    },
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberCacheComponent.new.js': {
    createCache: {},
    retainCache: {},
    releaseCache: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/ReactFiberCacheComponent.new.js': ['scheduleCallback'],
    },
    scheduleCallback: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/scheduler/index.js': {
    unstable_now: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler': ['unstable_now'],
    },
    unstable_scheduleCallback: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler': ['unstable_scheduleCallback'],
    },
    unstable_requestPaint: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler': ['unstable_requestPaint'],
    },
    unstable_shouldYield: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler': ['unstable_shouldYield'],
    },
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/ReactDOMEventListener.js': {
    createEventListenerWrapperWithPriority: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/ReactDOMEventListener.js': ['getEventPriority', 'listenerWrapper'],
    },
    getEventPriority: {
      '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/Scheduler': ['getCurrentSchedulerPriorityLevel'],
    },
    listenerWrapper: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-dom/src/events/EventListener.js': {
    removeEventListener: {},
    addEventCaptureListenerWithPassiveFlag: {},
    addEventCaptureListener: {},
    addEventBubbleListenerWithPassiveFlag: {},
    addEventBubbleListener: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler.js': {
    unstable_now: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler.js': ['getCurrentTime'],
    },
    getCurrentTime: {},
    unstable_scheduleCallback: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler.js': ['unstable_scheduleCallback'],
    },
    unstable_requestPaint: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler.js': ['unstable_requestPaint'],
    },
    unstable_shouldYield: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler.js': ['shouldYieldToHost'],
    },
    shouldYieldToHost: {
      '/Users/yogurt/workspace/test/react-lego/step6/scheduler/src/forks/Scheduler.js': ['getCurrentTime', 'isInputPending'],
    },
    isInputPending: {},
  },
  '/Users/yogurt/workspace/test/react-lego/step6/react-reconciler-new/src/clz32.js': {
    clz32: {},
  },
}

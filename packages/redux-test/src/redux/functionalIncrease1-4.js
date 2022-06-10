console.log("1.3")

function reducer(state = 1, action) {
  if (action === "add") {
    return state + 1
  } else if (action === "sub") {
    return state - 1
  } else {
    return state
  }
}

function thunk(store, action) {
  if (typeof action === "function") {
    console.log("store.dispatch", store.dispatch)
    return action(store.dispatch)
  }
  return store.dispatch(action)
}

function log(store, action) {
  console.group(action)
  console.log("prev state", store.getState())
  console.info("dispatching", action)
  let result = store.dispatch(action)
  console.log("next state", store.getState())
  console.groupEnd()

  return result
}
// const store = finalCreateStore(reducer)
const store = enhancerCompose(createStore, [thunk, log])(reducer)
export { store }

function createStore(reducer) {
  let state = reducer()
  let listeners = []

  function subscribe(cb) {
    listeners.push(cb)
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach((v) => v())
    return state
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    getState,
    dispatch,
  }
}



// 为什么要进行柯里化
function enhancerCompose(createStore, funcs) {
  function enhancer(createStore, middleware) {
    const newCreateStore = (reducer) => {
      const store = createStore(reducer)
  
      const dispatch = (action) => {
        middleware(store, action)
      }
  
      return {
        ...store,
        dispatch,
      }
    }
  
    return newCreateStore
  }
  return funcs.reduce((acc, cur) => {
    return enhancer(acc, cur)
  }, createStore)
}



function finalCreateStore(reducer) {
  const firstCreate = createStore
  let store = firstCreate(reducer)

  // thunk
  const originDispatch = store.dispatch
  store = {
    ...store,
    dispatch: (action) => {
      if (typeof action === "function") {
        return action(store.dispatch)
      }
      return originDispatch(action) // 原生那个
    },
  }

  // log
  const thunkDispatch = store.dispatch
  store = {
    ...store,
    dispatch: (action) => {
      console.group(action)
      console.log("prev state", store.getState())
      console.info("dispatching", action)
      let result = thunkDispatch(action) // thunk那个
      console.log("next state", store.getState())
      console.groupEnd()
    },
  }

  return store
}

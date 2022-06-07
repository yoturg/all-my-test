function reducer(state = 1, action) {
  if (action === "add") {
    return state + 1
  } else if (action === "sub") {
    return state - 1
  } else {
    return state
  }
}

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

  function dispatch1(action) {
    const prevState = state
    const nextState = dispatch(action)
    console.log("prev state", prevState)
    console.log("action", action)
    console.log("next state", nextState, "\n\n")
    return nextState
  }

  function dispatch2(action) {
    if (typeof action === "function") {
      action(dispatch2)
    } else {
      return dispatch1(action)
    }
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    getState,
    dispatch,
    dispatch1,
    dispatch2,
  }
}

function newDispatch (store, action) {
  function log( action) {
    const prevState = state
    const nextState = store.dispatch(action)
    console.log("prev state", prevState)
    console.log("action", action)
    console.log("next state", nextState, "\n\n")
    return action
  }
  
  function thunk (action) {
    if(typeof action === 'function') {
      return action(store.dispatch)
    }
    return action
  }
  store.dispatch(thunk(log(action)))
}




function enhancer(createStore, reducer) {
  const store = createStore(reducer)
}
const store = createStore(reducer)





export { store }

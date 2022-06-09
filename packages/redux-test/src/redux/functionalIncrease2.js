function reducer(state = 1, action) {
  if (action === "add") {
    return state + 1
  } else if (action === "sub") {
    return state - 1
  } else {
    return state
  }
}

function createStore(reducer, logDispatch) {
  
  if(typeof logDispatch === 'function') {
    const store = createStore(reducer)

    // log
    function dispatch(action) {
      return logDispatch(store, action)
    }

    return {
      ...store,
      dispatch,
    }
  }


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

function log(store, action) {
  const prevState = store.getState()
  const nextState = store.dispatch(action)
  console.log("prev state", prevState)
  console.log("action", action)
  console.log("next state", nextState, "\n\n")
  return action
}

const store = createStore(reducer, log)
export { store }

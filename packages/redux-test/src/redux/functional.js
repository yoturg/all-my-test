function reducer (state = 1, action) {
  if(action === 'add') {
    return state + 1
  } else if (action === 'sub') {
    return state - 1
  } else {
    return state
  }
}

function createStore(reducer) {
  let state = reducer()
  let listeners = []

  function subscribe (cb) {
    listeners.push(cb)
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(v => v())
  }

  function getState() {
    return state
  }


  return {
    subscribe,
    dispatch,
    getState
  }
}

const store = createStore(reducer)

export {
  store
}
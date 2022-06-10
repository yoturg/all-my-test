console.log('1.2')
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

  function getState() {
    return state
  }

  return {
    subscribe,
    getState,
    dispatch,
  }
}

function thunk (store, action) {
  if(typeof action === 'function') {
    return action(store.dispatch)
  }
  return store.dispatch(action) 
}

function log(store, action) {
  console.group(action);
  console.log('prev state', store.getState());
  console.info('dispatching', action);
  let result = store.dispatch(action);
  console.log('next state', store.getState());
  console.groupEnd();

  return result
}


// function logger(store) {
//   return function(next) {
//     return function(action) {
//       console.group(action.type);
//       console.info('dispatching', action);
//       let result = next(action);
//       console.log('next state', store.getState());
//       console.groupEnd();
//       return result
//     }
//   }
// }

function enhancer (createStore, middleware) {

  const newCreateStore = (reducer) => {
    const store = createStore(reducer)

    const newDispatch = (action) => {
      middleware(store, action)
    }

    return {
      ...store,
      dispatch: newDispatch
    }
  }


  return newCreateStore
}

// function applyMiddleware(middleware) {
//   function enhancer(createStore) {
//     function newCreateStore(reducer) {
//       const store = createStore(reducer);
      
//       // 将middleware拿过来执行下，传入store
//       // 得到第一层函数
//       const func = middleware(store);
      
//       // 解构出原始的dispatch
//       const { dispatch } = store;
      
//       // 将原始的dispatch函数传给func执行
//       // 得到增强版的dispatch
//       const newDispatch = func(dispatch);
      
//       // 返回的时候用增强版的newDispatch替换原始的dispatch
//       return {...store, dispatch: newDispatch}
//     }
    
//     return newCreateStore;
//   }
  
//   return enhancer;
// }

const store = enhancer(enhancer(createStore, thunk),  log)(reducer)
export { store }



import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"

const reducer = (state = 1, action) => {
  if (action.type === "add") {
    return state + 1
  } else if (action.type === "sub") {
    return state - 1
  } else {
    return state
  }
}
function consoleMiddleware (num) {
  function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
      console.log(num, "--before")
      next(action);
      console.log(num, "--after")
    };
  }
  return createThunkMiddleware()
}
const enhancer = compose( applyMiddleware(...[
  consoleMiddleware(0),
  createLogger({}),
  consoleMiddleware(1),
  thunkMiddleware,
  consoleMiddleware(2),
]) )

const store = createStore(reducer, enhancer)

export default store
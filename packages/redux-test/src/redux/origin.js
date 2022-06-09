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
// const enhancer = compose( applyMiddleware(...[
//   thunkMiddleware,
//   createLogger({})
// ]) )
const enhancer = compose( applyMiddleware(...[
  createLogger({}),
  thunkMiddleware
]) )

const store = createStore(reducer, enhancer)

export default store
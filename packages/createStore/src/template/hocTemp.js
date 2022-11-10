module.exports = `
import { Provider } from 'react-redux'
import store from './index'

export default Component => {
  return function (props) {
    return (
      <Provider store={store}>
        <Component {...props}></Component>
      </Provider>
    )
  }
}

`

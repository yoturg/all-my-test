module.exports = `
const reducer = (state = {
  test: 0
}, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD':
      return {
        ...state,
        test: state.test + 1
      }
  }
  return state
}


export default reducer
`

class reducer {
  constructor(initState, action) {
    this.state = initState
    this.action = action
  }

  getState() {
    return this.state
  }

  action(type) {
    if (type === 'add') {
      times++
    } else if (type === 'sub') {
      times--
    }
  }
}

class store {
  constructor(reducer) {
    this.reducer = reducer
    this.listener = []
  }

  

  getState() {
    this.reducer.getState()
  }
}

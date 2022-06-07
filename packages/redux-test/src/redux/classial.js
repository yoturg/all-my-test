
class StoreData {
  constructor(initalState) {
    this.value = initalState
  }
  getValue() {
    return this.value
  }

}
class Store {
  constructor(data) {
    this.data = data
    this.listener = []
  }

  getState() {
    return this.data.getValue()
  }

  dispatch(action) {
    if(this.data[action]) {
      this.data[action]()
    }
    this.listener.forEach((v) => {
      v()
    })
  }

  subscribe(fn) {
    this.listener.push(fn)
  }
}

class MyData extends StoreData {
  constructor(data) {
    super(data)
  }
  add() {
    this.value++
  }
  sub() {
    this.value--
  }
}


const data = new MyData(1)
const store = new Store(data)
export {
  store
}
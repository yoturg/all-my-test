function MyPromise(fn) {
  this.PromiseState = "pending"
  this.PromiseResult = undefined
  this.thenfn = []
  this.errorfn = []
  function resolve(res) {
    this.PromiseState = "fulfilled"
    this.PromiseResult = res
    this.thenfn.forEach((v) => {
      v(this.PromiseResult)
    })
  }
  function reject(res) {
    this.PromiseState = "rejected"
    this.PromiseResult = res
    this.errorfn.forEach((v) => {
      v(this.PromiseResult)
    })
  }
  try {
    fn(resolve.bind(this), reject.bind(this))
  } catch (e) {
    onRejected(e)
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (res) => {return res}
  onRejected = typeof onRejected === 'function' ? onRejected : (e) => {throw e}
  
  if (this.PromiseState === "pending") {
    this.thenfn.push(onFulfilled)
    this.errorfn.push(onRejected)
  } else if (this.PromiseState === "fulfilled") {
    onFulfilled()
  } else {
    onRejected()
  }
  return this
}

// new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000)
// }).then(res => {
//   console.log(111)
// })

new MyPromise((resolve, reject) => {
  const fn = Math.random() > 0.5 ? resolve : reject
  setTimeout(fn, 1000)
})
  .then(
    (res) => {
      console.log(111)
    },
    (res) => {
      console.log(222)
    }
  )
  .then(
    (res) => {
      console.log(333)
    },
    (e) => {
      console.log(444)
    }
  )

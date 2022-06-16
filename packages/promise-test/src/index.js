
function MyPromise (fn) {
  this.PromiseState = 'pending'
  this.PromiseResult = undefined
  this.thenfn = []
  this.errorfn = []
  function onFulfilled (res) {
    this.PromiseState = 'fulfilled' 
    this.PromiseResult = res
    this.thenfn.forEach(v => {
      v(this.PromiseResult)
    })
  }
  function onRejected (res) {
    this.PromiseState = 'rejected' 
    this.PromiseResult = res
    this.errorfn.forEach(v => {
      v(this.PromiseResult)
    })
  }
  try {
    fn(onFulfilled.bind(this), onRejected.bind(this))
  } catch(e) {
    onRejected(e)
  }
}
MyPromise.prototype.then = function (fn1, fn2) {
  if(this.PromiseState === 'pending') {
    this.thenfn.push(fn1)
    this.errorfn.push(fn2)
  } else if( this.PromiseState === 'fulfilled') {
    fn1()
  } else {
    fn2()
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
}).then(res => {
  console.log(111)
}, res => {
  console.log(222)
}).then(res => {
  console.log(333)
}, e => {
  console.log(444)
})
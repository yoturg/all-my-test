let times = 1


const getState = () => {
  return times
}

const add = () => {
  times++
  listener.forEach(v => {
    v(times)
  })
}

const listener = []

const subscribe = (fn) => {
  listener.push(fn)
}


export {
  getState,
  subscribe,
  add
}
let times = 1


const getState = () => {
  return times
}

const add = () => {
  times++
  listener.forEach(v => {
    v()
  })
}

const sub = () => {
  times--
  listener.forEach(v => {
    v()
  })
}

const action = (type) => {
  if(type === 'add') {
    times++
  } else if(type === 'sub') {
    times--
  }
  listener.forEach(v => {
    v()
  })
}

const listener = []

const subscribe = (fn) => {
  listener.push(fn)
}


export {
  getState,
  subscribe,
  add,
  sub,
  action
}
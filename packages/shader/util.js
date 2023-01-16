window.clamp = function (x, min, max) {
  if (min > max) return
  return Math.min(Math.max(x, min), max)
}

window.smoothstep = function (edge0, edge1, x) {
  if(edge0 >= edge1) return
  if (x <= edge0) return 0
  if (x >= edge1) return 1

  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}

window.normalize = function (vec) {
  const len = Math.sqrt(vec.reduce((acc, cur) => {
    return acc + cur * cur
  }, 0))

  return vec.map(v => v/len)
}

window.dot = function (x,y) {
  return x.reduce((acc, cur, idx) => {
    return acc +  cur * y[idx] 
  }, 0)
}

window.cross = function (x, y) {
  return [
    x[1]*y[2] - y[1]*x[2],
    x[2]*y[0] - y[2]*x[0],
    x[0]*y[1] - y[0]*x[1]
  ]
}

const keyList = ['xyzw', 'rgba', 'stpq']

function createVec(dim) {
  const keyMap = keyList.map(v => v.slice(0, dim))
  return function (...args) {
    const list = Array.prototype.concat.apply([], args)
    if(list.length !== dim) {
      throw new Error('not enough data provided for construction')
    }
    return list
  }


}
for (let i = 2; i <=4; i++) {
  window[`vec${i}`] = createVec(i)
}


window.min = Math.min
window.max = Math.map
window.exp = Math.exp
window.sin = Math.sin
window.cos = Math.cos


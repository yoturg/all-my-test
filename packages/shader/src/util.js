const radians = function (deg) {
  return (Math.PI / 180) * deg
}

const degrees = function (rad) {
  return (180 / Math.PI) * deg
}

const clamp = function (x, min, max) {
  if (min > max) return
  if (x.type === 'vec') {
    for (let i = 0; i < x.dem; i++) {
      x[i] = Math.min(Math.max(x[i], min), max)
    }
    return x
  } else {
    return Math.min(Math.max(x, min), max)
  }
}

const smoothstep = function (edge0, edge1, x) {
  if (edge0 >= edge1) return
  if (x <= edge0) return 0
  if (x >= edge1) return 1

  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}

const normalize = function (vec) {
  const len = Math.sqrt(
    vec.reduce((acc, cur) => {
      return acc + cur * cur
    }, 0)
  )

  // return vec.map((v) => v / len)
  return vec.mult(1 / len)
}

const dot = function (x, y) {
  return x.reduce((acc, cur, idx) => {
    return acc + cur * y[idx]
  }, 0)
}

const cross = function (x, y) {
  return vec3([x[1] * y[2] - y[1] * x[2], x[2] * y[0] - y[2] * x[0], x[0] * y[1] - y[0] * x[1]])
}

function permutation(str, times) {
  const list = Array.from(str)
  if (times === 1) return list
  const nextStrMap = permutation(str, times - 1)
  return list.reduce((acc, cur) => {
    return acc.concat(
      cur,
      nextStrMap.map((newStr) => `${cur}${newStr}`)
    )
  }, [])
}

const keyList = ['xyzw', 'rgba', 'stpq']

function createVec(dim) {
  const keyMap = permutation('0123'.slice(0, dim), dim)
  return function (...args) {
    let list = new Array(dim)
    if (args.length === 1 && typeof args[0] === 'number') {
      list.fill(args[0])
    } else {
      list = Array.prototype.concat.apply([], args)
      if (list.length !== dim) {
        throw new Error('not enough data provided for construction')
      }
    }

    keyMap.forEach((numStr) => {
      const numList = Array.from(numStr)

      const keys = keyList.map((originKey) => {
        return numList.map((idx) => originKey.charAt(idx)).join('')
      })
      keys.forEach((key) => {
        Object.defineProperty(list, key, {
          enumerable: false,
          set(l) {
            l = [].concat(l)
            if (
              numList.some((val, ind, arr) => {
                return arr.lastIndexOf(val) !== ind
              })
            ) {
              throw new Error('used twice')
            }
            if (l.length !== numList.length) {
              throw new Error(`mismatch between vec${numList.length} and vec${l.length}`)
            }
            numList.forEach((num, index) => {
              list[num] = l[index]
            })
          },
          get() {
            if (numList.length === 1) {
              return list[numList[0]]
            }
            const vec = createVec(numList.length)
            return vec(numList.map((ind) => list[ind]))
          },
        })
      })
    })
    list.add = function (num) {
      const result = createVec(dim)(this)
      if (typeof num === 'number') {
        result.forEach((v, i) => {
          result[i] += num
        })
      } else if (num.type === 'vec' && num.length === result.length) {
        result.forEach((v, i) => {
          result[i] += num[i]
        })
      }

      return result
    }
    list.sub = function (num) {
      if (typeof num === 'number') {
        return list.add(-1 * num)
      } else if (num.type === 'vec') {
        return list.add(num.mult(-1))
      }
    }
    list.mult = function (num) {
      const result = createVec(dim)(this)
      if (typeof num === 'number') {
        result.forEach((v, i) => {
          result[i] *= num
        })
      } else if (num.type === 'mat' && num.length === result.length) {
        this.forEach((v, i) => {
          result[i] = dot(this, num[i])
        })
      }
      return result
    }

    list.divide = function (num) {
      if (typeof num === 'number') {
        return list.mult(1 / num)
      }
    }

    list.type = 'vec'
    list.dim = dim
    return list
  }
}

function createMat(dim) {
  const vec = createVec(dim)
  return function (...args) {
    let list = new Array(dim).fill(null)
    if (args.length === 1) {
      list = list.map((_, i) => {
        const vector = vec(0)
        vector[i] = args[0]
        return vector
      })
    } else if (args.length === dim * dim) {
      list = list.map((_, i) => {
        const vecList = new Array(dim).fill(null).map((__, inx) => args[inx + i * dim])
        return vec(vecList)
      })
    } else {
      throw new Error('not enough data provided for construction')
    }
    list.mult = function (args) {
      if (typeof args === 'number') {
        return this.map((vec) => vec.mult(args))
      } else if (args.type === 'vec' && args.dim === dim) {
        const m = this
        const v = args

        return v
          .map((num, ind) => m[ind].mult(num))
          .reduce((acc, cur) => {
            return vec(acc.add(cur))
          }, vec(0))
      } else if (args.type === 'mat' && args.dim === dim) {
        return args.map((n) => this.mult(n))
      } else {
        throw new Error('错了，或者这个情况我还没写')
      }
    }
    list.type = 'mat'
    list.dim = dim
    return list
  }
}
for (let i = 2; i <= 4; i++) {
  window[`vec${i}`] = createVec(i)
  window[`mat${i}`] = createMat(i)
}

window.smoothstep = smoothstep
window.cross = cross
window.dot = dot
window.normalize = normalize
window.clamp = clamp

window.min = Math.min
window.max = Math.max
window.exp = Math.exp
window.sin = Math.sin
window.cos = Math.cos
window.tan = Math.tan
window.asin = Math.asin
window.acos = Math.acos
window.abs = Math.abs
window.atan = function (...args) {
  if (args.length === 1) {
    Math.atan(...args)
  } else {
    Math.atan2(...args.slice(0, 2))
  }
}

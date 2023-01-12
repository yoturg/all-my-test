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

function vec(...args) {
  return Array.prototype.concat.apply([], args)
}
window.vec2 = vec
window.vec3 = vec
window.vec4 = vec

window.min = Math.min
window.max = Math.map
window.exp = Math.exp
window.sin = Math.sin
window.cos = Math.cos


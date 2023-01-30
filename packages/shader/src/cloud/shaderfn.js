import '../util'

let iTime = 0
let prm1 = 0
function rot(a) {
  let c = cos(a),
    s = sin(a)
  return mat2(c, s, -s, c)
}

function mag2(p) {
  return dot(p, p)
}

function map(p) {
  let p2 = vec3(p) // 入参的向量

  p.xy = rot(sin(p.z + iTime) * (0.1 + prm1 * 0.05) + iTime * 0.09).mult(p.xy)

  let cl = mag2(p2.xy) // p2向量模的平方

  let d = 0
  p = p.mult(0.61) // 放大0.61倍

  d = abs(d + prm1 * 3) + prm1 * 0.3 - 2.5
  return vec2(d + cl * 0.2 + 0.25, cl)
}

function map2(p) {

  p.xy = rot(sin(p.z + iTime) * (0.1 + prm1 * 0.05) + iTime * 0.09).mult(p.xy)
  return p
}

function render(ro, rd) {
  let rez = vec4(0)

  let t = 1.5
  let fogT = 0


  for (let i = 0; i < 60; i++) {
    if (rez.a > 0.99) break

    let pos = ro.add(rd.mult(t))

    // console.log('rd.mult(t)', rd.mult(t))
    // console.log('pos', pos)

    let mpv = map(pos)


    let dn = clamp(mpv.x + 2, 0, 3)

    let col = vec4(0)

    let fogC = exp(t * 0.2 - 2.2)

    col = col.rgba.add(vec4(0.06, 0.11, 0.11, 0.1).mult(clamp(fogC - fogT, 0, 1)))

    fogT = fogC
    rez = rez.add(col.mult(1-rez.a))
    t += clamp(0.5 - dn * dn * 0.05, 0.09, 0.3)
  }

  // return clamp(rez, 0.0, 1.0)
  return map2(ro.add(rd.mult(t)))
}


export default function shaderfn(gl_FragCoord, iResolution, itime) {
  iTime = itime
  let tgtDst = 3.5

  let p = gl_FragCoord.xy.sub(iResolution.xy.mult(0.5)).divide(min(iResolution.y, iResolution.x))

  let time = iTime * 3
  let ro = vec3(0, 0, time)

  let target = normalize(vec3(0, 0, -tgtDst))
  let rightdir = normalize(cross(target, vec3(0, 1, 0))) // vec3(1, 0, 0)
  let updir = normalize(cross(rightdir, target)) // vec3(0, 1, 0)
  rightdir = normalize(cross(updir, target)) // vec3(-1, 0, 0)
  // let rd = normalize(rightdir.mult(p.x).add(updir.mult(p.y)).mult(target.mult(-1).add(1)))
  // let rd = normalize((p.x * rightdir + p.y * updir) - target);
  let rd = normalize(rightdir.mult(p.x).add(updir.mult(p.y)).add(target.mult(-1)))
  // console.log(rd)

  prm1 = smoothstep(-0.4, 0.4, sin(iTime * 0.3))

  let scn = render(ro, rd)

  return { p, scn, prm1, rd }
}

import '../util'

export default function shaderfn(gl_FragCoord, iResolution, itime) {

  let p = gl_FragCoord.xy.sub(iResolution.xy.mult(0.5)).divide(min(iResolution.y, iResolution.x))

  return { p }
}

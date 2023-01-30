import cloud from './src/cloud'
import { program as fnImagePro } from './src/fnImage'

// Get A WebGL context
/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas')
const gl = canvas.getContext('webgl')

cloud(canvas)

// const fnProgram = new fnImagePro(gl)

// function targetFn(x) {
//   let tgtDst = 3.5

//   let target = normalize(vec3(0, 0, -tgtDst))
//   let rightdir = normalize(cross(target, vec3(0, 1, 0))) // vec3(1, 0, 0)
//   let updir = normalize(cross(rightdir, target)) // vec3(0, 1, 0)
//   rightdir = normalize(cross(updir, target)) // vec3(-1, 0, 0)
//   let rd = normalize(rightdir.mult(x).add(updir.mult(10)).mult(target.mult(-1).add(1)))
//   return rd.x
// }

// const pointList = [0, 0]
// const limit = 100
// const targerResolution = 2048
// for (let i = limit * -0.5; i < limit * 0.5; ) {
//   pointList.push(i)
//   pointList.push(targetFn(i))
//   i += limit / targerResolution
// }
// console.log('pointList', pointList)

// fnProgram.draw(
//   {
//     attribs: {
//       position: {
//         numComponents: 2,
//         data: pointList,
//       },
//     },
//     uniforms: {
//       iResolution: [gl.canvas.width, gl.canvas.height],
//       iLimit: limit / 2,
//     },
//   },
//   pointList.length / 2
// )

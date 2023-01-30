import fs from './fragmentShader.glsl'
import vs from './vertexShader.glsl'
import webglUtils from '../webgl-utils'

function targetFn(x) {
  // return clamp((x + 2.), 2, 3.);
  // return exp(x * 0.2 - 2.2);
  const fogC = exp(x * 0.2 - 2.2)
  const fogT = exp((x - 0.3) * 0.2 - 2.2)
  return clamp(fogC - fogT, 0, 1)
  // return smoothstep(-3, 3, (x + 2.))
  // return sin(x)
  // return x
}

export class program {
  program = null
  gl = null
  constructor(gl) {
    this.gl = gl
    this.program = webglUtils.createProgramFromSources(gl, [vs, fs])
  }
  draw(data, length) {
    const gl = this.gl
    const program = this.program

    webglUtils.resizeCanvasToDisplaySize(gl.canvas)
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    gl.useProgram(program)

    const attribSetters = webglUtils.createAttributeSetters(gl, program)
    var bufferInfo = webglUtils.createBufferInfoFromArrays(gl, data.attribs)
    webglUtils.setBuffersAndAttributes(gl, attribSetters, bufferInfo)

    // 设置需要的全局变量和纹理
    const uniformSetters = webglUtils.createUniformSetters(gl, program)
    webglUtils.setUniforms(uniformSetters, data.uniforms)

    gl.drawArrays(
      gl.POINTS,
      0, // offset
      length // num vertices to process
    )
  }
}

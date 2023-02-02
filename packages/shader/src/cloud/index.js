import Stats from 'stats.js'
import '../util'
import fs from './fragmentShader.glsl'
import vs from './vertexShader.glsl'
import shaderfn from './shaderfn'
import webglUtils from '../webgl-utils'

const saveBlob = (function () {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style.display = 'none'
  return function saveData(blob, fileName) {
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = fileName
    a.click()
  }
})()

export default function (canvas) {
  const gl = canvas.getContext('webgl')
  if (!gl) {
    return
  }

  function moveEventHandler(e) {
    let x = 0,
      y = 0
    if (e.type === 'mousemove') {
      x = e.x
      y = e.y
    } else {
      x = e.changedTouches[0].pageX
      y = e.changedTouches[0].pageY
    }

    const pageWidth = innerWidth
    const pageHeight = innerHeight

    const pointWidth = point.offsetWidth
    const pointHeight = point.offsetHeight

    let top = y
    let left = x
    if (x + pointWidth >= pageWidth - 10) {
      left -= pointWidth
    }
    if (y + pointHeight >= pageHeight - 10) {
      top -= pointHeight
    }

    point.style.top = top + 'px'
    point.style.left = left + 'px'

    const res = shaderfn(vec2(x, y), vec2(pageWidth, pageHeight), window.iTime)
    point.innerText = JSON.stringify(res).replaceAll(',', ',\n')
    e.stopPropagation()
  }

  function endEventHandler(e) {
    point.style.top = 'unset'
    point.style.left = 'unset'
  }

  canvas.addEventListener('mousemove', moveEventHandler)
  canvas.addEventListener('touchmove', moveEventHandler)

  canvas.addEventListener('mouseup', endEventHandler)
  canvas.addEventListener('touchend', endEventHandler)

  // setup GLSL program
  const program = webglUtils.createProgramFromSources(gl, [vs, fs])

  // look up where the vertex data needs to go.
  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')

  // look up uniform locations
  const resolutionLocation = gl.getUniformLocation(program, 'iResolution')
  const mouseLocation = gl.getUniformLocation(program, 'iMouse')
  const timeLocation = gl.getUniformLocation(program, 'iTime')

  // Create a buffer to put three 2d clip space points in
  const positionBuffer = gl.createBuffer()

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

  // fill it with a 2 triangles that cover clipspace
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1,
      -1, // first triangle
      1,
      -1,
      -1,
      1,
      -1,
      1, // second triangle
      1,
      -1,
      1,
      1,
    ]),
    gl.STATIC_DRAW
  )

  let mouseX = 0
  let mouseY = 0

  const stats = new Stats()
  stats.showPanel(0)
  // document.body.appendChild(stats.dom)

  let requestId
  function requestFrame() {
    if (!requestId) {
      stats.begin()
      requestId = requestAnimationFrame(render2)
      stats.end()
    }
  }
  function cancelFrame() {
    if (requestId) {
      cancelAnimationFrame(requestId)
      requestId = undefined
    }
  }

  window.save = function () {
    render2()
    canvas.toBlob((blob) => {
      saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);
    });
  }

  let then = 0
  let time = 0
  function render2(now) {
    requestId = undefined
    now *= 0.001 // convert to seconds
    const elapsedTime = Math.min(now - then, 0.1)
    time += elapsedTime
    then = now

    webglUtils.resizeCanvasToDisplaySize(gl.canvas)

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program)

    // Turn on the attribute
    gl.enableVertexAttribArray(positionAttributeLocation)

    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    gl.vertexAttribPointer(
      positionAttributeLocation,
      2, // 2 components per iteration
      gl.FLOAT, // the data is 32bit floats
      false, // don't normalize the data
      0, // 0 = move forward size * sizeof(type) each iteration to get the next position
      0 // start at the beginning of the buffer
    )

    gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height)
    gl.uniform2f(mouseLocation, mouseX, mouseY)
    window.iTime = time

    gl.uniform1f(timeLocation, time)

    gl.drawArrays(
      gl.TRIANGLES,
      0, // offset
      6 // num vertices to process
    )

    requestFrame()
  }

  requestFrame()
  requestAnimationFrame(cancelFrame)
}

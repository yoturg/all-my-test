import Stats from 'stats.js'
const VERTEX_COUNT = 300000

function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1
  const width = (canvas.clientWidth * multiplier) | 0
  const height = (canvas.clientHeight * multiplier) | 0
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true
  }
  return false
}

window.onload = function () {
  const canvas = document.createElement('canvas')
  canvas.id = 'cas'
  document.body.appendChild(canvas)
  const gl = canvas.getContext('webgl')

  resizeCanvasToDisplaySize(canvas)
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  

  const vertexShaderSource = document.querySelector('#vertex-shader-2d').text

  const vertexShader = gl.createShader(gl.VERTEX_SHADER) // 创建着色器对象
  gl.shaderSource(vertexShader, vertexShaderSource) // 提供数据源
  gl.compileShader(vertexShader) // 编译 -> 生成着色器

  const fragmentShaderSource = document.querySelector('#fragment-shader-2d').text
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) // 创建着色器对象
  gl.shaderSource(fragmentShader, fragmentShaderSource) // 提供数据源
  gl.compileShader(fragmentShader) // 编译 -> 生成着色器

  // 创建着色程序，并链接上着色器
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)

  // attribute float vertexId;
  const vertexIdLocation = gl.getAttribLocation(program, 'vertexId')
  // uniform float vertexCount;
  const vertexCountLocation = gl.getUniformLocation(program, 'vertexCount')
  // uniform float time;
  const timeLocation = gl.getUniformLocation(program, 'time')

  const vertexIdBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexIdBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(new Array(VERTEX_COUNT).fill(0).map((_, i) => i)), gl.STATIC_DRAW)

  gl.enableVertexAttribArray(vertexIdLocation)
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexIdBuffer)

  gl.vertexAttribPointer(vertexIdLocation, 1, gl.FLOAT, false, 0, 0)
  

  gl.uniform1f(vertexCountLocation, VERTEX_COUNT)

  const stats = new Stats()
  stats.showPanel(0)
  document.body.appendChild(stats.dom)

  let time = +new Date()
  ;(function animLoop () {
    
    gl.uniform1f(timeLocation, ( new Date() - time ) / 200)

    stats.begin()
    gl.drawArrays(gl.POINTS, 0, VERTEX_COUNT)
    stats.end()
    requestAnimationFrame(animLoop)
  })()

}



// function createShader(gl, type, source) {
//   var shader = gl.createShader(type);
//   gl.shaderSource(shader, source);
//   gl.compileShader(shader);
//   var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
//   if (success) {
//     return shader;
//   }

//   console.log(gl.getShaderInfoLog(shader));
//   gl.deleteShader(shader);
// }
// function main() {
//   // Get A WebGL context
//   var canvas = document.querySelector("#cas");
//   var gl = canvas.getContext("webgl");
//   if (!gl) {
//     return;
//   }

//   // Get the strings for our GLSL shaders
//   var vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
//   var vertexShader = gl.createShader(gl.VERTEX_SHADER);
//   gl.shaderSource(vertexShader, vertexShaderSource);
//   gl.compileShader(vertexShader);


//   var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;
//   var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
//   gl.shaderSource(fragmentShader, fragmentShaderSource);
//   gl.compileShader(fragmentShader);

//   var program = gl.createProgram();
//   gl.attachShader(program, vertexShader);
//   gl.attachShader(program, fragmentShader);
//   gl.linkProgram(program);

//     // attribute float vertexId;
//   const vertexIdLocation = gl.getAttribLocation(program, 'vertexId')
//   // uniform float vertexCount;
//   const vertexCountLocation = gl.getUniformLocation(program, 'vertexCount')
//   // uniform float time;
//   const timeLocation = gl.getUniformLocation(program, 'time')

//   const vertexIdBuffer = gl.createBuffer()

//   // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
//   gl.bindBuffer(gl.ARRAY_BUFFER, vertexIdBuffer);

//   var vertexId = new Array(VERTEX_COUNT).fill(0).map((_, i) => i)
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexId), gl.STATIC_DRAW)

//   // code above this line is initialization code.
//   // code below this line is rendering code.

//   resizeCanvasToDisplaySize(gl.canvas);

//   // Tell WebGL how to convert from clip space to pixels
//   gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

//   // Clear the canvas
//   gl.clearColor(0, 0, 0, 0);
//   gl.clear(gl.COLOR_BUFFER_BIT);

//   // Tell it to use our program (pair of shaders)
//   gl.useProgram(program);

//   // Turn on the attribute
//   gl.enableVertexAttribArray(positionAttributeLocation);

//   // Bind the position buffer.
//   gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

//   // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
//   var size = 2;          // 2 components per iteration
//   var type = gl.FLOAT;   // the data is 32bit floats
//   var normalize = false; // don't normalize the data
//   var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
//   var offset = 0;        // start at the beginning of the buffer
//   gl.vertexAttribPointer(
//       positionAttributeLocation, size, type, normalize, stride, offset);

//   // draw
//   var primitiveType = gl.TRIANGLES;
//   var offset = 0;
//   var count = 3;
//   gl.drawArrays(primitiveType, offset, count);
// }

// main();

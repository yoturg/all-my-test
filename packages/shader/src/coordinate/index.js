
import fs from "./fragmentShader.glsl";
import vs from "./vertexShader.glsl";

function targetFn(x) {
  // return clamp((x + 2.), 0., 3.);
  return smoothstep(0, 3, (x + 2.))
  // return sin(x)
}

export default (canvas) => {
  const gl = canvas.getContext("webgl");
window.webglUtils.resizeCanvasToDisplaySize(gl.canvas);
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

const program = window.webglUtils.createProgramFromSources(gl, [vs, fs]);
gl.useProgram(program);
// look up where the vertex data needs to go.
const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
const resolutionLocation = gl.getUniformLocation(program, "iResolution");
const limitLocation = gl.getUniformLocation(program, 'iLimit')

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
const pointList = [0,0];
const limit = 10
const targerResolution = 2048
for(let i = limit * -0.5; i < limit * 0.5;) {
  pointList.push(i)
  pointList.push(targetFn(i))
  i+= ( limit / targerResolution )
}


gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointList), gl.STATIC_DRAW);
gl.enableVertexAttribArray(positionAttributeLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(
  positionAttributeLocation,
  2, // 2 components per iteration
  gl.FLOAT, // the data is 32bit floats
  false, // don't normalize the data
  0, // 0 = move forward size * sizeof(type) each iteration to get the next position
  0 // start at the beginning of the buffer
);

gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
gl.uniform1f(limitLocation, limit/2)


gl.drawArrays(
  gl.POINTS,
  0, // offset
  pointList.length / 2 // num vertices to process
);

// look up uniform locations
}
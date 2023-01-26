
attribute vec4 a_position;
uniform vec2 iResolution;
uniform float iLimit;

void main(){
  // gl_PointSize=5.;
  vec4 newPos = a_position;
  newPos.x /= iLimit;
  newPos.y /= iLimit;
  gl_Position= newPos;
}
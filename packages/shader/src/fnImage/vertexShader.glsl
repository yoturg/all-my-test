
attribute vec4 a_position;
uniform vec2 iResolution;
uniform float iLimit;

void main(){
  vec2 newResolution = vec2(iLimit, iLimit * (iResolution.y / iResolution.x));
  vec4 newPos = a_position;
  newPos.xy = newPos.xy / newResolution;
  gl_Position= newPos;
}
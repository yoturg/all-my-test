precision highp float;

uniform vec2 iResolution;
uniform float iTime;

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.y, iResolution.x);

  float len = dot(p, p);
  // if(len < 0.25 * .25) {
  //   gl_FragColor = vec4(1., 1., 1., 1.);
  // } else {
  //   gl_FragColor = vec4(0., 0., 0., 1.);
  // }
  float fogC = -exp((len * 80.) * 0.1) / ( exp(( 80.) * 0.1) * 0.5 );
  gl_FragColor = vec4(vec3(abs(1. + fogC)), 1.);
}
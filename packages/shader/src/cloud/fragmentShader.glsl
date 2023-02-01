precision highp float;

uniform vec2 iResolution;
uniform float iTime;

void main() {

  vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.y, iResolution.x);

  gl_FragColor = vec4(p.xy + 0.5, 0, 1.0);
}
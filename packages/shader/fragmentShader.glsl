precision highp float;

uniform vec2 iResolution;
uniform float iTime;
/*
  返回一个二维的旋转矩阵
*/
mat2 rot(in float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, s, -s, c);
}
const mat3 m3 = mat3(
  0.33338, 0.56034, -0.71817, 
  -0.87887, 0.32651, -0.15323, 
  0.15162, 0.69596, 0.61339
) * 1.93;

/*
** 让一个二维向量自己点乘自己，也就是模的平方
*/
float mag2(vec2 p) {
  return dot(p, p);
}

// 计算一个值在一个区间段里的的位置
float linstep(in float mn, in float mx, in float x) {
  return clamp((x - mn) / (mx - mn), 0., 1.);
}
float prm1 = 0.;

vec2 map(vec3 p) {
  vec3 p2 = p; // 入参的向量

  p.xy *= rot(sin(p.z + iTime) * (0.1 + prm1 * 0.05) + iTime * 0.09); // 对原向量进行了旋转
  float cl = mag2(p2.xy); // p2向量模的平方
  float d = 0.;
  p *= .61; // 放大0.61倍
  float z = 1.;
  float trk = 1.;
  float dspAmp = 0.1 + prm1 * 0.2; // 0.1 ～ 0.3
  // for(int i = 0; i < 1; i++) {
  //   p += sin(p.zxy * 0.75 * trk + iTime * trk * .8) * dspAmp;
  //   d -= abs(dot(cos(p), sin(p.yzx)) * z);
  //   z *= 0.57;
  //   trk *= 1.4;
  //   p = p * m3;
  // }
  d = abs(d + prm1 * 3.) + prm1 * .3 - 2.5;
  return vec2(d + cl * .2 + 0.25, cl);
}

vec4 render(in vec3 ro, in vec3 rd) {
  vec4 rez = vec4(0); // vec4(0, 0, 0, 0)
  const float ldst = 8.;

  float t = 1.5;
  float fogT = 0.;
  for(int i = 0; i < 130; i++) {
    if(rez.a > 0.99)
      break;

    vec3 pos = ro + t * rd;
    vec2 mpv = map(pos);
    float den = clamp(mpv.x - 0.3, 0., 1.) * 1.12;
    float dn = clamp((mpv.x + 2.), 0., 3.);

    vec4 col = vec4(0);
    // if(mpv.x > 0.6) {
    //   col = vec4(sin(vec3(5., 0.4, 0.2) + mpv.y * 0.1 + sin(pos.z * 0.4) * 0.5 + 1.8) * 0.5 + 0.5, 0.08);
    //   col *= den * den * den;
    //   col.rgb *= linstep(4., -2.5, mpv.x) * 2.3;
    //   float dif = clamp((den - map(pos + .8).x) / 9., 0.001, 1.);
    //   dif += clamp((den - map(pos + .35).x) / 2.5, 0.001, 1.);
    //   col.xyz *= den * (vec3(0.005, .045, .075) + 1.5 * vec3(0.033, 0.07, 0.03) * dif);
    // }

    float fogC = exp(t * 0.2 - 2.2);
    col.rgba += vec4(0.06, 0.11, 0.11, 0.1) * clamp(fogC - fogT, 0., 1.);
    fogT = fogC;
    rez = rez + col * (1. - rez.a);
    t += clamp(0.5 - dn * dn * .05, 0.09, 0.3);
  }
  return clamp(rez, 0.0, 1.0);
}

void mainImage(out vec4 fragColor) {
  float tgtDst = 3.5;

  vec2 p = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.y, iResolution.x);

  float time = iTime * 3.;
  vec3 ro = vec3(0, 0, time); 


  // vec3 target = normalize(ro - vec3(0.0, 0.0, time + tgtDst));
  vec3 target = normalize(vec3(0., 0., -tgtDst)); // vec3(0, 0, -1)

  vec3 rightdir = normalize(cross(target, vec3(0, 1, 0))); // vec3(-1, 0, 0)
  vec3 updir = normalize(cross(rightdir, target)); // vec3(0, 1, 0)
  rightdir = normalize(cross(updir, target)); // vec3(1, 0, 0)
  vec3 rd = normalize((p.x * rightdir + p.y * updir) * 1. - target); // 重新映射x，y到新的坐标体系里，然后算出方向向量

  prm1 = smoothstep(-0.4, 0.4, sin(iTime * 0.3)); // 一个0到1的值，有效周期是sin周期的三倍
  vec4 scn = render(ro, rd);

  vec3 col = scn.rgb;

  // col = iLerp(col.bgr, col.rgb, clamp(1.-prm1,0.05,1.));

  // col = pow(col, vec3(.55,0.65,0.6))*vec3(1.,.97,.9);

  // col *= pow( 16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y), 0.12)*0.7+0.3; //Vign

  fragColor = vec4(col, 1.0);
}

void main() {
  mainImage(gl_FragColor);
}
export default function glslLoader(opts = {}) {
  const extReg = /.glsl/
  return {
    name: 'glslLoader',
    transform(src, id) {
      if(extReg.test(id)){
        return {
          code: `export default \`${src}\``
        }
      }
    }
  }
}
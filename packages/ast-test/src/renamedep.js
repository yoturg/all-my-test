const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

module.exports = function (str, originName, afterName) {
  const regex = new RegExp(`^(${originName.join('|')})`)
  // console.log('str', str, 'originName', originName, 'afterName', afterName)

  const ast = babelParser.parse(str, { sourceType: 'module' })

  traverse(ast, {
    CallExpression(path) {
      const { node } = path
      if (node.callee.name === 'require' && regex.test(node.arguments[0].value)) {
        // path.get('arguments.0').replaceWith(t.stringLiteral(afterName + node.arguments[0].value))
        const strNode = path.get('arguments.0').node
        strNode.value = afterName + node.arguments[0].value
        strNode.extra = {
          rawValue: node.arguments[0].value,
          raw: `'${node.arguments[0].value}'`,
        }
      }
    },
    ImportDeclaration(path) {
      const { node } = path
      if (regex.test(node.source.value)) {
        // path.get('source').replaceWith(t.stringLiteral(afterName + node.source.value))
        const strNode = node.source
        strNode.value = afterName + node.source.value
        strNode.extra = {
          rawValue: strNode.value,
          raw: `'${strNode.value}'`,
        }
      }
    },
  })

  return generate(ast).code
}

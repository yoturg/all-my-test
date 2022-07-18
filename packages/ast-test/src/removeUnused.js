const fs = require('fs')

const path = require('path')

const babelParser = require('@babel/parser')

const traverse = require('@babel/traverse').default

const generate = require('@babel/generator').default

const t = require('@babel/types')

function removeUnusedVar(ast) {
  isChange = false
  traverse(ast, {
    ImportDeclaration(path) {
      const { node } = path
      const { specifiers } = node
      if (!specifiers.length) return
      node.specifiers = specifiers.filter((specifier) => {
        const { local } = specifier
        const binding = path.scope.getBinding(local.name)
        return !!binding?.referenced
      })
      if (!node.specifiers.length) path.remove()
    },

    FunctionDeclaration(path) {
      
      const { node } = path
      const binding = path.scope.getBinding(node.id.name)
      if (!binding?.referenced) {
        path.remove()
        isChange = true
      }
    },

    VariableDeclaration(path) {
      const { node } = path
      const { declarations } = node
      node.declarations = declarations.filter((declaration) => {
        const { id } = declaration

        if (t.isObjectPattern(id)) {
          id.properties = id.properties.filter((property) => {
            const binding = path.scope.getBinding(property.value.name)
            if (!binding?.referenced) {
              isChange = true
            }
            return !!binding?.referenced
          })
          return !!id.properties.length
        } else {

          const binding = path.scope.getBinding(id.name)
          return !!binding?.referenced
        }


      })

      if (!node.declarations.length) {
        isChange = true
        path.remove()
      }
    },
  })

  return isChange
}

module.exports = function removeUnused(str) {
  let ast = babelParser.parse(str.toString(), {
    sourceType: 'module',
  })
  let removed = false

  do {
    removed = removeUnusedVar(ast)
    ast = babelParser.parse(generate(ast).code, { sourceType: 'module' })
  } while (removed)

  return generate(ast).code
}

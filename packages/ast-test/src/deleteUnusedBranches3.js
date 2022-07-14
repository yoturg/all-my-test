const path = require("path")
const babelParser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default
const t = require("@babel/types")

function deleteUnusedBranches(str) {
  const ast = babelParser.parse(str, { sourceType: "module" })


  traverse(ast, {
    ConditionalExpression(path) {
      const { node } = path
      const { test, consequent } = node
      if(test.name === "enableNewReconciler") {
        path.replaceWith(consequent)
      }
    }
  })

  return generate(ast).code
}

module.exports = deleteUnusedBranches

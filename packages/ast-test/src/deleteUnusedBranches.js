const path = require("path")
const babelParser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default
const t = require("@babel/types")

// const createElement = __DEV__ ? createElementWithValidation : createElementProd;
// const cloneElement =cloneElementProd;
// if(__DEV__) {console.log(1)}
// __DEV__ && test()
// __DEV__ || test()
// test() || __DEV__

const source = `
if(__DEV__ && a) {
	console.log(2)
} else {
	console.log(3)
  console.log(4)
}
const createElement = __DEV__ ? createElementWithValidation : createElementProd;
const cloneElement =cloneElementProd;
if(__DEV__) {console.log(1)}
__DEV__ && test()
__DEV__ || test()
test() || __DEV__


`
function deleteUnusedBranches(str) {
  const ast = babelParser.parse(str, { sourceType: "module" })

  traverse(ast, {
    LogicalExpression(path) {
      const { node } = path
      const parentType = path.parent.type
      if (node.operator === "&&" && (node.left.name === "__DEV__" || node.right.name === "__DEV__")) {
        if (parentType === "IfStatement") {
          path.replaceWith(t.identifier("__DEV__"))
        } else {
          path.remove()
        }
      }
      if (node.operator === "||") {
        if (node.left.name === "__DEV__") {
          path.replaceWith(node.right)
        }
        if (node.right.name === "__DEV__") {
          path.replaceWith(node.left)
        }
      }
    },
  })

  traverse(ast, {
    ConditionalExpression(path) {
      if (path.get("test.name").node === "__DEV__") {
        path.replaceWith(path.get("alternate"))
      }
    },
    IfStatement(path) {
      if (path.get("test.name").node === "__DEV__") {
        if (path.get("alternate").node === null) {
          path.remove()
        } else {
          let child = path.get("alternate")
          if (child.type !== "IfStatement") {
            child = child.get("body")
          }
          if (typeof child === "array") {
            path.replaceWithMultiple(child.map((v) => v.node))
          } else {
            path.replaceWith(child)
          }
        }
      }
    },
  })

  return generate(ast).code
}

module.exports = deleteUnusedBranches






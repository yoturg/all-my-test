const path = require("path");

const babelParser = require("@babel/parser");

const traverse = require("@babel/traverse").default;

const generate = require("@babel/generator").default;

const t = require("@babel/types");

function deleteUnusedBranches(str) {
  const ast = babelParser.parse(str, {
    sourceType: "module"
  });
  traverse(ast, {
    Identifier(path) {
      if (path.node.name === "__DEV__") {
        path.replaceWith(t.booleanLiteral(false));
      }
    }

  });
  traverse(ast, {
    BooleanLiteral(path) {
      let parentPath = path.parentPath;

      while (parentPath) {
        const node = parentPath.node; // console.log('parentPath', parentPath)
        // console.log('node', node)

        if (node === null) return;

        switch (node.type) {
          case "LogicalExpression":
            const {
              left,
              operator,
              right
            } = node;

            if (left.type !== "BooleanLiteral" && right.type !== "BooleanLiteral") {
              return;
            }

            if (operator === "&&") {
              if (left.type === "BooleanLiteral" && right.type === "BooleanLiteral") {
                parentPath.replaceWith(t.booleanLiteral(left.value && right.value));
              }

              if (left.type === "BooleanLiteral" && left.value) {
                parentPath.replaceWith(right);
              }

              if (right.type === "BooleanLiteral" && right.value) {
                parentPath.replaceWith(left);
              }

              if (left.type === "BooleanLiteral" && !left.value || right.type === "BooleanLiteral" && !right.value) {
                parentPath.replaceWith(t.booleanLiteral(false));
              }
            }

            if (operator === "||") {
              if (left.type === "BooleanLiteral" && right.type === "BooleanLiteral") {
                parentPath.replaceWith(t.booleanLiteral(left.value || right.value));
              }

              if (left.type === "BooleanLiteral" && !left.value) {
                parentPath.replaceWith(right);
              }

              if (right.type === "BooleanLiteral" && !right.value) {
                parentPath.replaceWith(left);
              }

              if (left.type === "BooleanLiteral" && left.value || right.type === "BooleanLiteral" && right.value) {
                parentPath.replaceWith(t.booleanLiteral(true));
              }
            }

            break;

          case "UnaryExpression":
            if (node.argument.type !== "BooleanLiteral") return;

            if (node.operator === "!") {
              parentPath.replaceWith(t.booleanLiteral(!node.argument.value));
            }

            break;

          case "IfStatement":
            if (node.test.type === "BooleanLiteral" && node.test.value === false) {
              if (node.alternate === null) {
                parentPath.remove();
              } else {
                if (node.alternate.type === "BlockStatement") {
                  parentPath.replaceWithMultiple(node.alternate.body);
                } else {
                  parentPath.replaceWith(node.alternate);
                }
              }
            }

            break;

          case "ConditionalExpression":
            if (node.test.type === "BooleanLiteral") {
              const {
                consequent,
                alternate
              } = node;
              parentPath.replaceWith(node.test.value ? consequent : alternate);
            } else {
              return;
            }

            break;
        }

        parentPath = parentPath.parentPath;
        if (parentPath === null || parentPath.type === "Program") break;
      }
    }

  });
  return generate(ast).code;
}

module.exports = deleteUnusedBranches;
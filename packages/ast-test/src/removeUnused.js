const fs = require('fs')
const path = require('path')

const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

async function isFile(p) {
  return await (await fs.statSync(path.resolve(p))).isFile()
}
async function isDir(p) {
  return await (await fs.statSync(path.resolve(p))).isDir()
}

;(async () => {
  try {
    const entrance = path.resolve(__dirname, 'input')


    // 读入口文件
    const fileName = path.resolve(entrance, 'ReactFiberWorkLoop.new.js')
    const str = await fs.readFileSync(fileName)
    const variable = []

    // 生成抽象树
    const ast = babelParser.parse(str.toString(), { sourceType: 'module' })

    traverse(ast, {
      ImportDeclaration(p) {
        const { node } = p
        const specifiers = node.specifiers
        specifiers.forEach((specifier) => {
          variable.push(specifier.local.name)
        })
      },
      VariableDeclarator(path) {
        const { node } = path
        const id = node.id
        if (id.type === 'Identifier') {
          variable.push(id.name)
        }
        if (id.type === 'ObjectPattern') {
          id.properties.forEach((property) => {
            variable.push(property.value.name)
          })
        }
      },
      FunctionDeclaration(path) {
        const { node } = path
        variable.push(node.id.name)
      },
      Program(path) {
        console.log(path.variables)
        // console.log(Object.keys(path.scope.bindings))
      }
    })
    console.log(variable)
  } catch (e) {
    console.log(e)
  }
})()

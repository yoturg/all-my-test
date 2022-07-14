const fs = require('fs')
const path = require("path")

const babelParser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default
const t = require("@babel/types")




async function isFile(p) {
  return await (await fs.statSync(path.resolve(p))).isFile()
}
async function isDir(p) {
  return await (await fs.statSync(path.resolve(p))).isDir()
}

;(async () => {
  try{
    const entrance = path.resolve(__dirname, 'dependencyMock')
    const dependencyInfos = {}


    // 读入口文件
    const fileName = path.resolve(entrance, 'index.js')
    const str = await fs.readFileSync(fileName)
    dependencyInfos[fileName] = dependencyInfos[fileName] || {
      importList: [],
      functionList: [],
    }
    // 生成抽象树
    const ast = babelParser.parse(str.toString(), { sourceType: "module"})

    traverse(ast, {
      ImportDeclaration(p) {
        const { node } = p
        const sourcePath = node.source.value
        const specifiers = node.specifiers
        let dependencyInfo = dependencyInfos[fileName]
        const sourceFullPath = path.join(entrance, sourcePath)
        dependencyInfo.importList.push({
          path: sourceFullPath,
          specifiers: specifiers.map(v => {
            return {
              exportName: v.imported.name,
              localName: v.local.name
            }
          })
        })
      },
    })
    console.log(JSON.stringify(dependencyInfos))
  } catch(e) {
    console.log(e)
  }

})()

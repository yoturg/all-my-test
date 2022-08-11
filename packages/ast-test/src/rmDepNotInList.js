const fs = require('fs')
const path = require('path')
const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')
const config = require('./input/config.js')
const removeUnused = require('./removeUnused')

// function rmExportFlagWhenFnNotInList(ast, list) {
//   console.log(list)
//   traverse(ast, {
//     ExportNamedDeclaration(path) {

//       if (path.node.specifiers.length) {
//         path.get('specifiers').forEach((spec) => {
//           if (!list.includes(spec.node.local.name)) {
//             spec.remove()
//           }
//         })
//       } else if (path.node.declaration && t.isFunctionDeclaration(path.node.declaration)) {
//         console.log(path.node.declaration.id.name)
//         if (!list.includes(path.node.declaration.id.name)) {
//           path.remove()
//         }
//       }
//     },
//   })
// }

function rmExportFlagWhenFnNotInList(ast, list) {
  console.log('-----')
  traverse(ast, {
    ExportNamedDeclaration(path) {
      if (path.node.specifiers.length) {
        path.get('specifiers').forEach((spec) => {
          console.log('list', list)
          console.log(spec.node.exported.name)
          if (!list.includes(spec.node.exported.name)) {
            spec.remove()
          }
        })
      } else if (path.node.declaration && t.isFunctionDeclaration(path.node.declaration)) {
        if (!list.includes(path.node.declaration.id.name)) {
          path.remove()
        }
      } else if (path.node.declaration && t.isVariableDeclaration(path.node.declaration)) {
        path.get('declaration.declarations').forEach((declaration) => {
          if (!list.includes(declaration.node.id.name)) {
            path.remove()
          }
        })
      }
    },
    // FunctionDeclaration(path) {
    //   if (!list.includes(path.node.id.name)) {
    //     if(t.isExportNamedDeclaration(path.parentPath)) {
    //       path.parentPath.remove()
    //     } else {
    //       path.remove()
    //     }
    //   }
    // },
  })
}

;(async () => {
  console.log(config)
  Object.keys(config).forEach(async (filePath) => {
    try {
      const usedFnName = Object.keys(config[filePath])

      const str = await fs.readFileSync(filePath)
      const ast = babelParser.parse(str.toString(), { sourceType: 'module' })
      rmExportFlagWhenFnNotInList(ast, usedFnName)

      fs.writeFileSync(filePath, removeUnused(generate(ast).code))
    } catch (err) {
      console.log('====')
      console.log(err)
      console.log(filePath)
    }
  })
})()

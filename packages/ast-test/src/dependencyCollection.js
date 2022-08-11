const fs = require('fs')
const nodePath = require('path')

const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const t = require('@babel/types')

const { isFile, isDir } = require('../.bin/helper')

function collectionWithFnName(ast, fileName, names) {
  const dir = nodePath.parse(fileName).dir
  const res = {}
  traverse(ast, {
    FunctionDeclaration(path) {
      if (names.includes(path.node.id.name)) {
        const callList = {}
        path.traverse({
          CallExpression(p) {
           let fnName = p.node.callee.name
            try {
              const binding = path.scope.getBinding(fnName)
              if (binding && binding.path) {
                let sourcePath = fileName
                if(t.isImportSpecifier(binding.path)) {
                  fnName = binding.path.node.imported.name
                  sourcePath = nodePath.join(dir, binding.path.parentPath.node.source.value)
                }
                callList[sourcePath] = callList[sourcePath] || []
                if (!callList[sourcePath].includes(fnName)) {
                  callList[sourcePath].push(fnName)
                }
                
              }
            } catch (e) {
              console.log(e)
            }
          },
          MemberExpression(path) {
            if (['bind', 'call', 'apply'].includes(path.node.property.name)) {
              const fnName = path.node.object.name
              try {
                const binding = path.scope.getBinding(fnName)
                if (binding && binding.path) {
                  const sourcePath = t.isImportSpecifier(binding?.path) ? nodePath.join(dir, binding.path.parentPath.node.source.value) : fileName
                  callList[sourcePath] = callList[sourcePath] || []
                  if (!callList[sourcePath].includes(fnName)) {
                    callList[sourcePath].push(fnName)
                  }
                }
              } catch (e) {
                console.log(e)
              }
            }
          },
        })
        res[path.node.id.name] = callList
        
      }
    },
    VariableDeclaration(path) {
      const declarations = path.get('declarations')
      declarations.forEach((declaration) => {
        if (names.includes(declaration.node.id.name)) {
          const callList = {}
          const init = declaration.node.init
          if (t.isMemberExpression(init)) {
            const objName = init.object.name
            const fnName = init.property.name
            const binding = path.scope.getBinding(objName)
            if (binding && binding.path) {
              let sourcePath = fileName

              if (t.isImportSpecifier(binding.path) || t.isImportNamespaceSpecifier(binding.path)) {
                sourcePath = nodePath.join(dir, binding.path.parentPath.node.source.value)
              }

              callList[sourcePath] = callList[sourcePath] || []
              if (!callList[sourcePath].includes(fnName)) {
                callList[sourcePath].push(fnName)
              }
            }
          } else if (t.isIdentifier(init)) {
            const varName = init.name
            const binding = path.scope.getBinding(varName)
            if (binding && binding.path) {
              let sourcePath = fileName
              let actrulName = varName
              if (t.isImportSpecifier(binding.path)) {
                sourcePath = nodePath.join(dir, binding.path.parentPath.node.source.value)
                actrulName = binding.path.node.imported.name || actrulName
              }
              callList[sourcePath] = callList[sourcePath] || []
              if (!callList[sourcePath].includes(actrulName)) {
                callList[sourcePath].push(actrulName)
              }
            }
          }
          res[declaration.node.id.name] = callList
        }
      })
    },
    ExportNamedDeclaration(path) {
      if(!path.node.source) return
      const specifiers = path.node.specifiers
      specifiers.forEach((specifier) => {
        if (names.includes(specifier.exported.name)) {
          let sourcePath = null
          let actrulName = specifier.local.name
          if (path.node.source) {
            sourcePath = nodePath.join(dir, path.node.source.value)
          } else {
            const binding = path.scope.getBinding(specifier.local.name)
            if (binding && binding.path) {
              sourcePath = fileName
            }
          }

          res[specifier.exported.name] = {
            [sourcePath]: [actrulName],
          }
        }
      })
    },
  })

  // console.log(JSON.stringify(res)) 
  // return res
  return Object.assign(
    names.reduce((acc, cur) => {
      acc[cur] = {}
      return acc
    }, {}),
    res
  )
}

function tidy(fileName, fnCache, callList) {
  Object.keys(callList).forEach((fnName) => {
    const item = callList[fnName] // 拿到当前方法名的依赖列表
    const file = fnCache[fileName] || fnCache[fileName.replace(/\.js$/, '')] // 拿到fnCache里当前文件的对象
    if (file && file.hasOwnProperty(fnName)) {
      file[fnName] = item
    }

    Object.keys(item).forEach((filePath) => {
      fnCache[filePath] = fnCache[filePath] || {}
      item[filePath].forEach((fn) => {
        fnCache[filePath][fn] = fnCache[filePath][fn] || null
      })
    })
  })
}

async function collectionDepend(dir, fnName) {
  const fnCache = { [dir]: { [fnName]: null } }

  try {
    let isNew = true
    while (isNew) {
      isNew = false
      for (let file in fnCache) {
        const list = Object.keys(fnCache[file]).filter((v) => fnCache[file][v] === null)
        if (list.length) {
          isNew = true
          let usedFile = null
          if (await isFile(file)) {
            usedFile = file
          } else {
            if (await isDir(file)) {
              if (await isFile(file + '/index.js')) {
                usedFile = file + '/index.js'
              }
            } else {
              if (await isFile(file + '.js')) {
                usedFile = file + '.js'
              }
            }
          }
          if (usedFile !== file && fnCache[file]) {
            fnCache[usedFile] = { ...(fnCache[usedFile] || {}), ...fnCache[file] }
            delete fnCache[file]
          }
          // console.log(usedFile)
          if (usedFile) {
            const str = await fs.readFileSync(usedFile)

            const ast = babelParser.parse(str.toString(), { sourceType: 'module' })
            const res = collectionWithFnName(ast, usedFile, list)
            tidy(usedFile, fnCache, res)
          }
        }
      }
    }

    return fnCache
  } catch (err) {
    console.log(err)
  }
}

module.exports = collectionDepend

// ;(async () => {
//   try {
//     const entrance = nodePath.resolve('/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/')
//     const fileName = nodePath.resolve(entrance, 'ReactFiberReconciler.js')

//     const fnCache = {}

//     fnCache[fileName] = { updateContainer: null }

//     // let isNew = 3
//     let isNew = true
//     while (isNew--) {

//       for (let file in fnCache) {
//         const list = Object.keys(fnCache[file]).filter((v) => fnCache[file][v] === null)
//         if (list.length) {
//           isNew = true
//           let usedFile = null
//           if (await isFile(file)) {
//             usedFile = file
//           } else {
//             if (await isDir(file)) {
//               if (await isFile(file + '/index.js')) {
//                 usedFile = file + '/index.js'
//               }
//             } else {
//               if (await isFile(file + '.js')) {
//                 usedFile = file + '.js'
//               }
//             }
//           }
//           if (usedFile !== file && fnCache[file]) {
//             fnCache[usedFile] = {...(fnCache[usedFile] || {}), ...fnCache[file]}
//             delete fnCache[file]
//           }
//           // console.log(usedFile)
//           if (usedFile) {
//             const str = await fs.readFileSync(usedFile)

//             const ast = babelParser.parse(str.toString(), { sourceType: 'module' })
//             const res = collectionWithFnName(ast, usedFile, list)
//             tidy(usedFile, fnCache, res)
//           }
//         }
//       }
//     }

//     // tidy(fnCache, callList)

//     console.log('--------', JSON.stringify(fnCache))
//     // console.log(map)
//   } catch (e) {
//     console.log(e)
//   }
// })()

// ;(async function test() {
//   const entrance = nodePath.resolve(__dirname, './input/')
//   const fileName = nodePath.resolve(entrance, 'Scheduler.js')
//   const str = await fs.readFileSync(fileName)

//   const ast = babelParser.parse(str.toString(), {
//     sourceType: 'module',
//   })
//   const res = collectionWithFnName(ast, fileName, ['now', 'LowPriority', 'c'])
//   console.log(res)
// })()

// function collectionWithFnNameFailure1(ast, fileName, names) {
//   const dir = nodePath.parse(fileName).dir
//   const res = {}
//   traverse(ast, {
//     ExportNamedDeclaration(path) {
//       const { node } = path
//       if (t.isFunctionDeclaration(node.declaration)) {
//         const fnPath = path.get('declaration')
//         if (names.includes(fnPath.node.id.name)) {
//           const callList = {}
//           fnPath.traverse({
//             CallExpression(p) {
//               const fnName = p.node.callee.name
//               try {
//                 const binding = fnPath.scope.getBinding(fnName)
//                 if (binding && binding.path) {
//                   const sourcePath = t.isImportSpecifier(binding?.path) ? nodePath.join(dir, binding.path.parentPath.node.source.value) : fileName
//                   callList[sourcePath] = callList[sourcePath] || []
//                   if (!callList[sourcePath].includes(fnName)) {
//                     callList[sourcePath].push(fnName)
//                   }
//                 }
//               } catch (e) {
//                 console.log('names', names)
//                 console.log('fileName', fileName)
//                 console.log('name', fnName)
//               }
//             },
//           })
//           res[fnPath.node.id.name] = callList
//         }
//       } else if (t.isVariableDeclaration(node.declaration)) {
//         const declarations = path.get('declaration.declarations')
//         declarations.forEach((declaration) => {
//           if (names.includes(declaration.node.id.name)) {
//             const callList = {}
//             const init = declaration.node.init
//             if (t.isMemberExpression(init)) {
//               const objName = init.object.name
//               const fnName = init.property.name
//               const binding = path.scope.getBinding(objName)
//               if (binding && binding.path) {
//                 let sourcePath = fileName

//                 if (t.isImportSpecifier(binding.path) || t.isImportNamespaceSpecifier(binding.path)) {
//                   sourcePath = nodePath.join(dir, binding.path.parentPath.node.source.value)
//                 }

//                 callList[sourcePath] = callList[sourcePath] || []
//                 if (!callList[sourcePath].includes(fnName)) {
//                   callList[sourcePath].push(fnName)
//                 }
//               }
//             } else if (t.isIdentifier(init)) {
//               const varName = init.name
//               const binding = path.scope.getBinding(varName)
//               if (binding && binding.path) {
//                 let sourcePath = fileName
//                 let actrulName = varName
//                 if (t.isImportSpecifier(binding.path)) {
//                   sourcePath = nodePath.join(dir, binding.path.parentPath.node.source.value)
//                   actrulName = binding.path.node.imported.name || actrulName
//                 }
//                 callList[sourcePath] = callList[sourcePath] || []
//                 if (!callList[sourcePath].includes(actrulName)) {
//                   callList[sourcePath].push(actrulName)
//                 }
//               }
//             }
//             res[declaration.node.id.name] = callList
//           }
//         })
//       }
//     },
//   })

//   return res

// }

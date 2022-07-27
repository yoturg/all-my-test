const fs = require('fs')

const nodePath = require('path')

const babelParser = require('@babel/parser')

const traverse = require('@babel/traverse').default

const generate = require('@babel/generator').default

const t = require('@babel/types')

function collectionWithFnName(ast, fileName, names) {
  const dir = nodePath.parse(fileName).dir
  const res = {}
  traverse(ast, {
    ExportNamedDeclaration(path){
      const { node } = path
      if(t.isFunctionDeclaration(node.declaration)) {
        const fnPath = path.get('declaration')
        if (names.includes(fnPath.node.id.name)) {
          const callList = {}
          fnPath.traverse({
            CallExpression(p) {
              const fnName = p.node.callee.name
              try {
                const binding = fnPath.scope.getBinding(fnName)
                if (binding && binding.path) {
                  const sourcePath = t.isImportSpecifier(binding?.path) ? nodePath.join(dir, binding.path.parentPath.node.source.value) : fileName
                  callList[sourcePath] = callList[sourcePath] || []
                  if (!callList[sourcePath].includes(fnName)) {
                    callList[sourcePath].push(fnName)
                  }
                }
              } catch (e) {
                console.log('names', names)
                console.log('fileName', fileName)
                console.log('name', fnName)
              }
            },
          })
          res[fnPath.node.id.name] = callList
        }
      }
    },
  
  })
  return res
}

function tidy(fileName, fnCache, callList) {
  Object.keys(callList).forEach((fnName) => {
    const item = callList[fnName]
    const file = fnCache[fileName] || fnCache[fileName.replace(/\.js$/, '')]
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


;(async () => {
  try {
    const entrance = nodePath.resolve('/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/')
    const fileName = nodePath.resolve(entrance, 'ReactFiberReconciler.js')

    const fnCache = {}

    fnCache[fileName] = { updateContainer: null }

    let isNew = 7
    while (isNew) {
      isNew--
      for (let file in fnCache) {
        const list = Object.keys(fnCache[file]).filter((v) => fnCache[file][v] === null)
        if (list.length) {
          console.log(list)
          // isNew = true
          let str = null
          let usedFile = file
          try {
            str = await fs.readFileSync(usedFile)
          } catch (e) {
            usedFile += '.js'
            str = await fs.readFileSync(usedFile)
          }

          const ast = babelParser.parse(str.toString(), {
            sourceType: 'module',
          })
          const res = collectionWithFnName(ast, file, list)
          if(file === '/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/ReactFiberWorkLoop.new.js') {

            console.log('++++++++++++++++++++++++++')
            console.log('-----', JSON.stringify(res))
            console.log('-----', JSON.stringify(fnCache))
          }
          tidy(file, fnCache, res)

        }
      }
    }

    // tidy(fnCache, callList)

    console.log('--------', JSON.stringify(fnCache))
    // console.log(map)
  } catch (e) {
    console.log(e)
  }
})()

// ;(async function test() {
//   const entrance = nodePath.resolve('/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/')
//   const fileName = nodePath.resolve(entrance, 'ReactFiberWorkLoop.new.js')
//   const str = await fs.readFileSync(fileName)
//   const ast = babelParser.parse(str.toString(), {
//     sourceType: 'module',
//   })
//   const res = collectionWithFnName(ast, fileName, [ "isUnsafeClassRenderPhaseUpdate", "throwIfInfiniteUpdateLoopDetected"])
//   console.log(res)
// })()

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
    FunctionDeclaration(path) {
      if (names.includes(path.node.id.name)) {
        const callList = {}
        path.traverse({
          CallExpression(p) {
            const fnName = p.node.callee.name
            try{
                const binding = path.scope.getBinding(fnName)

                const sourcePath = t.isImportSpecifier(binding?.path) ? 
                nodePath.join(dir, binding.path.parentPath.node.source.value) :
                fileName
                callList[sourcePath] = callList[sourcePath] || []
                callList[sourcePath].push(fnName)
            } catch(e) {
              console.log(e)
              console.log('++++++++++++++++++++')
              console.log('names', names)
              console.log('fileName', fileName)
              console.log('name', fnName)
            }
          },
        })
        res[path.node.id.name] = callList
      }
    },
  })
  return res 
}

function tidy(fileName, fnCache, callList) {
  // console.log('++++++++++++++++')
  // console.log('fileName', fileName)
  // console.log('fnCache', fnCache) 
  // console.log('callList', callList)
 

  Object.keys(callList).forEach(fnName => {
    const item = callList[fnName]
    const file = fnCache[fileName] || fnCache[fileName.replace(/\.js$/, '')]
    if(file && file.hasOwnProperty(fnName)) {
      file[fnName] = item
    }
    Object.keys(item).forEach((v) => {
      
      fnCache[v] = fnCache[v] || {}
      item[v].forEach((val) => {
        fnCache[v][val] = fnCache[v][val] || null
      })
    })
  })
}

;(async () => {
  try {
    const entrance = nodePath.resolve('/Users/yogurt/workspace/test/react-lego/step4/react-reconciler-new/src/')
    const fileName = nodePath.resolve(entrance, 'ReactFiberReconciler.js')

    const fnCache = {}

    fnCache[fileName] = { 'updateContainer': null }
  
    let isNew = 3
    while (isNew) {
      isNew-- 
      for (let file in fnCache) {
        const list = Object.keys(fnCache[file]).filter(v => fnCache[file][v] === null)
        console.log(list)
        if(list.length) {
          // isNew = true
          let str = null
          try{
            str = await fs.readFileSync(file)
          } catch(e){
            file += '.js'
            str = await fs.readFileSync(file)
          }
          const ast = babelParser.parse(str.toString(), {
            sourceType: 'module',
          })
          const res = collectionWithFnName(ast, file, list)

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

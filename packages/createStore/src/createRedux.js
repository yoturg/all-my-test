const path = require('path')
const fs = require('fs')
const cp = require('child_process')
const indexTemp = require('./template/indexTemp')
const reducerTemp = require('./template/reducerTemp')
const moduleTemp = require('./template/moduleTemp')
const hocTemp = require('./template/hocTemp')

const ISTEST = true

async function isFile(p) {
  try {
    return await (await fs.statSync(path.resolve(p))).isFile()
  } catch (e) {
    return false
  }
}
async function isDir(p) {
  try {
    return await (await fs.statSync(path.resolve(p))).isDirectory()
  } catch (e) {
    return false
  }
}

module.exports = async (root) => {
  // 项目根目录
  const rootDir = await fs.readdirSync(root)
  if (!(Array.isArray(rootDir) && rootDir.includes('src') && rootDir.includes('package.json'))) {
    console.log('这里不是根目录')
    return
  }

  const srcRoot = path.resolve(root, 'src')

  // yarn add redux react-redux redux-thunk redux-logger

  if (!ISTEST) {
    await cp.execSync('yarn add redux react-redux redux-thunk redux-logger -S')
  }

  // 创建store目录

  if (!ISTEST) {
    if (await isDir(path.resolve(srcRoot, 'store'))) {
      console.log('store目录已存在')
      return
    }
  } else {
    if (!(await isDir(path.resolve(srcRoot, 'store')))) {
      await fs.mkdirSync(path.resolve(srcRoot, 'store'))
    }
  }

  // 创建 module 目录
  if (!ISTEST) {
    if (await isDir(path.resolve(srcRoot, './store/module'))) {
      console.log('module目录已存在')
      return
    }
  } else {
    if (!(await isDir(path.resolve(srcRoot, './store/module')))) {
      await fs.mkdirSync(path.resolve(srcRoot, './store/module'))
    }
  }
  // 创建index.js 文件
  fs.writeFileSync(path.resolve(srcRoot, './store/index.js'), indexTemp, { flag: 'w' })

  // 创建 reducer.js
  fs.writeFileSync(path.resolve(srcRoot, './store/reducer.js'), reducerTemp, { flag: 'w' })

  // 创建 hoc
  fs.writeFileSync(path.resolve(srcRoot, './store/hoc.js'), hocTemp, { flag: 'w' })
  // 创建 demo Modal
  fs.writeFileSync(path.resolve(srcRoot, './store/module/test.js'), moduleTemp, { flag: 'w' })


  console.log('createStore')
}

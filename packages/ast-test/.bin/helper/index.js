const fs = require('fs')
const path = require('path')

async function isFile(p) {
  if (!p) return false
  return await (await fs.statSync(path.resolve(p))).isFile()
}

async function isDir(p) {
  if (!p) return false
  return await (await fs.statSync(path.resolve(p))).isDirectory()
}

async function findFiles(dir, deep = false) {
  if (!dir) return []
  if (await isFile(dir)) return [dir]

  const filesList = []
  const dirList = [dir]
  while (dirList.length) {
    const p = dirList.shift()

    let list = await fs.readdirSync(p)
    list = list.map((v) => path.resolve(p, v))

    for (let item of list) {
      if (await isFile(item)) {
        filesList.push(path.resolve(item))
      } else if (deep) {
        dirList.push(path.resolve(item))
      }
    }
  }
  return filesList
}

module.exports = {
  isFile,
  isDir,
  findFiles,
}

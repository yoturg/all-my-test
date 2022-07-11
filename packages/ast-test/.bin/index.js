#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const yargs = require('yargs')
const { argv } = yargs

const deleteUnusedBranches = require('../src/deleteUnusedBranches2')

console.log(argv)

async function isFile(p) {
  return await (await fs.statSync(path.resolve(p))).isFile()
}
async function isDir(p) {
  return await (await fs.statSync(path.resolve(p))).isDir()
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

if (argv._.length === 0) {
  ;(async function () {
    const root = path.resolve()

    const res = await findFiles(root, true)
    res.forEach(async (v) => {
      const files = await fs.readFileSync(v)
      let resString = null
      try {
        resString = deleteUnusedBranches(files.toString(), v)
      } catch (e) {
        console.log(v)
      }
      if (resString !== null) await fs.writeFileSync(v, resString)
    })
  })()
}

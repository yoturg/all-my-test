#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { isFile, isDir } = require('./helper/index')
const renamedep = require('../src/renamedep')
const yargs = require('yargs')
const { argv } = yargs

const entry = path.resolve()

;(async function () {
  let prefix = './'
  let list = await fs.readdirSync(entry)
  const packageName = argv._.filter((n) => list.find((v) => v === n))
  list = list.map((v) => path.resolve(v))
  list.push(null)

  while (list.length) {
    const item = list.shift()
    // 如果等于null并且有下一层的元素在数组里
    if (item === null && list.length) {
      prefix = path.join(prefix, '../')
      list.push(null)
    
    } else if (await isFile(item)) {
      // 如果是一个文件
      try {
        const res = renamedep((await fs.readFileSync(item)).toString(), packageName, prefix)
        await fs.writeFileSync(item, res)

      } catch (e) {
        console.log(item)
        console.log(e)
      }
    } else if (await isDir(item)) {
      // 如果是一个文件夹
      const dirList = await fs.readdirSync(item)
      list = [
        ...list,
        ...dirList.map((v) => {
          return path.resolve(item, v)
        }),
      ]
    }
  }
})()

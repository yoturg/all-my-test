#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { isFile, isDir } = require('./helper/index')
const collectionDepend = require('../src/dependencyCollection')
const yargs = require('yargs')
const { argv } = yargs

console.log(argv)

const fileName = path.resolve(argv._[0])
const fnName = argv.f

collectionDepend(fileName, fnName).then(res => {
  console.log(JSON.stringify(res))
})

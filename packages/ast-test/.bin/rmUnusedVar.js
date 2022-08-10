#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const { findFiles } = require('./helper')

const removeUnused = require('../src/removeUnused')

;(async function () {
  const root = path.resolve()

  const res = await findFiles(root, true)
  res.forEach(async (v) => {
    
    const files = await fs.readFileSync(v)
    let resString = null
    try {
      
      resString = removeUnused(files.toString(), v)
    } catch (e) {
      console.log(v)
    }
    if (resString !== null) await fs.writeFileSync(v, resString)
    console.log(v, 'success')
  })
})()

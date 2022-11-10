#!/usr/bin/env node
const path = require('path')
const createRedux = require('../src/createRedux')

;(async () => {
  const root = path.resolve()
  
  await createRedux(root)
})()

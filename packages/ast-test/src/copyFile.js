const fs = require('fs')
const path = require('path')
const config = require('./input/config1.js')

;(async () => {
  console.log(Object.keys(config))
  Object.keys(config).forEach(async file => {
    const destPath = file.replace('step4', 'step6')
    const parsePath = path.parse(destPath)
    await fs.mkdirSync(parsePath.dir, {recursive: true})
    // console.log(parsePath)

    fs.copyFileSync(file, destPath)
  })
})()

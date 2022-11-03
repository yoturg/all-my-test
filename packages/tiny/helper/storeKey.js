const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const chalk = require('chalk');
const keysPath = path.resolve(__dirname, '../config/tinypngKeys.js');
const keysList = require('../config/tinypngKeys.js')
// const emptyKeysPath = path.resolve(__dirname, '../config/emptyKeys.js');
const { validate } = require('./tinify');

readFile = promisify(fs.readFile);
writeFile = promisify(fs.writeFile);

module.exports = async function (key) {
  try {
    let isValidated = await validate(key)
    if(!isValidated){
      console.log(chalk.red(`验证失败，无效key: ${key}`));
      return;
    }

    const oldContent = await readFile(keysPath, 'utf8');
    // const emptyContent = await readFile(emptyKeysPath, 'utf8');
    // const newContent = oldContent === emptyContent ? oldContent.replace('[]', `['${key}']`) : oldContent.replace(']', `,'${key}']`);
    if (keysList.indexOf(key) == -1) {
      const newContent = oldContent.replace('[', `['${key}',`);
      await writeFile(keysPath, newContent);
      console.log(chalk.green("保存成功！"));
      return 0
    }
    return keysList.indexOf(key)
  } catch (error) {
    console.log(chalk.red(`Some thing is wrong when you saving tinypng's key: ${error}`));
  }
}

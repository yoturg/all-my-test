const config = require('../config/default');
const tinypngKeys = require('../config/tinypngKeys');

// 选择tinypng的key
exports.choseKey = [
  {
    type: 'list',
    name: 'tinypngKey',
    message: "选择你要使用的keys or entry a new key by jo-tiny t -k [key].",
    choices: tinypngKeys,
  }
]

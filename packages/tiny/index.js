const chalk = require("chalk");
const path = require("path");
const tinypngKeys = require("./config/tinypngKeys");
const { validate } = require("./helper/tinify");
const storeKey = require("./helper/storeKey");
const ImgMin = require("./imgMin");

/**
 * 展示tinypng可用key次数
 * @returns {Promise<void>}
 */
async function validateKey() {
  for (let key of tinypngKeys) {
    await validate(key);
  }
}

async function compress(options) {
  const conf = {};
  options.input && (conf.imgMinPath = path.resolve(options.input));
  options.output && (conf.imgMinOutputPath = path.resolve(options.output));
  options.key && (conf.key = options.key);
  conf.deep = options.deep ? options.deep : false;

  if (options.key) {
    // 保存key
    conf.keyIndex = await storeKey(options.key);
  }

  if (!options.key || typeof options.key !== "string") {
    if (!tinypngKeys.length) {
      console.log(
        chalk.red(`请先填写tinypng‘s的key "jo-tiny t -k [key]" 进行认证`)
      );
      return;
    }
  }
  const imgMin = new ImgMin(conf);
  imgMin.start()
}

module.exports = { validateKey, compress };
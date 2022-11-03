const path = require("path");
const { findImg } = require("./helper/utils");
const defaultConf = require("./config/default");
const { validate, leftCount, imgMin } = require("./helper/tinify");
const tinypngKeys = require("./config/tinypngKeys");

class ImgMin {
  constructor(conf) {
    this.conf = Object.assign({}, defaultConf, conf);
    this.conf.imgMinOutputPath =
      this.conf.imgMinOutputPath || this.conf.imgMinPath;
  }

  async getImg(file) {
    await imgMin(file, this.conf);
  }

  async validateKey(index) {
    for (let i = index; i < tinypngKeys.length; i++) {
      const isValidated = await validate(tinypngKeys[i]);
      if (isValidated > 0) {
        this.keyIndex = i;
        this.leftCount = leftCount();
        return
      }
    }
    console.log('没有可用的key了, 使用jo-tiny t -k xxx指定一个新key吧')
  }

  async start() {
    let imgList = await findImg(this.conf.imgMinPath, this.conf.deep);

    if (imgList.length > 1) {
      let { dir, base, ext } = path.parse(this.conf.imgMinOutputPath);
      if (base && ext) {
        this.conf.imgMinOutputPath = path.resolve(dir, "./output");
      }
    }
    try {
      this.conf.keyIndex = this.conf.keyIndex || 0
      await this.validateKey(this.conf.keyIndex);

      for (let img of imgList) {
        this.getImg(img);
        this.leftCount -= 1;
        if (this.leftCount == 0) {
          await this.validateKey(this.keyIndex);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ImgMin;

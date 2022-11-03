const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const regMap = require("./regMap");

async function isDir(filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
async function findImg(filePath, deep = false) {
  let imgList = [];
  filePath = path.resolve(filePath);
  try {
    const isDirectory = await isDir(filePath);
    // 文件
    if (!isDirectory) {
      imgList.push(filePath);
    }
    //目录
    else {
      const files = await readdir(filePath);
      for (let file of files) {
        let fullPath = path.join(filePath, file);
        if (regMap.isTinyPic.test(fullPath)) {
          imgList.push(fullPath);
        }
        if ((await isDir(fullPath)) && deep) {
          imgList = imgList.concat(await findImg(fullPath, true));
        }
      }
      // console.log('else imgList', imgList)
    }
    return imgList;
  } catch (err) {}
}
module.exports = { isDir, findImg };

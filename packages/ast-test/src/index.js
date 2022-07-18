const fs = require('fs');

const path = require('path');

const deleteUnusedBranches = require('./deleteUnusedBranches3');

(async () => {
  try {
    const inputName = path.resolve(__dirname, 'input');
    const outputName = path.resolve(__dirname, 'output');
    const files = fs.readdirSync(inputName);
    files.forEach(async v => {
      const str = await fs.readFileSync(path.resolve(inputName, v));
      const res = deleteUnusedBranches(str.toString());
      await fs.writeFileSync(path.resolve(outputName, v), res);
    });
  } catch (e) {
    console.log(e);
  }
})();
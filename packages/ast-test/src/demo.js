const path = require('path');

const babelParser = require('@babel/parser');

const traverse = require('@babel/traverse').default;

const generate = require('@babel/generator').default;

const t = require('@babel/types');

const acorn = require('acorn');

const log = (...args) => {
  console.log(...args.map(v => JSON.stringify(v)));
}; // const ast = babelParser.parse(`import a from './a.js'`, {sourceType: 'module'})


const ast = acorn.parse(`import a, {b} from './a.js'`, {
  sourceType: 'module'
}); // 使用babel traverse来遍历ast上的节点

traverse(ast, {
  ImportDeclaration(p) {
    // 获取被import的文件
    const importFile = p.node.source.value; // 获取文件路径

    let importFilePath = path.join(path.dirname('./'), importFile);
    importFilePath = `./${importFilePath}.js`; // 构建一个变量定义的AST节点

    const variableDeclaration = t.variableDeclaration("var", [t.variableDeclarator(t.identifier(`__${path.basename(importFile)}_0__`), t.callExpression(t.identifier("myrequire"), [t.stringLiteral(importFilePath)]))]); // 将当前节点替换为变量定义节点

    p.replaceWith(variableDeclaration);
  }

});
log(generate(ast).code);
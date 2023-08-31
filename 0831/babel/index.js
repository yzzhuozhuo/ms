const { transform } = require('@babel/core');

const fs = require('fs');

//读取需要转换的js字符串
const before = fs.readFileSync('./before.js', 'utf8');

//使用babel-core的transform API 和插件进行字符串->AST转化。
const res = transform(`${before}`, {
  plugins: [require('./plugin')]
});

//返回一个对象(主要包括三个部分)：
// {
//   generated code, //生成码
//   sources map, //源映射
//   AST  //即abstract syntax tree，抽象语法树
// }

// 存在after.js删除
fs.existsSync('./after.js') && fs.unlinkSync('./after.js');
// 写入转化后的结果到after.js
fs.writeFileSync('./after.js', res.code, 'utf8');
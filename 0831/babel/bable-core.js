const babel = require('@babel/core');
const code = "class glass {get name() { return '水杯' }}";
const options = {
    presets: ['@babel/preset-env'],
}
// const result1 = babel.transform(code, options);
// babel.transformAsync(code, options).then(res => console.log(res));
// console.log(result);

// const content = babel.transformFileSync('./babel-file.js');
// console.log(content);

// const parsedAst = babel.parse(code, { parserOpts: { allowReturnOutsideFunction: true } });
// console.log(parsedAst);
// const result3 = babel.transformFromAst(parsedAst, code, options);
// console.log(result3);

const config = babel.loadPartialConfig(options); // 提前生成config
const result = babel.transform(code, config.options);
console.log(result);

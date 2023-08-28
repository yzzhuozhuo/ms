/* 实现一个函数 add(num1, num2)，输入两个二进制数的字符串表示，输出10进制相加的结果
比如： */
// add('01', '10') = 3

function add(...arg) {
  return arg.reduce((acc, cur) => parseInt(acc, 2) + parseInt(cur, 2), 0)
}

const res = add('01', '10')

console.log(res)
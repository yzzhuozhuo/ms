// 1. 实现一个函数，传入：1234567.90，转化成：1,234,567.90
// function commafy(num) {
// 	...
// }

const num = '11321567.90'

function commafy(num) {
  num = num.split('')
  let j = num.length - 1
  let count = 1
  while(j >= 0) {
    if (num[j] === '.') {
      count = 1
    }
    if (count === 3) {
      j && num.splice(j, 0, '.')
      count = 0
    }
    count++
    j--
  }
  return num.join('')
}

const res = commafy(num)

console.log(res)

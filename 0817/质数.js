// 2. 写一个判断质数的isPrime()函数，当其为质数时返回true，否则返回false。
// ```javascript
// function isPrime(number) {
//    // 补全代码
// }
// ```

// 质数（Prime number，又称素数），[1]指在大于1的自然数中，除了1和该数自身外，无法被其他自然数整除的数
// （也可定义为只有1与该数本身两个正因数的数）

const number = 3

// 3/3 3/2 3/1

function isPrime(number) {
  let originNum = number
  let result = []
  while (number) {
    const value = originNum / number
    number--
    if (value !== originNum && value !== 1) {
      result.push(value)
    }
  }
  return result.every(item => !Number.isInteger(item))
}

const res = isPrime(number)
console.log(res)
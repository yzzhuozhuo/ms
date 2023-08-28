// 写一个加法函数(sum)，使他可以同时支持sum(x,y)和sum(x)(y)两种调用方式。
function sum () {
  const argsList = [].slice.call(arguments)
  if (argsList.length > 1) {
    return add(argsList)
  } else {
    return function () {
      const args = [].slice.call(arguments)
      return add([...argsList, ...args])
    }
  }
}

const add = (arr) => {
  return arr.reduce((cur, pre) => cur + pre, 0)
}

// const res = sum(1, 2)
// console.log(res)

// const res1 = sum(1)(2)
// console.log(res1)

function sum1 (...args) {
  const _add = function (...innerArgs) {
    return sum1(...args, ...innerArgs)
  }
  _add.toString = function () {
    return add(args)
  }

  return _add
}

const sumRes = sum1(1,2,3)
const sumRes1 = sum1(1,2,3)(3)

console.log(Number(sumRes1))

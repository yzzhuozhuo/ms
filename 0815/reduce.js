/* 
  reduce() 方法对数组中的每个元素按序执行一个提供的 reducer 函数，
  每一次运行 reducer 会将先前元素的计算结果作为参数传入，
  最后将其结果汇总为单个返回值。
*/

Array.prototype.reduce = function (callbackFn, initialValue = this[0]) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a funtion`)
  }
  let len = this.length
  let i = 0
  while (i < len) {
    initialValue = callbackFn(initialValue, this[i], i, this)
    i++
  }
  return initialValue
}


const arr = [1, 2, 3]

const res = arr.reduce((acc, cur) => acc + cur)

console.log(res)
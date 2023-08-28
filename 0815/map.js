
// map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

// thisArg 执行 callbackFn 时用作 this 的值。
// callbackFn 为数组中的每个元素执行的函数。它的返回值作为一个元素被添加为新数组中。该函数被调用时将传入以下参数：
// 1. element
// 2. index
// 3. array 调用 map 的数组本身

Array.prototype.map = function (callback, thisArg) {
  if (this == null) {
    throw new Error('this is null or not defined')
  }
  if (typeof callback !== 'function') {
    throw new Error(`${callback} is not a function`)
  }
  let len = this.length
  let i = 0
  let result = []
  while (i < len) {
    result[i] = callback.call(thisArg, this[i], i, this)
    i++
  }
  return result
}

const arr  = [1, 2, 3]

const res = arr.map(item => {
  return item + 1
})

console.log(res);

Array.prototype.map1 = function (callback, thisArg) {
  if (this == null) {
    throw new Error('this is null or not defined')
  }
  if (typeof callback !== 'function') {
    throw new Error(`${callback} is not a function`)
  }
  return this.reduce((acc, cur, index) => {
    acc[index] = callback.call(thisArg, this[index], cur, this)
    return acc
  }, [])
}

const arr1  = [1, 2, 3]

const res1 = arr.map1(item => {
  return item + 1
})

console.log(res);

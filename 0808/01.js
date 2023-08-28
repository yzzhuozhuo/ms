/* 
  1. 给定形如 `www.toutiao.com` 的 URL，将其转换成 `com.toutiao.www` 的形式
  2. 写一个加法函数(sum)，使他可以同时支持sum(x,y)和sum(x)(y)两种调用方式。
  3. 合并两个有序数组
    mergeSortedArray([2,5,6,9], [1,2,3,29]);
    结果 [1, 2, 2, 3, 5, 6, 9, 29]
*/
const arr1 = [2, 5, 6, 9]
const arr2 = [1, 2, 3, 29, 101, 222]

// const mergeSortedArray = (arr1, arr2) => {
//   return arr1.concat(arr2).sort((a, b) => a - b)
// }
const mergeSortedArray1 = (arr1 = [], arr2 = []) => {
  let a = arr1[0],
    b = arr2[0],
    i = 1,
    j = 1,
    result = []

  while (a || b) {
    if (!a) {
      result.push(b)
      b = arr2[j]
      j++
      continue
    }

    if (!b) {
      result.push(a)
      a = arr1[i]
      i++
      continue
    }
  
    if (a > b) {
      result.push(b)
      b = arr2[j]
      j++
    } else {
      result.push(a)
      a = arr1[i]
      i++
    }
  }

  return result
}

const mergeSortedArray = (arr1 = [], arr2 = []) => {
  let result = []

  for (let i = 0, j = 0; i < arr1.length || j < arr2.length; true) {
    var a = arr1[i]
    var b = arr2[j]

    if (!a) {
      result.push(b)
      j++
      continue
    }

    if (!b) {
      result.push(a)
      i++
      continue
    }

    if (a > b) {
      result.push(b)
      j++
    } else {
      result.push(a)
      i++
    }
  }

  return result
}

const res = mergeSortedArray(arr1, arr2)
console.log(res)

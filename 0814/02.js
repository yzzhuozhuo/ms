/* 
  3. 合并两个有序数组
    mergeSortedArray([2,5,6,9], [1,2,3,29]);
    结果 [1, 2, 2, 3, 5, 6, 9, 29]
*/
const arr1 = [2,5,6,9]
const arr2 = [1,2,3,29]

function merge(arr1, arr2) {
  let i = 0
  let j = 0
  let a = arr1[0]
  let b = arr2[0]
  let res = []
  while (a || b) {
    if (!a) {
      res.push(b)
      b = arr2[++j]
      continue
    }

    if (!b) {
      res.push(a)
      a = arr1[++i]
      continue
    }

    if (a > b) {
      res.push(b)
      b = arr2[++j]
    } else {
      res.push(a)
      a = arr1[++i]
    }
  }
  return res
 }

const res = merge(arr1, arr2)
console.log(res)
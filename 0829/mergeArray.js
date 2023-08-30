const arr1 = [1, 2, 3, 5]
const arr2 = [4, 5, 6]

function merge(arr1, arr2) {
  let i = 0
  let j = 0
  let res = []
  let a1 = arr1[i]
  let a2 = arr2[j]
  while(a1 || a2) {
    if (!a1) {
      res.push(a2)
      a2 = arr2[++j]
    } else if (!a2) {
      res.push(a1)
      a1 = arr1[++i]
    } else if (a1 < a2) {
      res.push(a1)
      a1 = arr1[++i]
    } else {
      res.push(a2)
      a2 = arr2[++j]
    }
  }
  return res
}

function merge1(arr1, arr2) {
  let i = 0
  let j = 0
  let res = []
  let cur = null
  while(arr1[i] || arr2[j]) {
    if (!arr1[i]) {
      cur = arr2[j++]
    } else if (!arr2[j]) {
      cur = arr1[i++]
    } else if (arr1[i] < arr2[j]) {
      cur = arr1[i++]
    } else {
      cur = arr2[j++]
    }
    res[i + j - 1] = cur
  }
  return res
}

const res = merge1(arr1, arr2)

console.log(res)
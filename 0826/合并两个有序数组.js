const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

function merge(arr1, arr2) {
  let i = 0
  let j = 0
  let res = []
  let a = arr1[i]
  let b = arr2[j]
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

console.log(merge(arr1, arr2))
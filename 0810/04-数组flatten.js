const arr = [1, [2, [3, 4]]]

const flatten = (arr) => {
  let result = []
  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      result = Array.isArray(arr[key]) ? result.concat(flatten(arr[key])) : result.concat(arr[key])
    }
  }
  return result
}

const flatten1 = (arr) => {
  return arr.reduce((cur, pre) => {
    return cur.concat(Array.isArray(pre) ? flatten1(pre) : pre) 
  }, [])
}

// [].concat(...[1, 2, 3, [4, 5, [6, 7]]])
// [].concat(...[1, 2, 3, 4, 5, [6, 7]])
const flatten2 = (arr) => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten2(arr)) // [1, 2, 3, 4]
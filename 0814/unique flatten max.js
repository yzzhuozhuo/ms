function unique (arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

function unique1(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.length || !acc.includes(cur)) {
      acc.push(cur)
    }
    return acc
  }, [])
}

function unique2 (arr) {
  return [...new Set(arr)]
}

function unique3 (arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}

const unique4 = (array) => {
  array.sort((a, b) => a - b)
  let current = null
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (!i || current != array[i]) {
      result.push(array[i])
    }
    current = array[i]
  }
  return result
}

// const arr = [1, 1, 2] 
// const res = unique4(arr)
// console.log(res)


const flatten = (arr) => {
  return arr.reduce((acc, cur) => {
    return Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur)
  }, [])
}

const flatte1 = (arr) => {
  let res = []
  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      res = Array.isArray(arr[key]) ? res.concat(flatte1(arr[key])) : res.concat(arr[key])    
    }
  }
  return res
}

const flatte2 = (arr) => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

const arr = [1, 2, [3, 4, [5, 6]]]
const res = flatte2(arr)
console.log(res)


// const arr1 = [1, 3, 5, 6, 9]
// const res1 = Math.max.call(...arr1)
// console.log(res1)


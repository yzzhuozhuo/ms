const arr = [1, 1, 2, 3, 4, 4, 5]

const unique1 = (arr) => {
  const res = []
  arr.forEach(element => {
    if (res.indexOf(element) === -1) {
      res.push(element)
    }
  })
  return res
}

const unique2 = (arr) => {
  const res = []
  const sortArray = arr.sort()
  let current = null
  for (let i = 0; i < sortArray.length; i++) {
    if (!i || current !== sortArray[i]) {
      res.push(sortArray[i])
    }
    current = sortArray[i]
  }
  return res
}

const unique3 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

const unique4 = (arr) => {
  return [...new Set(arr)]
}

const unique5 = (arr) => {
  const map = new Map()
  return arr.filter(item => !map.get(item) && map.set(item, 1))
}

const unique6 = (arr) => {
  return arr.reduce((pre, cur) => {
    if (!pre.length || !pre.includes(cur)) {
      pre.push(cur)
    }
    return pre
  }, [])
}

const res = unique6(arr)
console.log(res)
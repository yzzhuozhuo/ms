const str = 'aaaabbcccccc'

function getMaxStr (str) {
  let arr = str.split('').sort((a, b) => a - b)
  let startIndex = 0
  let endIndex = 1
  let maxCount = 0
  let len = arr.length
  let result = []
  while (startIndex < len) {
    if (arr[startIndex] !== arr[endIndex]) {
      let diffCount = endIndex - startIndex
      if (diffCount > maxCount) {
        maxCount = diffCount
        result = [arr[startIndex]]
      } else if (diffCount === maxCount) {
        result.push(arr[startIndex])
      }
      startIndex = endIndex
    }
    endIndex++
  }
  for (let i = 0; i < result.length; i++) {
    const word = result[i]
    return `出现最多的字符是${word}, 次数是${maxCount}`
  }
}

const res = getMaxStr(str)
console.log(res)

let str = 'www.abc.bdc.baidu.com'

function reverse (str) {
  let i = 0
  let j = str.length - 1
  let left = ''
  let right = ''
  let isFirstPoint = true
  while (i <= j) {
    if (str[j] !== '.') {
      right = str[j--] + right
    } else {
      if (str[i] !== '.' && isFirstPoint) {
        left += str[i++]
      } else {
        isFirstPoint = false
        right = right + str[i++]
      }
    }
  }
  return right + left
}

const res = reverse(str)
console.log('res', res)

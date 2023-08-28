// 给定形如 `www.baidu.com` 的 URL，将其转换成 `com.baidu.www` 的形式

// const reverse = (str) => {
//   const firstPoint = str.indexOf('.')
//   const lastPoint = str.lastIndexOf('.')
//   const one = str.substring(0, firstPoint)
//   const two = str.substring(firstPoint, lastPoint + 1)
//   const three = str.substring(lastPoint + 1, str.length)
//   return `${three}${two}${one}`
// }

// const reverse = (str) => {
//   return str.split('.').reverse().join('.')
// }

// const res = reverse(str)

// console.log(res)

function reverse(str) {
  let res = ''
  let temp = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '.') {
      temp += str[i]
    } else {
      temp = '.' + temp
      res = temp + res
      temp = ''
    }
  }
  return temp + res
}

const str = 'www.baidu.com'

const res = reverse(str)

console.log(res)


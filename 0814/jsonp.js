const hanleParams = (url, data) => {
  const arr = []
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      arr.push(`${key}=${data[key]}`)
    }
  }
  const str = arr.join('&')
  return url += url.indexOf('?') > -1 ? '&' + str : '?' + str
 }
const url = 'http://xxxxx?c=1'
const data = {
  a: 1,
  b: 2
}
const res = hanleParams(url, data)
console.log(res)

let count = 0
const jsonp = (url, data, callback) => {
  const funName = 'jsonp' + count++
  data['callback'] = funName
  const requestUrl = hanleParams(url, data)
  const script = document.createElement('script')
  script.src = requestUrl
  document.head.appendChild(script)
  return new Promise((resolve, reject) => {
    try {
      window[funName] = function (res) {
        callback && callback(res)
        resolve(res)
        delete window[funName]
      }
    } catch (error) {
      reject(error)
    }
  })
}

const fun = (res) => {
  console.log(res)
}

jsonp(url, data, fun)
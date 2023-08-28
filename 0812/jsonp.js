function handleUrl(url, data) {
  const arr = []
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      arr.push(`${key}=${data[key]}`)
    }
  }
  return url += '?' + arr.join('&')
}

// const url = 'http://localhost:3000?a=1&b=2&callback=fnNume'

let count = 0
function jsnop (url, data, callback) {
  const fnName = 'jsonp' + count++
  data['callback'] = fnName
  const requestUrl = handleUrl(url, data)
  let script = document.createElement('script')
  script.src = requestUrl
  document.head.appendChild(script)
  return new Promise((resolve, reject) => {
    try {
      window[fnName] = function (res) {
        callback && callback(res)
        delete script
        resolve(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}

const url = 'http://localhost:3000'

const callback = function (res) {
  console.log(res)
}
const data = {
  a: 1,
  b: 2
}

console.log(handleUrl(url, data))

// a=1&b=2



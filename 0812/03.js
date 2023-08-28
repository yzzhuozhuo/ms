   
function getQuery (url) {
  const str = url.substring(url.indexOf('?') + 1)
  const arr =  str.split('&')
  const result = {}
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=')
    result[temp[0]] = temp[1]
  }
  return result
}

const res = getQuery('https://www.google.com/search?a=123&b=adbxo213&c=UTF-8')

console.log(res)
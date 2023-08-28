/* 原生ajax步骤

1. 创建XMLHttpRequest对象
2. 使用open方法设置和服务器的交互信息
3. 使用send发送数据
4. 注册事件
 */

const ajax = (method, url, data = '') => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send(data)
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.response)
      } else {
        reject(xhr.statusText)
      }
    }
  })
}


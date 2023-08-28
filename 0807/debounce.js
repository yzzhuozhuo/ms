// 防抖：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

const debounce = (func, delay) => {
  let timer = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, delay)
  }
}

// debounce(() => {
//   console.log('debounce')
// }, 500)

function debounce(fun, wait) {
  let timer = null
  return function (...args) {
    const context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fun.apply(context, args)
      // 执行完初始化 timer
      timer = null
    }, wait)
  }
}

// window.onscroll = debounce(function () {
// }, 300)

// 立即执行
function debounce (fun, wait, immediate) {
  let timer = null
  return function (...args) {
    const context = this
    if (timer) clearTimeout(timer)
    if (immediate) {
      const canRun = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      if (canRun) fun.apply(context, args)
    } else {
      timer = setTimeout(function () {
        fun.apply(context, args)
        // 执行完初始化 timer
        timer = null
      }, wait)
    }
  }
}
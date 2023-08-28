function throttle (func, wait) {
  let pre = Date.now()
  return function (...args) {
    const now = Date.now()
    const context = this
    if (now - pre > wait) {
      func.apply(context, args)
    }
  }
}


function throttle (func, wait) {
  let timer = null
  return function (...args) {
    const context = this
    if (timer) return
    timer = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

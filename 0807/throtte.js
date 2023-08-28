// 节流：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

const throtte = (func, time) => {
  let pre = Date.now()
  return function () {
    const context = this
    const now = Date.now()
    if (now >= pre + time) {
      func.apply(context, arguments)
      pre = Date.now()
    }
  }
}

const throtte1 = (func, time) => {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    if (timer) return
    timer = setTimeout(() => {
      func.apply(context, args)
      timer = null
    }, time)
  }
}

throtte(() => {
  console.log('throtte')
}, 500)

// 我想要一个有头有尾的！就是鼠标移入能立刻执行，停止触发的时候还能再执行一次！

// 第三版
function throttle(func, wait) {
  var timeout, context, args, result;
  var previous = 0;

  var later = function() {
      previous = +new Date();
      timeout = null;
      func.apply(context, args)
  };

  var throttled = function() {
      var now = +new Date();
      //下次触发 func 剩余的时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
       // 如果没有剩余的时间了或者你改了系统时间
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
      } else if (!timeout) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}



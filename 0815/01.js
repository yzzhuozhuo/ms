// 实现一个repeat方法，要求如下：


// 需要实现的函数

function repeat (func, times, wait) {
 // 补全
  let count = 0
  let timer = null
  const fn = function (arg) {
    timer = setTimeout(() => {
      func(arg)
      count++
      clearTimeout(timer)
      count < times && fn(arg)
    }, wait)
  }
  return fn
}



// 使下面调用代码能正常工作

const repeatFunc = repeat(console.log, 4, 1000);

repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒
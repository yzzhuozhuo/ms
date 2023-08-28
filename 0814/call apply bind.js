const foo = {
  a: 1
}

function fun (args) {
  console.log('this.a', this.a)
  console.log('args', args)
}

// 不能写箭头函数，否则 this 就会指向代码块外部的上下文，例如 window，而不是 foo 对象
Function.prototype.myCall = function (context = window, ...args) {
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

// fun.call(foo)
fun.myCall(foo, 'yz', '18')

Function.prototype.myApply = function (context = window, args) {
  context.fn = this
  const res = context.fn(args)
  delete context.fn
  return res
}

// fun.myApply(foo, ['yz', '18'])

// Function.prototype.myBind = function (context = window, args) {
//   const _this = this
//   return function () {
//     return _this.myApply(context, args)
//   }
// }

// Function.prototype.myBind = function (context = window, args) {
//   return () => {
//     return this.myApply(context, args)
//   }
// }

Function.prototype.myBind = function (context = window, args) {
  return () => this.myApply(context, args)
}

// fun.myBind(foo, 123)()
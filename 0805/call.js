const foo = {
  a: 1
}

function bar (args) {
  console.log(this, args)
  return args
}

// Array.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"] 

Function.prototype.myCall = function (context = window, ...args) {
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

Function.prototype.myApply = function (context = window, args) {
  context.fn = this
  const res = context.fn(args)
  delete context.fn
  return res
}

Function.prototype.myBind = function (context = window, args) {
  return () => this.myApply(context, args)
}

const res = bar.myBind(foo, ['yz', 'z'])()
console.log('res----', res)


/* 
  判断当前函数传入的参数是否大于或等于fn需要参数的数量，如果是，直接执行fn
  如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回currying函数
*/
function currying(fn, ...args) {
  console.log('args', args)
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => currying(fn, ...args, ...args2);
  }
}

function add(a, b, c) {
  return a + b + c;
}

const curryingFun = currying(add)

let res1 = curryingFun(1)(2)(3);  // 1 2 3 
let res2 = curryingFun(1, 2)(3);  // 1 2 3 
let res3 = curryingFun(1, 2, 3);  // 1 2 3 

// console.log(res1, res2, res3)

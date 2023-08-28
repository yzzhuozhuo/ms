// 实现如下函数add,使如下执行都等于9

// function addNum(...arg) {
//   return arg.reduce((acc, cur) => acc + cur)
// }

// function addNum(a,b,c,d) {
//   return a + b + c
// }

// function curry (fun, ...arg) {
//   if (arg.length >= fun.length) {
//     return fun(...arg)
//   } else {
//     return (...arg1) => {
//       return curry(fun, ...arg, ...arg1)
//     }
//   }
// }

// const add = curry(addNum)

// const res1 = add(2,3,4)
// const res2 = add(2)(3)(4)(5)
// const res3 = add(2)(3,4)
// const res4 = add(2)(3)(4)
// const res5 = add(2,3)(4)(5)

// console.log(res1)
// console.log(res2)
// console.log(res3)
// console.log(res4)
// console.log(res5)


function add(...args) {
  function inner(...innerArgs) {
    return add(...args, ...innerArgs)
  }

  inner.valueOf = function () {
    return args.reduce((sum, num) => sum + num, 0)
  }

  return inner
}

// const res1 = add(2, 3, 4);
// const res2 = add(2)(3)(4);
// const res3 = add(2)(3, 4);
// const res4 = add(2)(3)(4);
// const res5 = add(2, 3)(4)(5);

// console.log(res1.valueOf());  // Output: 9
// console.log(res2.valueOf());  // Output: 9
// console.log(res3.valueOf());  // Output: 9
// console.log(res4.valueOf());  // Output: 9
// console.log(res5.valueOf());  // Output: 14



// function a () {
//   function b () {
//     console.log('b');
//   }
//   b.valueOf = () => {
//     console.log(111);
//   }
//   return b
// }

// let res = a()
// res.valueOf()
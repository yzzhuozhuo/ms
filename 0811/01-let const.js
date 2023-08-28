// let 和 const
// 1. 不会被提升
// if (false) {
//   let value = 1;
// }
// console.log(value); // Uncaught ReferenceError: value is not defined

// 2. 不绑定全局作用域
// var value = 1;
// console.log(window.value); // 1

// let value = 1;
// console.log(window.value); // undefined
// 3. 不能重复赋值，重复声明报错

// var value = 1;
// let value = 2; // Uncaught SyntaxError: Identifier 'value' has already been declared

// 临时死区，临时死区(Temporal Dead Zone)，简写为 TDZ。
// let 和 const 声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，会导致报错：

// console.log(typeof value); // Uncaught ReferenceError: value is not defined
// let value = 1;


// var funcs = [], object = {a: 1, b: 1, c: 1};
// for (var key in object) {
//     funcs.push(function(){
//         console.log(key)
//     });
// }

// funcs[0]()

// var funcs = [], object = {a: 1, b: 1, c: 1};
// for (let key in object) {
//     funcs.push(function(){
//         console.log(key)
//     });
// }

// funcs[0]()

// var funcs = [], object = {a: 1, b: 1, c: 1};
// for (const key in object) {
//     funcs.push(function(){
//         console.log(key)
//     });
// }

// funcs[0]()
// funcs[1]()

// 结果是正确打印 'a'，这是因为在 for in 循环中，每次迭代不会修改已有的绑定，而是会创建一个新的绑定。

// babel 编译

// let a = 1
// var a = 1

// if (false) {
//   let a = 1
// }
// if (false) {
//   var _a = 1
// }

// var funcs = [];
// for (let i = 0; i < 10; i++) {
//     funcs[i] = function () {
//         console.log(i);
//     };
// }
// funcs[0](); // 0

// 编译后

var funcs = [];
var _loop = function (i) {
  funcs[i] = function () {
    console.log(i);
  }
}
for (let i = 0; i < 10; i++) {
  _loop(i)
}

funcs[0](); // 0
funcs[1](); // 1


// var funcs = [];
// for (var i = 0; i < 10; i++) {
//     funcs[i] = (function (i) {
//         return function () {
//           console.log(i);
//         }
//     })(i);
// }
// funcs[0](); // 0
// funcs[1](); // 1
// funcs[2](); // 2



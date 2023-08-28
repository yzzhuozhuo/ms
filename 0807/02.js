/* 
  ECMAScript中所有函数的参数都是按值传递的。
  也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。
*/

// 按值传递
// var value = 1;
// function foo(v) {
//   v = 2;
//   console.log(v); //2
// }
// foo(value);
// console.log(value) // 1

// 按引用传递
// var obj = {
//   a: 1
// }
// function foo1(obj) {
//   obj.a = 2
//   console.log(obj)
// }

// foo1(obj)
// console.log(obj)


var obj = {
  value: 1
};
function foo(o) {
  o = 2;
  console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1
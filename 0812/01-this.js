// // 1. 以下代码输出什么结果，`this.name`中this指向什么：

// window.name = 'ByteDance';
// function A () {
//    this.name = 123;
// }
// A.prototype.getA = function() {
//  console.log(this);
//  return this.name + 1;
// }
// let a = new A();
// let funcA = a.getA;
// // funcA();

// funcA.call(a)


// 1. 以下代码输出什么结果，`this.name`中this指向什么：

// window.name = 'ByteDance';
// function A () {
//    this.name = 123;
// }

// A.prototype.getA = () => {
//  console.log(this);
//  return this.name + 1;
// }

// let a = new A();
// a.getA()
// let funcA = a.getA;
// funcA();

// funcA.call(a)

// https://blog.csdn.net/corner2030/article/details/97802475

window.name = 'ByteDance';
class A {
 constructor() {
   this.name = 123;
 }
 getA () { 
   console.log(this);
   return this.name + 1
 }
}

let a = new A();
let funcA = a.getA;
funcA()
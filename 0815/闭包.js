// 当一个函数能够记住并访问它所在的词法作用域的时候，就产生了闭包，即使函数是在词法作用域之外执行

// 1. 返回一个函数
// 2. 作为函数参数传递
// 3. 回调函数
// 4. 非典型闭包IIFE(立即执行函数表达式)

// 1. 返回一个函数
var a  = 1;
function foo(){
  var a = 2;
  // 这就是闭包
  return function(){
    console.log(a);
  }
}
var bar = foo();
// 输出2，而不是1
bar();

// 2. 作为函数参数传递：无论通过何种手段将内部函数传递到它所在词法作用域之外，它都会持有对原始作用域的引用，无论在何处执行这个函数，都会产生闭包。

var a = 1;
function foo(){
  var a = 2;
  function baz(){
    console.log(a);
  }
  bar(baz);
}
function bar(fn){
  // 这就是闭包
  fn();
}
// 输出2，而不是1
foo();

// 3. 回调函数：在定时器、事件监听、Ajax请求、跨窗口通信、Web Workers或者任何异步中，只要使用了回调函数，实际上就是在使用闭包。

// 定时器
setTimeout(function timeHandler(){
  console.log('timer');
}, 100)

// 事件监听
$('#container').click(function(){
  console.log('DOM Listener');
})

// 4.非典型闭包IIFE(立即执行函数表达式)

var a = 2;
(function IIFE(){
  // 输出2
  console.log(a);
})();


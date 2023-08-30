/* 
  2. setImmediate
  如果在一个I/O周期内进行调度，setImmediate() 将始终在任何定时器（setTimeout、setInterval）之前执行.

  3. setTimeout 与 setImmediate

  setImmediate()被设计在 poll 阶段结束后立即执行回调；
  setTimeout()被设计在指定下限时间到达后执行回调;
*/


// 无 I/O 处理情况下：
/* 
  问题总结：而我们在==执行启动代码==的时候，进入timers的时间延迟其实是==随机的==，并不是确定的，所以会出现两个函数执行顺序随机的情况。
 */
// setTimeout(function timeout() {
//   console.log('timeout');
// }, 0);

// setImmediate(function immediate() {
//   console.log('immediate');
// });

// 在一个 I/O 处理情况下：immediate 永远比 setTimeout 先执行
/* 
  原因如下：fs.readFile的回调是在poll阶段执行的，当其回调执行完毕之后，
  poll队列为空，而setTimeout入了timers的队列，此时有代码 setImmediate()，
  于是事件循环先进入check阶段执行回调，之后在下一个事件循环再在timers阶段中执行回调。
*/
// var fs = require('fs')

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('immediate');
//   });
// });


setTimeout(() => {
  setImmediate(() => {
      console.log('setImmediate');
  });
  setTimeout(() => {
      console.log('setTimeout');
  }, 0);
}, 0);


/* 
总结：
  - 如果两者都在主模块中调用，那么执行先后取决于进程性能，也就是你的电脑好撇，当然也就是随机。
  - 如果两者都不在主模块调用（被一个异步操作包裹），那么**setImmediate的回调永远先执行**。
*/
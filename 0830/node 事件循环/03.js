/* 
  1. nextTick 与 setImmediate
  process.nextTick 不属于事件循环的任何一个阶段，它属于该阶段与下阶段之间的过渡, 即本阶段执行结束, 进入下一个阶段前, 所要执行的回调。有给人一种插队的感觉.

  setImmediate 的回调处于check阶段, 当poll阶段的队列为空, 且check阶段的事件队列存在的时候，切换到check阶段执行.
*/


/* 
  nextTick 递归的危害
  由于nextTick具有插队的机制，nextTick的递归会让事件循环机制无法进入下一个阶段. 
  导致I/O处理完成或者定时任务超时后仍然无法执行, 导致了其它事件处理程序处于饥饿状态. 为了防止递归产生的问题, Node.js 提供了一个 process.maxTickDepth (默认 1000)。
*/


const fs = require('fs');
let counts = 0;

function wait (mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

function nextTick () {
  process.nextTick(() => {
    wait(20);
    console.log('nextTick');
    nextTick();
  });
}

const lastTime = Date.now();

setTimeout(() => {
  console.log('timers', Date.now() - lastTime + 'ms');
}, 0);

nextTick();

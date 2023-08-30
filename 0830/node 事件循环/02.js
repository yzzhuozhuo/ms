

const fs = require('fs');
let counts = 0;

// 定义一个 wait 方法
function wait(mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

// 读取本地文件 操作IO
function asyncOperation(callback) {
  fs.readFile(__dirname + '/' + __filename, callback);
}

const lastTime = Date.now();

// setTimeout
setTimeout(() => {
  console.log('timers', Date.now() - lastTime + 'ms');
}, 0);

// process.nextTick
process.nextTick(() => {
  // 进入event loop
  // timers阶段之前执行
  wait(20);
  asyncOperation(() => {
    console.log('poll');
  });
});

/* 
  这里呢，为了让这个setTimeout优先于fs.readFile 回调, 执行了process.nextTick, 表示在进入timers阶段前, 等待20ms后执行文件读取.
*/
/**
 * timers 21ms
 * poll
 */

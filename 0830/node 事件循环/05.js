/* 
4. nextTick 与 Promise
概念：对于这两个，我们可以把它们理解成一个微任务。
也就是说，它其实不属于事件循环的一部分。 那么他们是在什么时候执行呢？ 
不管在什么地方调用，他们都会在其所处的事件循环最后，事件循环进入下一个循环的阶段前执行。
*/


setTimeout(() => {
  console.log('timeout0');
  new Promise((resolve, reject) => { resolve('resolved') }).then(res => console.log(res));
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('timeout resolved')
    })
  }).then(res => console.log(res));
  process.nextTick(() => {
    console.log('nextTick1');
    process.nextTick(() => {
      console.log('nextTick2');
    });
  });
  process.nextTick(() => {
    console.log('nextTick3');
  });
  console.log('sync');
  setTimeout(() => {
    console.log('timeout2');
  }, 0);
}, 0);


// （这里要说明的是 微任务nextTick优先级要比Promise要高）
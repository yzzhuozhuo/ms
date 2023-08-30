setImmediate(function () {
  console.log("setImmediate");
  setImmediate(function () {
    console.log("嵌套setImmediate");
  });
  process.nextTick(function () {
    console.log("nextTick");
  })
});

/* 

解析：
事件循环check阶段执行回调函数输出setImmediate，之后输出nextTick。
嵌套的setImmediate在下一个事件循环的check阶段执行回调输出嵌套的setImmediate。
*/
/* 
  setImmediate
  nextTick
  嵌套setImmediate
*/

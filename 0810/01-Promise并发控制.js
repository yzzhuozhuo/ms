/* 
  Promise 并发控制

  代码的核心思路为：
    - 先初始化 limit 个 promise 实例，将它们放到 executing 数组中
    - 使用 Promise.race 等待这 limit 个 promise 实例的执行结果
    - 一旦某一个 promise 的状态发生变更，就将其从 executing 中删除，然后再执行循环生成新的 promise，放入executing 中
    - 重复2、3两个步骤，直到所有的 promise 都被执行完
    - 最后使用 Promise.all 返回所有 promise 实例的执行结果
*/

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 用于存放所有的promise实例
  const executing = []; // 用于存放目前正在执行的promise
  for (const item of array) {
    const p = Promise.resolve(iteratorFn(item)); // 防止回调函数返回的不是promise，使用Promise.resolve进行包裹
    ret.push(p);
    if (poolLimit <= array.length) {
      // then回调中，当这个promise状态变为fulfilled后，将其从正在执行的promise列表executing中删除
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        // 一旦正在执行的promise列表数量等于限制数，就使用Promise.race等待某一个promise状态发生变更，
        // 状态变更后，就会执行上面then的回调，将该promise从executing中删除，
        // 然后再进入到下一次for循环，生成新的promise进行补充
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}


const timeout = (i) => {
  console.log('开始', i);
  return new Promise((resolve) => setTimeout(() => {
    resolve(i);
    console.log('结束', i);
  }, i));
};

(async () => {
    const res = await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
    console.log(res);
  })();


// Promise.all([timeout(1000), timeout(5000), timeout(3000), timeout(2000)])
  // .then(res => {
  //   console.log(res)
  // })
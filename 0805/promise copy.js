const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCallBack = []
    this.onRejectedCallBack = []
    executor(this.resolve, this.reject)
  }

  // status = PENDING // 初始化状态
  // value = null // 成功返回的值
  // reason = null // 失败返回的原因

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCallBack.length) {
        this.onFulfilledCallBack.shift()(value)
      }
    }
  }

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status === REJECTED
      this.reason = reason
      while (this.onRejectedCallBack.length) {
        this.onRejectedCallBack.shift()(reason)
      }
    }
  }

  then = (onFulfilled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        const x = onFulfilled(this.value)
        if (x instanceof MyPromise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      }
  
      if (this.status === REJECTED) {
        onRejected(this.reason)
      }
  
      if (this.status === PENDING) {
        this.onFulfilledCallBack.push(onFulfilled)
        this.onRejectedCallBack.push(onRejected)
      }
    })
  }

  all = (promiseArr = []) => {
    let result = [];
    let i = 0;

    return new Promise(resolve => {
      for (let index = 0; index < promiseArr.length; index++) {
        if (!(promiseArr[index] instanceof Promise)) {
          promiseArr[index] = Promise.resolve(promiseArr[index])
        }
        promiseArr[index].then(res => {
          result[index] = res;
          i++
          if (i >= promiseArr.length) {
            resolve(result)
          }
        })
      }
    })
  }

  race = (promiseArr = []) => {
    return new Promise((resolve, reject) => {
      for (let index = 0; index < promiseArr.length; index++) {
        if (!(promiseArr[index] instanceof Promise)) {
          promiseArr[index] = Promise.resolve(promiseArr[index])
        }
        promiseArr[index]
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }
}

const promise = new MyPromise((resolve, reject) => {
  // 目前这里只处理同步的问题
  resolve('success')
})

function other () {
  return new MyPromise((resolve, reject) =>{
    resolve('other')
  })
}
promise.then(value => {
  console.log(1)
  console.log('resolve', value)
  return other()
}).then(value => {
  console.log(2)
  console.log('resolve', value)
})

// const myPromse = new MyPromise((resolve, reject) => {
//   resolve('succes')
// })

// myPromse.then(res => {
//   console.log('1')
//   console.log('res', res)
// }, err => {
//   console.log('err', err)
// })

// myPromse.then(res => {
//   console.log('2')
//   return new MyPromise((resolve, reject) =>{
//     resolve('res then')
//   })
// }).then(res => {
//   console.log('res', res)
// })

// var a = new Promise(res => {
//   setTimeout(() => {
//     res(11)
//   }, 1000);
// });

// var b = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(22)
//   }, 600);
// });

// var c = new Promise(res => {
//   setTimeout(() => {
//     res(33)
//   }, 500);
// });

// myPromse.all([a, b, c])
//   .then(res => {
//     console.log('--res11', res);
//   })
//   .catch(err => {
//     console.log('--err', err);
//   })

// Promise.race([a, b, c])
// .then(res => {
//   console.log('--re22s', res);
// })
//   .catch(err => {
//     console.log('--er222r', err);
//   })


// const p = new Promise((resolve, reject) => {
//   const num = Math.random()
//   if (num > 1) {2
//     resolve('success num')
//   } else {
//     reject('faild num')
//   }
// })

// p
//   .then((val) => console.log('fulfilled: ', val))
//   .catch((err) => console.log('rejected: ', err))

// // 等同于
// p
//   .then((val) => console.log('fulfilled: ', val))
//   .then(null, (err) => console.log('rejected: ', err))

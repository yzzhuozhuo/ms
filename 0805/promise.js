const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  static resolve = () => {}
  static reject = () => {}
  static all = (promiseArr) => {
    if (!Array.isArray(promiseArr)) return
    let count = 0
    let result = []
    return new Promise((resolve, reject) => {
      promiseArr.forEach((task, index) => {
        if (!(task instanceof Promise)) {
          task = Promise.resolve(task)
        }
        task
          .then(res => {
            result[index] = res
            count++
            if (count >= promiseArr.length) {
              resolve(result)
            }
          })
          .catch(err => reject(err))
      })
    })
  }

  static race = (promiseArr) => {
    if (!Array.isArray(promiseArr)) return
    return new Promise((resolve, reject) => {
      promiseArr.forEach((task, index) => {
        if (!(task instanceof Promise)) {
          task = Promise.resolve(task)
        }
        task
          .then(res => {
            resolve(res)
          })
          .catch(err => reject(err))
      })
    })
  }

  status = PENDING
  value = null
  error = null
  onFulfilledCb = []
  onRejectedCd = []

  constructor(func) {
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulfilledCb.forEach(cb => cb(value))
      }
    }
    const reject = (error) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.error = error
        this.onRejectedCd.forEach(cb => cb(error))
      }
    }
    func(resolve, reject)
  }

  then(onFulfilled, onRejected) {
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
}

MyPromise.prototype.catch = (errCb) => {
  return this.then(null, errCb)
}

MyPromise.prototype.finaly = (callback) => {
  return this.then((value) => {
    return MyPromise.resolve(callback).then(() => value)
  }, (err) => {
    return MyPromise.reject(callback).then(() => {
      throw err
    })
  })
}

const promise1 = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve(111)
  // }, 3000)
  // resolve(111) // 状态改变成 FULFILLED
  reject('err') // 状态改变成 REJECTED
})

const promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(222)
  }, 1000)
  // resolve(111) // 状态改变成 FULFILLED
  // reject('err') // 状态改变成 REJECTED
})

MyPromise.race([promise1, promise2]).then(res => {
  console.log('res', res) // [111, 222]
}).catch(err => {
  console.log('err', err)
})


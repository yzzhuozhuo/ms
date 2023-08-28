const PENDING = 'pending'
const FULFILLED = 'fulfilld'
const REJECTED = 'rejected'

class MyPromise {
  status = PENDING
  value = null
  reason = null

  constructor(func) {
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
      } 
    }
    func(resolve, reject)
  }

  then = (onFulfilled, onRejected) => {
    console.log(222);
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

Promise.resolve((() => {
  console.log(444);
})())

const p = new Promise((resolve, reject) => {
  // resolve(1)
  setTimeout(() => {
    console.log(333);
    resolve(1)
  }, 1000)
})

p.then(res => {
  console.log(222)
}, reason => {
  console.log(reason)
})

console.log(111);
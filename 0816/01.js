// 实现一个CodingMan，可以按照以下方式调用:
// CodingMan('Hank')
// 输出:
// Hi! This is Hank!

// CodingMan('Hank').sleep(10).eat('dinner')

// 输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// CodingMan('Hank').eat('dinner').eat('supper')

// 输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// CodingMan('Hank').sleepFirst(5).eat('supper')

// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推。

class CodingMan {
  constructor(name) {
    this.name = name
    this.queue = []
    this.getName()
  }

  next = () => {
    const fn = this.queue.shift()
    fn && fn()
  }

  getName = () => {
    const fn = () => {
      console.log(`Hi! This is ${this.name}!`)
      this.next()
    }
    this.queue.push(fn)
    return this
  }

  eat = (food) => {
    const fn = () => {
      console.log(`Eat ${food}`)
    }
    this.queue.push(fn)
    this.next()
    return this
  }

  sleep = (time) => {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time} s`);
        this.next()
      }, time * 1000)
    }
    this.queue.push(fn)
    this.next()
    return this
  }

  sleepFirst = (time) => {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time} s`);
        this.next()
      }, time * 1000)
    }
    this.queue.unshift(fn)
    return this
  }
}

const codingMan = new CodingMan('Hank')

codingMan.sleep(2)

// codingMan.eat('food')

// codingMan.sleepFirst(2).eat('supper')




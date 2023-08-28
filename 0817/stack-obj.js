class Stack {
  constructor () {
    this.count = 0
    this.items = {}
  }
  push (element) {
    this.items[this.count] = element
    this.count++
  }
  size () {
    return this.count
  }
  isEmpty () {
    return this.count === 0
  }
  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count--]
    delete this.items[this.count]
    return result
  }
  peek () {
    return this.items[this.count - 1]
  }
  clear () {
    this.count = 0
    this.items = {}
  }
  // 对象需要自己实现 toString 方法的原因是，数组可以[1, 2, 3].toString = 1,2,3
  // obj.tostring() = '[Object Object]'
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let result = this.items['0']
    for(let i = 1; i < this.count; i++) {
      result = `${result},${this.items[i]}`
    }
    return result
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.toString()) // 1,3
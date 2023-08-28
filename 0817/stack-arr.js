class Stack {
  constructor () {
    this.items = []
  }
  push (element) {
    this.items.push(element)
  }
  size () {
    return this.items.length
  }
  isEmpty () {
    return this.items.length === 0
  }
  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.pop()
  }
  peek () {
    return this.items[this.items.length - 1]
  }
  clear () {
    this.items.length = 0
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.size())
console.log(stack.pop())
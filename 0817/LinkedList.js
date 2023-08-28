class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  add (data) {
    const node = new Node(data)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
  }

  insert (data, target) {
    const newNode = new Node(data)
    const targetNode = this.find(target)
    newNode.next = targetNode.next
    targetNode.next = newNode
  }

  find (data) {
    let current = this.head
    while (current.value !== data) {
      current = current.next
    }
    return current
  }

  findPre (data) {
    let current = this.head
    while (!(current === null) && current.next.value !== data) {
      current = current.next
    }
    return current
  }

  remove (data) {
    let preNode = this.findPre(data)
    if (preNode.next !== null) {
      preNode.next = preNode.next.next
    }
  }
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.insert(4, 2)
console.dir(list, { depth: null })

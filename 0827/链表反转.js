/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

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
function Node(value, next) {
  this.value = (value===undefined ? 0 : value)
  this.next = (next===undefined ? null : next)
}
var reverseList = function(head) {
  var preHead = new Node(-1)
  var pre = preHead

  while (head) {
    var next = head.next
    head.next = pre.next
    pre.next = head
    head = next
  }
  
  return preHead.next
};

var reverseList1 = function(head) {
  var pre = null
  var cur = head

  while (cur) {
    var next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
};

var head = new LinkedList();

head.add(1)
head.add(2)
head.add(3)
head.add(4)

var h = reverseList1(head.head)
console.log(JSON.stringify(h));
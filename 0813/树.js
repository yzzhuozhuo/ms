class BinarySearchTree {
  constructor() {
    this.root = null
    this.stack = []
    this.count = 0
    this.result = []
  }

  compare (leftVal, rightVal) {
    if (leftVal === rightVal) return 0
    return leftVal > rightVal ? 1 : -1
  }

  insertNode (node, value) {
    if (this.compare(node.value, value) === 1) {
      if (node.left === null) {
        node.left = new Node(value)
      } else {
        this.insertNode(node.left, value)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value)
      } else {
        this.insertNode(node.right, value)
      }
    }
  }

  insert (value, node = this.root) {
    if (this.root === null) {
      this.root = new Node(value)
    } else {
      if (this.compare(node.value, value) >= 0) {
        if (node.left === null) {
          node.left = new Node(value)
        } else {
          this.insert(value, node.left)
        }
      } else {
        if (node.right === null) {
          node.right = new Node(value)
        } else {
          this.insert(value, node.right)
        }
      }
    }
  }

  insertArr (arr) {
    arr.forEach(value => {
      this.insert(value)
    })
  }

  // 深度遍历 dfs
  // 深度遍历也可称为深度优先遍历（Depth-First Search，DFS），因为它总是优先往深处访问。
  preOrderTraverse (arr = [], node = this.root) {
    if (node !== null) {
      arr.push(node.value)
      this.preOrderTraverse(arr, node.left)
      this.preOrderTraverse(arr, node.right)
    }
    return arr
  }

  // 中序遍历
  midOrderTraverse (arr = [], node = this.root) {
    if (node !== null) {
      this.midOrderTraverse(arr, node.left)
      arr.push(node.value)
      this.midOrderTraverse(arr, node.right)
    }
    return arr
  }

  midOrderTraverseWhile (node = this.root) {
    const stack = []
    while (node !== null || stack.length) {
      while (node !== null) {
        stack.push(node)
        node = node.left
      }
      node = stack.pop()
      console.log(node.value)
      node = node.right
    }
  }

  // 后续遍历
  lastOrderTraverse (arr = [], node = this.root) {
    if (node !== null) {
      this.lastOrderTraverse(arr, node.left)
      this.lastOrderTraverse(arr, node.right)
      arr.push(node.value)
    }
    return arr
  }

  lastOrderTraverseWhile (node = this.root) {
    const stack = []
    while (node.left || node.right) {
      while (node.left) {
        stack.push(node.left)
        node = node.left
      }
      
      while (node.right) {
        stack.push(node.right)
        node = node.right
      }
    }
  }

  findMin (node = this.root) {
    // if (node.left !== null) {
    //   return this.findMin(node.left)
    // } else {
    //   return node.value
    // }
    while (node.left !== null) {
      node = node.left
    }
    return node.value
  }

  findMax (node = this.root) {
    if (node.right !== null) {
      return this.findMax(node.right)
    } else {
      return node.value
    }
  }

  // 广度遍历 bfs
  // 广度优先遍历二叉树(层序遍历)是用队列来实现的，广度遍历是从二叉树的根结点开始，自上而下逐层遍历；在同一层中，按照从左到右的顺序对结点逐一访问。
  bfs (res = []) {
    const stack = this.stack
    !this.count && stack.push(this.root)
    const treeNode = stack[this.count]
    if (treeNode) {
      res.push(treeNode.value)
      if (treeNode.left) stack.push(treeNode.left)
      if (treeNode.right) stack.push(treeNode.right)
      this.count++
      return this.bfs(res)
    } else {
      return res
    }
  }

  bfsWhile () {
    const queue = [this.root]
    let count = 0
    const result = []
    while (count < queue.length) {
      const node = queue[count]
      result.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      count++
    }
    return result
  }

  maxDepth (root = this.root) {
    if(!root) {
      return 0
    } else {
      const left = this.maxDepth(root.left)
      const right = this.maxDepth(root.right)
      return Math.max(left, right) + 1
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}


const tree = new BinarySearchTree()
// tree.insert(10)
// tree.insert(9)
// tree.insert(11)
// tree.insert(8)
// tree.insert(1)
// tree.insert(10)
// tree.insert(12)

tree.insertArr([10, 9, 8, 7])
// const height = tree.maxDepth()
// console.log(height)

// console.log(JSON.stringify(tree, 4))
// const preRes = tree.preOrderTraverse()
// console.log('preRes', preRes) // [10, 9, 8, 1, 10, 11, 12]

// const midRes = tree.midOrderTraverse()
// console.log('midRes', midRes) // [1, 8, 9, 10, 10, 11, 12]

// const lastRes = tree.lastOrderTraverse()
// console.log('lastRes', lastRes) // [1, 8, 10, 9, 12, 11, 10]

// const min = tree.findMin()
// console.log(min)

// const bfsRes = tree.bfsWhile()
// console.log(bfsRes)

tree.midOrderTraverseWhile()
// let arr = []
// console.log(arr instanceof Array)

function myInstanceof (a, b) {
  let left = a.__proto__
  let right = b.prototype
  while (left) {
    if (left === right) {
      return true
    } else {
      left = left.__proto__
      if (left === null) return false
    }
  }
}

let arr = []
console.log(myInstanceof(arr, Number))
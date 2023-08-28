function Person () {
  
}

let p = new Person()

console.log(p instanceof Person)
// A instanceof B，实际上就是判断 A 的原型链上是否有 B 的原型
// A.__proto__ === B.prototype

const myInstanceof = (left, right) => {
  let leftProto = left.__proto__
  let rightPrototype = right.prototype
  while (true) {
    if (leftProto === null) {
      return false
    }
    if (leftProto === rightPrototype) {
      return true
    }
    leftProto = leftProto.__proto__
  }
}
const res = myInstanceof(p, Person)
console.log(res)

// p.__proto__ = Person.prototype
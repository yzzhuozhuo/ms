function myNew (Func, ...res) {
  const obj = new Object()
  obj.__proto__ = Func.prototype
  const result = Func.apply(obj, res)
  return typeof result === 'object' ? result : obj
}

// function Person (name) {
//   this.name = name
//   return {
//     age: 18
//   }
// }

function Person(){
  this.a = 10;
  console.log(this);
}

// Person.prototype.getName = function () {
//   console.log(this.name, 'this.name')
//   return this.name
// }


// const p = myNew(Person, 'yz')
// console.log(p)

// const p = new Person('yz')
// console.log(p)

const p = myNew(Person)
console.log(p)

function Parent(age) {
  this.colors = ['red']
  this.age = age
}

Parent.prototype.getAge = function () {
  console.log('this.age', this.age)
  return this.age
}

function Child (name, age) {
  Parent.call(this, age)
  this.name = name
}

Child.prototype = new Parent()

const child1 = new Child('yz', 18)
console.log(child1) // Parent { colors: [ 'red' ], age: 18, name: 'yz' }

console.log(Child.prototype) // Parent { colors: [ 'red' ], age: undefined }
// child1.colors.push('green')
// console.log(child1.name)
// console.log(child1.age)
// console.log(child1.getAge());

// const child2 = new Child('yz', 18)

// console.log(child2.colors)
/* 
  优点：

    - 构造函数和原型链的结合：组合继承通过在构造函数中继承实例属性，同时在原型链上继承共享的方法和属性，实现了实例属性和共享方法的有效分离。

    - 多实例属性和方法共享：每个实例都有自己的实例属性，同时共享原型链上的方法。这使得多个实例可以共享通用的方法，而不会共享实例属性。

    - 灵活性和效率：组合继承结合了两种继承方式的优点，相对于纯粹的原型链继承和借用构造函数继承，它在性能和灵活性方面都有较好的表现。

缺点：

 - 重复调用构造函数：在子类构造函数内部调用父类构造函数会导致父类构造函数被调用多次，每个子类实例都会调用一次，这可能会影响性能。

 - 原型链上多余属性：由于子类的原型被赋值为父类的实例，子类原型上可能会存在一些不必要的父类实例属性。

*/
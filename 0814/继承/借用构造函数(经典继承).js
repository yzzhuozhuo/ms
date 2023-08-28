// function Parent () {
//   this.names = ['kevin', 'daisy'];
// }

// function Child () {
//   Parent.call(this);
// }

// var child1 = new Child();

// child1.names.push('yayu');

// console.log(child1.names); // ["kevin", "daisy", "yayu"]

// var child2 = new Child();

// console.log(child2.names); // ["kevin", "daisy"]

/* 
  var child1 = new Child('kevin');：这一行代码创建了一个名为 child1 的 Child 构造函数的实例。
  在 Child 构造函数内部，通过 Parent.call(this, name) 调用了 Parent 构造函数，并传入当前的实例（this）以及传入的 name 参数。

  Parent.call(this, name);：这一行代码中的 this 指的是当前正在创建的 Child 构造函数的实例，也就是 child1。通过使用 Parent.call(this, name)，Child 构造函数实际上在 child1 上调用了 Parent 构造函数，将 name 参数赋值给 child1 的 name 属性。

  因此，child1.name 的值被设置为 'kevin'，并且在 console.log(child1.name) 中输出的结果就是 'kevin'。这种方式称为“借用构造函数”或“伪造对象”，它允许子构造函数（Child）在自己的作用域内调用父构造函数（Parent）来初始化子构造函数自己的属性。

*/


function Parent (name) {
  this.name = name;
}

function Child (name) {
  // this 指向 Child 的实例
  // Child 的构造函数，实际上 在 child1 上调用了 Parent 构造函数，并且将 name 传递给 Parent
  Parent.call(this, name);
}

var child1 = new Child('kevin');

console.log(child1.name); // kevin

var child2 = new Child('daisy');

console.log(child2.name); // daisy

/* 
  借用构造函数
  优点
    1. 可以传参数
    2. 避免了引用类型的属性被所有实例共享
  缺点
    1. 方法都在构造函数中定义，每次创建实例都会创建一遍方法。
    因为在 new Child() 的时候，都会调用 Parent.call(this, name)，因此每个实例都有自己的 name 属性，因此避免了引用类型的属性被所有实例共享
    浪费内存
*/
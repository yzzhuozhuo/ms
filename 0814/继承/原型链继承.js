function Parent () {
  this.names = ['yz', 'zz']
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child () {

}
// 将 Chlid 这个构造函数的原型，设置为构造函数 Parent 的实例
// Chlid 构造函数和它的实例，都会继承 Parent 构造函数属性和方法
Child.prototype = new Parent();

var child1 = new Child();

child1.names.push('aa')

var child2 = new Child();

console.log(child2.names) // [ 'yz', 'zz', 'aa' ]

console.log(Child.prototype)
/* 
  原型链继承的问题
  1.引用类型的属性被所有实例共享
  2. 不能够传参
*/

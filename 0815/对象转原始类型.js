/* 
  对象转原始类型
  对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：
  1. 是否已经是原始类型，是则直接返回
  2. 调用valueOf()，如果转换为原始类型，则返回
  3. 调用toString()，如果转换为原始类型，则返回
  4. 也可以重写Symbol.toPrimitive()方法，优先级别最高
    Symbol.toPrimitive 是内置的 symbol 属性，其指定了一种接受首选类型并返回对象原始值的表示的方法。它被所有的强类型转换制算法优先调用。
  5. 如果都没有返回原始类型，会报错
*/

// 4. 也可以重写Symbol.toPrimitive()方法，优先级别最高
var obj = {
  value: 0,
  valueOf () {
    return 1
  },
  toString () {
    return 2
  },
  [Symbol.toPrimitive] () {
    return 3
  }
}

console.log(obj + 1) // 4

// 2. 调用valueOf()，如果转换为原始类型，则返回
var obj1 = {
  value: 0,
  valueOf () {
    return 1
  },
  toString () {
    return 2
  }
}

console.log(obj1 + 1) // 2

// 3. 调用toString()，如果转换为原始类型，则返回
var obj2 = {
  value: 0,
  valueOf () {
    return {}
  },
  toString () {
    return 2
  }
}

console.log(obj2 + 1) // 3


// 5. 如果都没有返回原始类型，会报错
var obj3 = {
  value: 0,
  valueOf () {
    return {}
  },
  toString () {
    return {}
  }
}
// console.log(obj3 + 1)


// 问：如何使if(a==1&&a==2&&a==3) {console.log('true')};正确打印'true'

var a = {
  value: 1,
  // valueOf () {
  //   return this.value++
  // }
  toString () {
    return this.value++
  }
}

if(a==1 && a==2 && a==3) {
  console.log('true')
}
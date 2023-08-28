/* 
  浅拷贝：浅拷贝仅复制对象本身以及对象中的基本类型成员，对于对象中的引用类型成员，只复制该引用的指针（指向原对象的引用类型成员），
  而不是开辟新的内存空间来存储这些引用类型成员的副本。
  因此，在浅拷贝的情况下，原对象和复制后的对象共享相同的引用类型成员，修改其中一个会影响到另一个
*/
const shallowClone = (obj) => {
  const newObj = {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

const obj = {
  a: 1,
  b: 2,
  c: [1, 2, 3]
}

// const obj1 = shallowClone(obj)
// obj1.a = 2
// obj1.c[0] = 2
// console.log('obj', obj)
// console.log('obj1', obj1)
// console.log(obj.c === obj1.c)

/* 
  深拷贝：是指在复制一个对象时，不仅复制对象本身，还要递归地复制对象中包含的所有引用类型的成员。
  实现深拷贝的结果是得到一个与原对象相同的新对象，其中所有的成员都有自己的独立内存空间，不会受到原对象修改的影响。
 */
const deepClone = (obj) => {
  if (typeof obj !== 'object') return obj
  const targetObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      targetObj[key] = deepClone(obj[key])
    }
  }
  return targetObj
}

const obj2 = {
  a: 1,
  c: [1, 2, 3]
}

const obj3 = deepClone(obj2)
console.log('obj3', obj3)
console.log(obj2.c === obj3.c)
// obj3.a = 11
// obj3.c[0] = 11
// console.log('obj2', obj2)
// console.log('obj3', obj3)
// console.log(obj2.c === obj3.c)

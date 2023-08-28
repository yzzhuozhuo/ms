const shallowClone = (object) => {
  const result = {}
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      result[key] = object[key]
    }
  }
  return result
}


const o = {
  a: 1,
  b: [1, 2, 3],
}
o.o = o // RangeError: Maximum call stack size exceeded

// const o1 = shallowClone(o)
// o1.b[1] = 66
// console.log(o) // 此时 o 的 b = [1, 66, 3]
// https://segmentfault.com/a/1190000020255831

const deepClone = (target, map = new WeakMap()) => {
  // 处理非对象的类型
  if (typeof target !== 'object' || typeof target === null) return target
  // 函数 正则 日期 ES6新对象，执行构造器，返回新的对象
  const constructor = target.constructor;
  // 使用了原对象的构造方法，所以它可以保留对象原型上的数据
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target)
  // 处理循环引用的问题
  if (map.get(target)) return map.get(target)
  map.set(target, true)
  const result = target instanceof Array ? [] : {}
  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      result[key] = typeof target[key] === 'object' ? deepClone(target[key], map) : target[key]
    }
  }
  return result
}

const o1 = deepClone(o)
console.log(o1) // 此时 o 的 b = [1, 2, 3]
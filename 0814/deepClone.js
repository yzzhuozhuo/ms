// const deepClone = (obj, map = new WeakMap()) => {
//   if (typeof obj !== 'object') return obj
//   const newObj = Array.isArray(obj) ? [] : {}
//   if (map.get(obj)) {
//     return map.get(obj)
//   }
//   map.set(obj, true)
//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       if (typeof obj[key] === 'object') {
//         newObj[key] = deepClone(obj[key], map)
//       } else {
//         newObj[key] = obj[key]
//       }
//     }
//   }
//   return newObj
// }

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

// const obj = {
//   a: 1,
//   b: [1, 2, 3],
//   c: new Date(),
//   d: new RegExp()
// }
// // obj.obj = obj

// const obj1 = deepClone(obj)
// console.log('obj1', obj1)


// console.log('obj', obj)

// 函数（Function）：函数不仅仅是一组属性，还包括函数体和闭包。
// 通过单独处理函数并使用构造函数来创建新函数，可以确保新函数具有相同的代码和闭包环境。这对于深拷贝函数是非常重要的。

// 示例：
// const originalFunction = function() { return 42; };
// const clonedFunction = deepClone(originalFunction);
// console.log(clonedFunction()); // Output: 42


// 正则表达式（RegExp）：正则表达式不仅包含正则模式，还包括标志。
// 通过使用正则表达式的构造函数来创建新的正则对象，可以保留原正则对象的模式和标志。

// 示例：
const originalRegExp = /abc/gi;
const clonedRegExp = deepClone(originalRegExp);
console.log(clonedRegExp.test("ABC")); // Output: true
console.log(clonedRegExp instanceof RegExp); // Output: true

// 日期（Date）：日期对象包含时间信息。通过使用日期的构造函数来创建新的日期对象，可以复制原日期对象的时间信息。
// const originalDate = new Date();
// const clonedDate = deepClone(originalDate);
// console.log(clonedDate instanceof Date); // Output: true

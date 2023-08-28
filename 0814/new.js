const myNew = (Fun, ...args) => {
  const obj = new Object()
  obj.__proto__ = Fun.prototype
  const result = Fun.apply(obj, args)
  return result === 'obj' ? result : obj
}
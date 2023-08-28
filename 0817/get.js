// 3. 实现一个 get(object, path, defaultVal) 方法，
// 接收 3 个参数，object: 对象，path: 输入的路径，defaultVal: 默认值，返回正确的取值

var object = {
  'a': [{
    'b': {
      'c': 3
    }
  }]
};
function get (object, path, defaultVal = '') {
  return object.a[0].b.c
}

const res = get(object, 'a[0].b.c'); // => 3
console.log(res)

// get(object, ['a', '0', 'b', 'c']); // => 3
// get(object, 'a.b.c', 'default'); // => 'default'
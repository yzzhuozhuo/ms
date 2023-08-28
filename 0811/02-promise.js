// 题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promse 实现）


function red(){
  console.log('red');
}
function green(){
  console.log('green');
}
function yellow(){
  console.log('yellow');
}


function light (cb, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb()
      resolve()
    }, time)
  })
}

function step () {
  Promise.resolve()
    .then(() => {
      return light(red, 3000)
    })
    .then(() => {
      return light(green, 1000)
    })
    .then(() => {
      return light(yellow, 2000)
    })
    .then(() => {
      step()
    })
}

step()
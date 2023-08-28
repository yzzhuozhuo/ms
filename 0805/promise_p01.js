// var promise = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
//   console.log(2)
// })
// promise.then(()=>{
//   console.log(3)
// })
// console.log(4)

// var promise = new Promise((resolve, reject) => {
//   console.log(1)
// })
// promise.then(()=>{
//   console.log(2)
// })
// console.log(3)

// var promise = new Promise((resolve, reject) => {
//   console.log(1)
// })
// promise.then(console.log(2))
// console.log(3)

// Promise.resolve(1)
//   .then(() => 2)
//   .then(Promise.resolve(3))
//   .then(console.log)

// var promise = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
//   reject()
// })
// promise.then(()=>{
//   console.log(2)
// }).catch(()=>{
//   console.log(3)
// })
// console.log(4)

// Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });

// setTimeout(() => {
//   console.log(1)
// })
// Promise.resolve().then(() => {
//   console.log(2)
// })

// var promise = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
//   setTimeout(() => {
//     console.log(2)
//   }, 1000)
// })

// promise.then(() => {
//   console.log(3)
// })
// promise.then(() => {
//   console.log(4)
// })
// console.log(5)

// var date = new Date() 

// console.log(1, new Date() - date) 

// setTimeout(() => {
//     console.log(2, new Date() - date)
// }, 500) 

// // Promise.resolve().then(() => {
// //   console.log(3, new Date() - date)
// // }) 

// Promise.resolve().then(console.log(3, new Date() - date)) 

// while(new Date() - date < 10) {
//   console.log(111);
// } 

// console.log(4, new Date() - date)

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3)
    let p = new Promise((resolve, reject) => {
      console.log(7)
      setTimeout(() => {
        console.log(5)
        resolve(6)
      }, 0)
      resolve(1)
    })
    resolve(2)
    p.then((arg) => {
      console.log(arg)
      return 888
    })
    .then(res => console.log('---', res))
  })

first().then((arg) => {
  console.log(arg)
})
console.log(4)

// 3 7 4 1 2 5

const promiseAll = (arrList) => {
  const result = []
  const promiseList = arrList.map(item => {
    if (!(item instanceof Promise)) {
      item = Promise.resolve(item)
    }
    return item
  })
  return new Promise((resolve, reject) => {
    let count = 0
    promiseList.forEach((item, index) => {
      item
        .then((res) => {
          result[index] = res
          count++
          if (count >= promiseList.length) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('1111');
    resolve(1111)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2222');
    resolve(2222)
  }, 2000)
})

promiseAll([p1, p2]).then((res) => {
  console.log(res)
})
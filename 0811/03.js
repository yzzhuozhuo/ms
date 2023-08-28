// const str = 'www.baidu.com'
// const res = 'com.baidu.abc.www'

function reverse1 (str) {
  let left = ''
  let mid = ''
  let right = ''
  let rigjtIndex = ''
  let isFirstLeft = false
  let isFirstRight = false
  for (let i = 0, j = str.length - 1; i < str.length, j >= 0; i++, j--) {
    if (str[i] !== '.' && !isFirstLeft && !isFirstRight) {
      left += str[i]
    } else {
      isFirstLeft = true
      if (i <= rigjtIndex) {
        mid += str[i]
      } else if (i > rigjtIndex && str[i] !== '.') {
        right += str[i]
      }
    }
    if (str[j] === '.') {
      !isFirstRight && (rigjtIndex = j)
      isFirstRight = true
    }
  }
  right = right + '.'
  return right + mid + left
}

function reverse2 (str) {
  let count = 0 // 3
  let left = ''
  let mid = ''
  let right = ''
  let num = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      count++
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      num++
    }

    if (num === 0) {
      left += str[i]
    } else if (num > 0 && num < count) {
      mid += str[i]
    } else if (num === count && str[i] !== '.') {
      right += str[i]
    }
  }
  return right + mid + '.' + left
}

// const str = 'wwwwwww.baidu.abc.com'

// function reverse (str = '') {
//   let 
//     i = 0, 
//     j = str.length - 1, 
//     left = '', 
//     right = '', 
//     isFirstPoint = true;
  
//   while (i <= j) {
//     if (str[j] !== '.') {
//       right = str[j--] + right
//     } else {
//       if (str[i] !== '.' && isFirstPoint) {
//         left += str[i]
//       } else {
//         isFirstPoint = false;
//         right = right + str[i]
//       }
//       i++
//     }
//   }

//   return right + left
// }
const str = 'www.baidu.abc.commmmmmm'

function reverse (str = '') {
  let left = ''
  let right = ''
  let mid = ''
  let i = 0
  let j = str.length - 1
  while (str[i] !== '.' || str[j] !== '.') {
    if (str[i] !== '.') {
      left += str[i]
      i++
      lIndex = i
    } 
    if (str[j] !== '.') {
      right = str[j] + right
      j--
      rIndex = j
    }
  }
  console.log(left, right);
  
  // for (let i = 0, j = str.length - 1; str[i] !== '.' || str[j] !== '.'; true) {
  // if (str[i] !== '.') {
  //     left += str[i]
  //     i++
  //     lIndex = i
  //   } 
  //   if (str[j] !== '.') {
  //     right = str[j] + right
  //     j--
  //     rIndex = j
  //   }
  // }
  for (let i = lIndex; i <= rIndex; i++) {
    mid += str[i]
  }
  return right + mid + left
}

const result = reverse(str)
console.log(result)
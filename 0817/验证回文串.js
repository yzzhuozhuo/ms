/* 
  输入: s = "A man, a plan, a canal: Panama"
  输出：true
  解释："amanaplanacanalpanama" 是回文串。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
// let s = "race a car"
// let s = "aa"
let s = 'abb'
// let s = 'aba'
// raceacar
// function isPalindrome (s) {
//   const reg = new RegExp(/[,. :]/g)
//   s = s.replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '').toLocaleLowerCase()
//   return s.split('').reverse().join('') == s
// }

function isPalindrome (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '').toLocaleLowerCase()
  if (s.length <= 1) return true
  let i = 0
  let j = s.length - 1
  let res = false
  while (i < s.length - 1) {
    if (s[i] === s[j]) {
      i <= j && (res = true)
    } else {
      res = false
      break
    }
    i++
    j--
  }
  return res
}

const res = isPalindrome(s)
console.log(res)
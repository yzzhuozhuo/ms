/* 
  输入: s = "A man, a plan, a canal: Panama"
  输出：true
  解释："amanaplanacanalpanama" 是回文串。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
let s = "A man, a plan, a canal: Panama"
// function isPalindrome (s) {
//   const reg = new RegExp(/[,. :]/g)
//   s = s.toLocaleLowerCase().replace(reg, '')
//   return s.split('').reverse().join('') == s
// }

function isPalindrome (s) {
  const reg = new RegExp(/[,. :]/g)
  s = s.toLocaleLowerCase().replace(reg, '')
  let i = 0
  let j = s.length - 1
  while (i < s.length) {
    i++
    j--
    if (s[i] !== s[j]) {
      return false      
    } else {
      return true
    }
  }
}

const res = isPalindrome(s)
console.log(res)
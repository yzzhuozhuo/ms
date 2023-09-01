/* 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 
*/

// var longestCommonPrefix = function(strs) {
//   if (strs.length <= 1) return strs[0] || ''
//   let str = strs[0]
//   let i = 0
//   let j = 0
//   while(i < strs.length) {
//     while(j < str.length) {
//       if (str[j] !== strs[i + 1][j]) {
//         str = str.slice(0, j)
//       }
//       j++
//     }
//     i++
//   }
//   return str
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let res = strs[0]
  for (let str of strs) {
    for (let i = 0; i < res.length; i++) {
      if (str[i] !== res[i]) {
        res = res.slice(0, i)
      }
    }
  }
  return res
};

// var strs = ["flower", "flow"]
// var strs = ["aa", "aaa", "aa"]
// var strs = ["", ""]
// var strs = ["aa"]
// var strs = ["dog", "racecar", "car"]
// var strs = ["flower", "flower", "flower"]
// var strs = ["flower", "flow", "flight"]

let res = longestCommonPrefix(strs)

console.log(res)
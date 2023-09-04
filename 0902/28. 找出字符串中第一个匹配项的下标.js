/* 
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

 

示例 1：

输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
示例 2：

输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack.indexOf(needle) < 0) return -1
  let i = 0
  let hasLen = haystack.length
  let needLen = needle.length
  let index = 0
  while(i < hasLen) {
    if (haystack.substring(i, needLen) !== needle) {
      needLen++
    } else {
      index = i
      break
    }
    i++
  }
  return index
};

var haystack = "butsadsad"
var needle = "sad"

var res = strStr(haystack, needle)
console.log(res)
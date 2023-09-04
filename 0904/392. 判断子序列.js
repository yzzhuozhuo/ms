/* 
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

进阶：

如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

致谢：

特别感谢 @pbrother 添加此问题并且创建所有测试用例。

示例 1：

输入：s = "abc", t = "ahbgdc"
输出：true
示例 2：

输入：s = "axc", t = "ahbgdc"
输出：false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 存在 bug
// var isSubsequence = function(s, t) {
//   let sLen = s.length
//   let tLen = t.length
//   if (sLen > tLen) return false
//   if (!sLen) return true
//   let res = false
//   let i = 0
//   let index = 0
//   while(i < sLen) {
//     if (t.indexOf(s[i]) < 0) {
//       res = false
//       break
//     }
//     let j = 0
//     while(j < tLen) {
//       if (s[i] === t[j]) {
//         if (j <= index || j < sLen) {
//           res = false
//         } else {
//           res = true
//         }
//         index = j
//       }
//       j++
//     }
//     i++
//   }
//   return res
// };

var isSubsequence = function(s, t) {
  let sLen = s.length
  let tLen = t.length
  if (!sLen) return true
  let subIndex = 0
  let index = 0
  while(index < tLen) {
    if (s[subIndex] === t[index]) {
      subIndex++
      if (subIndex > sLen - 1) {
        return true
      }
    }
    index++
  }
  return false
}

// var s = "abc", t = "ahbgdc"
var s = "acb", t = "ahbgdc"
// var s = "bb", t="abc"
// var s = 'ab', t = 'bab'
// var s = "axc", t = "ahbgdc"
// var s = "abc", t = "ahgdcb"
// var s = "aaaaa", t = "bbaaaaaa"
// 
// var s = "rjufvjafbxnbgriwgokdgqdqewn", t = "mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq"

var res = isSubsequence(s, t)
console.log(res)
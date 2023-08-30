/* 
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：

输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
 

提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort()
  let startIndex = 0
  let endIndex = 1
  let maxCount = 0
  let maxNum = null
  while(startIndex < nums.length) {
    if (nums[startIndex] !== nums[endIndex]) {
      let diffCount = endIndex - startIndex
      if (diffCount > maxCount) {
        maxCount = diffCount
        maxNum = nums[startIndex]
      }
      startIndex = endIndex
    }
    endIndex++
  }
  return maxNum
};

var nums = [2, 2, 1, 1, 1, 2, 2]

// [1, 1, 1, 2, 2, 2, 2]

var res = majorityElement(nums)

console.log(res)
/* 示例 1：

输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  let j = 1
  while (i < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(i, 1)
      i--
      j--
    } 
    i++
    j++
  }
  return nums.length
};

var removeDuplicates1 = function (nums) {
  let i = 1
  let j = 1
  while(i < nums.length) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i]
      ++j
    }
    ++i
  }
  return j
};


var nums = [1, 1, 1, 2, 3, 3, 4, 4, 5, 5]

var res = removeDuplicates1(nums)
console.log(res)
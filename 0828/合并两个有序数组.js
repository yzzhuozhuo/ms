/* 示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
示例 3：

输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。 */

/* 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  return nums1.sort((a, b) => a - b)
};

var merge1 = function (nums1, m, nums2, n) {
  let tempArr = []
  let i = 0
  let j = 0
  let n1 = nums1[i]
  let n2 = nums2[j]
  while (n1 || n2) {
    if (!n1) {
      j < n && tempArr.push(n2)
      n2 = nums2[++j]
      continue
    }
    if (!n2) {
      i < m && tempArr.push(n1)
      n1 = nums1[++i]
      continue
    }
    if (n1 < n2) {
      i < m && tempArr.push(n1)
      n1 = nums1[++i]
    } else {
      j < n && tempArr.push(n2)
      n2 = nums2[++j]
    }
  }
  nums1 = tempArr
  return nums1
};

var merge2 = function (nums1, m, nums2, n) {
  let tempArr = Array(m + n).fill(0)
  let i = 0
  let j = 0
  let cur = null
  while (i < m || j < n) {
    if (i === m) {
      cur = nums2[j++]
    } else if (j === n) {
      cur = nums1[i++]
    } else if (nums1[i] < nums2[j]) {
      cur = nums1[i++]
    } else {
      cur = nums2[j++]
    }
    tempArr[i + j - 1] = cur
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = tempArr[i]
  }
  return nums1
};

var nums1 = [1, 2, 3, 0, 0, 0]
var nums2 = [2, 5, 6]
var m = 3
var n = 3

var res = merge2(nums1, m, nums2, n)
console.log(res);

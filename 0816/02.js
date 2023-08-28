// 第二题：
// 给定一个无序整形数组，请设计一个算法找出其中连续出现的数字区间。

var list = [7, 2, 11, 2, 0, 1, 2, 4, 5, 10, 13, 14, 15]
// 输出 // ["0->2", "4->5", "7", "10->11", "13->15"]

function summaryRanges(list) {
   const arr = [...new Set(list.sort((a, b) => a - b))]
   let point = []
   let i = 0
   let j = 1
   while (i < arr.length) {
    if (arr[i] + 1 !== arr[j]) {
      point.push(i++)
    }
    j++
    i++
   }

   let ii = 0
   let start = 0
   let end = point[ii]
   let res = []

   while (ii <= point.length) {
    if (start !== end) {
      const tempArr = arr.slice(start, end)
      const left = tempArr[0]
      const right = tempArr[tempArr.length - 1]
      if (left === right) {
        res.push(left)
      } else {
        res.push(`${left}->${right}`)
      }
    }
    start = end
    end = point[ii]
    ii++
   }
   return res
}
var result = summaryRanges(list);
console.log(result) // ["0->2", "4->5", "7", "10->11", "13->15"]

const arr = [22, 1, 23, 4, 5, 7, 8, 40]

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}


const res = quickSort(arr)
console.log(res)

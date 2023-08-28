"use strict";

// var x = 5
// var addX = function(value) {
//   return value + 5
// }
// module.exports.x = x
// module.exports.addX = addX
var count = 1;

function addCount() {
  count++;
}

function getCount() {
  return count;
}

module.exports = {
  count: count,
  addCount: addCount,
  getCount: getCount
};
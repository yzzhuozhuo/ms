/*d.js*/
// var message=require('./c.js').message;
// exports.count=5;
// setTimeout(function(){
//     console.log(message);
// },0)

var obj=require('./c.js');
exports.count=5;
setTimeout(function(){
    console.log(obj.message);
}, 0)
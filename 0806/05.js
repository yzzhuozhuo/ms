// 和foo函数里的getName一样, 将创建到全局window上
function getName () { console.log(5);}

console.log(getName);

getName = function () { console.log(4);}; 

console.log(getName);



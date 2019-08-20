// global
// gc goba collection
global.gc();
var memo = process.memoryUsage();
console.log(memo);

let map = new Map();
let array = new Array(1000000);  // 复制变量 + 1
map.set(array, '123') // + 1
global.gc();
console.log(process.memoryUsage());

map = null;
array = null;
global.gc();
console.log(process.memoryUsage());
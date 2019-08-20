global.gc()
var memo = process.memoryUsage()
console.log(memo)

let map = new WeakMap()
let array = Array(1000000)
map.set(array, '123') // 不计入垃圾回收机制
global.gc()
console.log(process.memoryUsage());

array = null;
global.gc();
console.log(process.memoryUsage());
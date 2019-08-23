function log(target, name, descriptor) {
  // console.log(target, name, descriptor);
  const originalMethod = descriptor.value
  descriptor.value = function (...args) {
    console.log('add 111');
    return originalMethod(...args)
  }
}
// 1. function Operation() {}
// 2. Operation.prototype = {}
// 3. defineProperty(Operation.prototype, add, {})
class Operation {
  @log
  add (a, b) {
    // console.log('add 被调用');
    return a + b
  }
}
const opt = new Operation()
console.log('opt', opt.add(1, 2));

// let obj = {}
// Object.defineProperty(obj, 'add', {
//   value: function (a, b) {
//     return a + b
//   }
// })
// console.log(obj.add(3, 4));

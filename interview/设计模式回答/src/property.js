// const _ = require('lodash')
// import { debounce } from 'lodash'
function debounce(fn, wait) {
  let timeout, result
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      result = fn()
    }, wait);
    return result
  }
}
function decDebounce(wait) {
  return function (target, name, descriptor) {
    // console.log(target, name, descriptor);
    const originalMethod = descriptor.initializer && descriptor.initializer.call(this)
    return {
      enumerable: true,
      configurable: true,
      // writable: true,
      get: function () {
        // 劫持了 get 
        // return _.debounce(originalMethod, wait)
        return debounce(originalMethod, wait)
      }
    }
  }
}

class Btn {
  @decDebounce(2000)
  handBuy = () => {
    console.log('像后端发送购买请求');
  }
  bindEvent() {
    document.getElementById('btn')
    document.addEventListener('click', this.handBuy)
  }
}
let b = new Btn()
b.bindEvent()
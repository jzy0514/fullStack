// function name(target) {
//   // 原来的东西获取到
//   console.log(target);
//   target.a = 'lilei'
// }
function name(pName) {
  return function (target) {
    target.abcname = pName
  }
}

@name('lilei')  //这是一个方法 function name() {}
class Man {

}

@name('lihuahua')
class Woman{

}
console.log(Man.abcname);
console.log(Woman.abcname);

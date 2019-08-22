"use strict";

var _dec, _class, _dec2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function name(target) {
//   // 原来的东西获取到
//   console.log(target);
//   target.a = 'lilei'
// }
function name(pName) {
  return function (target) {
    target.abcname = pName;
  };
}

var //这是一个方法 function name() {}
Man = (_dec = name('lilei'), _dec(_class = function Man() {
  _classCallCheck(this, Man);
}) || _class);
var Woman = (_dec2 = name('lihuahua'), _dec2(_class2 = function Woman() {
  _classCallCheck(this, Woman);
}) || _class2);
console.log(Man.abcname);
console.log(Woman.abcname);
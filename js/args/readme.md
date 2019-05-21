函数参数再怎么变化
es5 -> es6 params 再怎么变， 为什么变
function abc(a, b, c) {

}

- 参数一个个列出来的原始方案适用于 简单功能
- 如果参数多的话， 同时又是一个对象的话， 请{}
  表单操作时， username，password， sex ....
  let user = {name:'熊云松', sex:'男', height:178, birthday:'7.13', color:'黄', likes:'你懂得', follow:['周杰伦'], age:18}
  information(user);
  变得让代码好读一点

- reset destructor ...
  用于增强代码的可读性及例利性
  写的代码， 别看的时候看不懂
  写代码的时候要考虑别人看代码的感受
  提供初始值， 让代码更加适用。

- 参数考题请想起默认参数 + 参数 是 可以是函数 
  用来做参数缺失报错， 是最好的方式
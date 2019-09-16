## 改变函数内部this指针的指向函数（bind，apply，call的区别）
- 通过apply和call改变函数的this指向，他们两个函数的第一个参数都是一样的表示要改变指向的那个对象，第二个参数，apply是数组，而call则是arg1,arg2...这种形式。
- 通过bind改变this作用域会返回一个新的函数，这个函数不会马上执行。

## bind 
原理：通过apply或者call方法来实现。
1. 
  Function.prototype.bind=function(obj,arg){
  var arg=Array.prototype.slice.call(arguments,1);
  var context=this;
  return function(newArg){
    arg=arg.concat(Array.prototype.slice.call(newArg));
    return context.apply(obj,arg);
  }
}
2. 考虑到原型链
为什么要考虑？因为在new 一个bind过生成的新函数的时候，必须的条件是要继承原函数的原型
  Function.prototype.bind=function(obj,arg){
    var arg=Array.prototype.slice.call(arguments,1);
    var context=this;
    var bound=function(newArg){
      arg=arg.concat(Array.prototype.slice.call(newArg));
      return context.apply(obj,arg);
    }
    var F=function(){}
    //这里需要一个寄生组合继承
    F.prototype=context.prototype;
    bound.prototype=new F();
    return bound;
  }
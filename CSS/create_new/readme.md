new 的时候发什么了什么？

    构造函数的运行方式是以new的方式被运行，
    内部的this 动态指向实例化的this。
    开始的时候这个this是个空对象
    通过构造函数的运行后拿到了构造函数里的属性
    最后又拿到了protypr上定义的属性和方法

    对象是由属性和方法构成

1.  实例化一个新的对象，并且是这外类的实例
2.  构造函数被执行， this指向实例
    constructor 运行慢半拍
    在面向对象里是构造函数为他人服务的， 为this服务
    this由函数的运行方式决定
    this -> 实例 new
    this -> 任何对象 call
3.  Otaku.prototype    值是对象
原型对象
任何一个函数都拥有prototype属性 才能构键类
火车   constructor 车头，
车头上勾着车身
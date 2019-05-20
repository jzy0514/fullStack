person 由prototype属性来解决它自身构造之外的原型或方法
原型对象会有它的构造函数 Person.prototype.constructor属性
谁是第三者？   实例
实例 跟person 有什么关系呢， person.prototype 有关系

js 实例跟类其实不是javs等语言的血缘关系
zl 实例 是在呢么来的？-- new Pweson()出来的
1. person 函数运行 new 的方式 ，this=> new Object();
2. zl 怎么拿到 person。prototype原型对象上定义方法 __proto__ 属性
3. 方法有prototype属性， 值为对象 开支 
4. 任何对象一定有 __proto__ 属性 指向它的原型对象
5. 原型对象上由 constrctor 属性指向谁是它的构造函数

原型链  
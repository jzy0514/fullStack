## 设计模式
- 发布订阅模式:  js事件绑定 
  addEventListen
  Event-bus

  // 订阅
  event.on('click');
  event.on('receiveData');
  // 发布
  event.emit('click')

- 单例模式
  只存在一个实例
  应用场景: 弹窗

- 装饰者模式
  1. 动态增加功能, 无侵入的(不破坏原来的代码)
  2. 优点, 没有装饰可以用, 有了装饰会更好用
  
实现的流程: 
1. 目的: 功能的增强
2. 把原来的方法取到,
3. 定义一个新的方法, 新的方法包含原来的方法, 不改变原来的代码

ES7
decorator @
装饰:
1. 类
2. 方法
3. 属性


## babel
负责编译
怎么编译全靠babel的插件
const -> var
promise -> 回调
Array.isArray -> ...
想把es6 -> es5

presets: 一堆插件的集合
preset-env 功能就是es6 -> es5, 集合了很多的插件
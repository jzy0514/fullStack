## for of
用于遍历 可迭代对象
比如 array map string set
可迭代对象有两个要求:
1. 存在Symbol.iterator属性
2. Symbol.iterator 是一个方法 返回一个 next 属性

可以自定义 for.....of行为
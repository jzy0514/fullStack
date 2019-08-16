## DOM(document object model)
将一个文档建模 为 一个对象, 通常时一棵树
我们可以用js操作树上的每一个节点, 关联事件

- ATTR
  <p style="" class=""> text </p>
  getAttribute
  setAttribute

- Document
  树的入口
  documeng.documentElement 获取整个 html 节点
  document.forms 不止这一种

- Event  
  事件流
  事件模型
  捕获 冒泡

- Element
  .clientHeight
  .clientWidth
  .clientTop
  .clientLeft
  .scrollHeight  滚动的高度
  .getBoundingClientRect() 返回元素大小, 及其相对于视窗的位置

- Node
  nodeType
  同级节点: 
    nextSibing
  子节点:
    childNodes 所有的节点
    elementNodes  只获取元素节点
  remove
  append
  clone

- MuationObserver
监测 DOM 树的改变
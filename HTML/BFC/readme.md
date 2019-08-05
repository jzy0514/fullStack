# BFC 是一个什么概念    https://www.cnblogs.com/libin-1/p/7098468.html    https://juejin.im/post/59b73d5bf265da064618731d（掘金）
Block Formatting Context （块级格式化上下文）
BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

# BFC 的原理 （渲染规则）
1. 正常的文档流会存在边距折叠的问题（父子元素，兄弟元素） ， 水平方向的外边距不存在折叠（因为水平方向不存在会计元素所以不会叠加）
2. BFC容器不会与浮动元素的box重叠
3. BFC在页面上是一个独立的容器，最显著的效果是建立一个隔离的空间，外面的元素和里面的元素互不影响
4. 计算BFC容器高度时， 浮动元素也会参与高度计算（也是通常清除浮动的原理）

# 创建BFC的条件
1. float的值不是none。
2. position的值不是static或者relative。
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4. overflow的值不是visible
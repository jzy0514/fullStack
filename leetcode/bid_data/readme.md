<<<<<<< HEAD
有一条数据， 要插入到页面中， 怎么做？
DOM  注意什么？

- 内存开销最大的在动态DOM 
  DOM开销是最耗内存的
  createElement
  ？可以优化一下
  cloneNode 节点克隆
- innerHTML
  10000条DOM显示是负担
  延迟加载 图片，
  分屏加载 html
  绘制html 重绘和重排 导致网页卡顿的原因

- 不能一下搞定 分屏加载
  10000  
  - 数据分页 page 上一页的数据 当前页的数据 下一页的数据
    前端自主分页
  - 防抖 + onscroll
    跟onReachBottom 一样
=======
有一条数据， 要插入到页面中， 怎么做？
DOM  注意什么？

- 内存开销最大的在动态DOM 
  DOM开销是最耗内存的
  createElement
  ？可以优化一下
  cloneNode 节点克隆
- innerHTML
  10000条DOM显示是负担
  延迟加载 图片，
  分屏加载 html
  绘制html 重绘和重排 导致网页卡顿的原因

- 不能一下搞定 分屏加载
  10000  
  - 数据分页 page 上一页的数据 当前页的数据 下一页的数据
    前端自主分页
  - 防抖 + onscroll
    跟onReachBottom 一样
>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
    当前的数据， 超出了视窗(viewport)000
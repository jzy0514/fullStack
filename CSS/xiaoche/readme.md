## 界面大框架及经验

水平方向禁止滚动条,   垂直方向出现滚动条
- 水平和垂直两个方向都滚动，  页面会摇晃且不美观，容易产生误操作
- 垂直方向一直滚动是开发的主要方式
  

- magrin: 0 auto;  max-width: 960px 


- flex 弹性布局
  flex-grow  放大比例
  flex-basis  
  flex-shrink  缩小比例
  flex-wrap
  当网页有PC到mobile时， 缩小阵仗

经验  简单的适配PC-> mobile 照顾所有的用户
PC ： max-width magin: auto
padding margin   
mobile : flex-shrink 让关键得我部分变大
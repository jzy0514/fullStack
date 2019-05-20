<<<<<<< HEAD
小程序 canvas 找cax

引入 cax组件
new cax.Stage()
cax.Rect
add
uodate

- countdown 组件
  文案， 获取验证码？
  开始计时 start    false|true
  Page 为组件的调用者 properties
  组件引入组件  data(内部) + properties(外界传入)
  <countdown start="{{start}}/>

- properties 有个observer选项  
  当外界传的值改变时， 会执行 
  组件是为页面的， 是为页面打工的


- staet 由外传到内properties
  有利于页面操作关键状态
  由外到内通过properties，
=======
小程序 canvas 找cax

引入 cax组件
new cax.Stage()
cax.Rect
add
uodate

- countdown 组件
  文案， 获取验证码？
  开始计时 start    false|true
  Page 为组件的调用者 properties
  组件引入组件  data(内部) + properties(外界传入)
  <countdown start="{{start}}/>

- properties 有个observer选项  
  当外界传的值改变时， 会执行 
  组件是为页面的， 是为页面打工的


- staet 由外传到内properties
  有利于页面操作关键状态
  由外到内通过properties，
>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
  内部组件通知页面？  可以做
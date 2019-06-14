HTTP协议  req  response
状态码：  HTTP响应（response）中包含状态码
浏览器 代理 proxy
1xx  信息，服务器收到请求，需要请求者继续执行操作
2xx  成功，操作被成功接收并处理 200 ok
3xx  重定向，需要进一步的操作以完成请求  location 
4xx  客户端错误，请求包含语法错误或无法完成请求（地址错了） 未授权限 受限资源 404 not found
5xx  服务器错误，服务器在处理请求的过程中发生了错误
<!-- https://www.runoob.com/http/http-status-codes.html -->

301 永久跳转,
用户  www.xiaomi.com  www.mi.com
告诉蜘蛛  
www.xiaomi.com/a.html 红米手机
废弃了， 301  www.mi.com/a.html
3xx 区别， 永久跳转， 告诉蜘蛛把记录更新掉
301 可以改变状态码 不变 来展示理解
301 永久跳转
再次访问  浏览器有缓存， 不需要再走浏览器,
302 临时跳转， 不会告诉蜘蛛 或者在前端缓存

## script
  - 下载 执行
  - async
    1. html parse/下载 并行
    2. 下载完就执行 顺序无法控制
  - defer 
    1. html parse/下载 并行
    2. 整个文档加载完成之后 按照 script 在文档中出现的顺序执行
  - 没有属性
    1. html parse 和 js 西在 执行 都是互斥的

## crossorigin
用于 可以引用跨域资源的标签: img link script
crossorigin 代表要协商跨域
后段没设置 Access-control-* 就会出错
如果为设置 cros, 跨域发生的错误, 将会向window.onerror 提供少量的信息,   通过crossorigin的属性可以得到详细的信息
  - anonymous
    会在请求头中加一个 origin 属性, 
  - use-credentials
    请求的时候带上 cookie 等 用户验证的信息

    
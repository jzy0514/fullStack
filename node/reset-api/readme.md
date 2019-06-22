fullstack 全栈
Front Enginner
Backend   /api 

restful api 
浏览器与服务器通信方式的一种设计风格

- restful 的世界里， 一切皆资源
- url 来唯一定位资源的识别符
  /posts/:id/comments
- 添加一条 comment 怎么做？ /comments/2
  {
    id: 2,
    body: 'zzzzz',
    postId: 1
  }
  /comments 设计好url    POST  
- 设计有意义的URL 
  资源  状态改变
  添加评论:
  POST   /comments 加了一条评论   id: 2
  修改内容:
  POST? 使用PUT  /coments/2  body: 'zzzzz'
  操作      SQL 方法     HTTP动词    
  CREATE    INSERT       POST
  READ      SELECT       GET
  UPDATE    UPDATE       PUT/PATCH ({body: '',postID:1}/{一部分}) put要全部的内容包括不更改的内容 patch可以只更改部分
  DLETE     DLETE        DLETE
  状态 切换， 使用定义的谓语动词
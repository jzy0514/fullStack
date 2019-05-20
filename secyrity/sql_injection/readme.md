<<<<<<< HEAD
前端安全

表单
form -> onsubmit -> url
POST data:{email:'zm@163.com', password:'123123'}

后端 登入过程 sql 查找的过程
sql 语法报错， 服务器出错

用户的输入不可信任
password' sql 的提前结束或多了一个' 500错误(语法错误)  
后端可通过 编码解码

盗取账号 

- escape()
  escape("password'")
  "password%27"
  
SELECT * from users
  WHERE email = 'use@email.com'
=======
前端安全

表单
form -> onsubmit -> url
POST data:{email:'zm@163.com', password:'123123'}

后端 登入过程 sql 查找的过程
sql 语法报错， 服务器出错

用户的输入不可信任
password' sql 的提前结束或多了一个' 500错误(语法错误)  
后端可通过 编码解码

盗取账号 

- escape()
  escape("password'")
  "password%27"
  
SELECT * from users
  WHERE email = 'use@email.com'
>>>>>>> b1290998600ba17f13ae4a11504b2e581e126533
  AND password = 'password%27'
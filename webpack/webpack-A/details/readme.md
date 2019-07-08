devDependencies 开发阶段
Dependencies  所有阶段
webpack 打包工具  构建应用

打包之前 development  src/
打包之后 build  dist/  不再需要webpack  布署到服务器

- webpack-dev-server
  webpack 打包的之后， 将打包后的内容， 在浏览器中8080端口启动， 前端开发的标准
  在一个端口打开web server
  实时编译  watch HMP（边写边编译浏览器自动更新）
  index.js 是入口，打包成为 main.js
  index.html 首页的模板 main.js 会由webpack-dev-server 自动的放在index.html 的最后面 script 引入
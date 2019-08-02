基于Vue 2.0 + vuex + vue-router 全家桶实现方案来模拟网易云音乐webApp项目  
CSS预编译工具是Sass, 音乐上下滚动加载用的是berrterscore, 全面采用es6风格代码

解决哪些问题,实现了什么功能
  - 图片懒加载 --- vue-lazyload
  - 前后端分离:
    使用node.js NeteaseCloudMusicAPI proxy
    8080 + 3000
  - fastclick
  - 设计了store
    songs index song singer mode 
    favoriteList searchHustory palyHistory
    iconfont
    eslint


vue项目 ,分析清楚项目的目录结构
  1. components/ 跟路由挂件
    工作的入口
  2. store/  全剧共享  分模块 了解关键状态
  3. common/ 公共组件不用写
  4. api/ 前后端协作方式

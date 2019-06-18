- 相应框架或技术的快速启动
github  项目 starter
  .git文件删除

- 组件， 路由接管一切
  最好用目录
  <router-view />
  install ?

- 全家桶
  vue-router 路由
  vuex 数据流管理
  axios 负责API

- alias
  常用的
  段路径设置，在webpack.config.js 里 的 resolve 中 alias设置 
  如：'components': resolve(__dirname, 'src/components')

- 目录架构
  - components  组件
    - commons 通用组件（header， footer，dialog等）
  - pages 页面级别组件
  - assets  资源/图片
  - element-ui 框架级别组件，全局可用

- 在compontents pages 加一个index.js 模块化输出所有的文件, 增加可读性

- transitions name  <!-- https://cn.vuejs.org/v2/guide/transitions.html -->
  v-enter(短) -> v-enter-active(1s)   Enter
  v-leave -> v-leave-active   Leave
  
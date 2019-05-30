<template>
  <div class="main-content">
    <Header></Header>
  </div>
</template>

<script>
import Header from './common/Header' // 引用组件(把一个vue界面当做一个组件)
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: { // 申明注册
    Header
  }
}
</script>

<template>
  <section class="hello">
    <div class="scroll-box">
      <scroll-text :dataList="data" scrolltype="scroll-up" />
    </div>
    <div class="scroll-box">
      <scroll-text :dataList="data" scrolltype="scroll-left" />
    </div>
  </section>
</template>

<script>
import scrollText from './scrolltext';
export default {
  data () {
    return {
      data: [
        {text:'no.1'},
        {text:'no.2'},
        {text:'no.3'},
      ]
    }
  },
  components: {
    'scroll-text':scrollText
  }
}
</script>

<style scoped>
.hello{
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #e7e8e9;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
.scroll-box{
  background-color: #f9f9f9;
  border: 1px solid #e7e7e8;
  border-radius: 5px;
}
</style>

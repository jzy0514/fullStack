<template>
    <div class="container">
      {{msg}}
      <child @zy="getZy"></child>
    </div>
</template>

<script>
import Child from './child'
export default {  
  name: 'demoChild2',
  data () {
    return {
      msg: null
    }
  },
  components: {
    Child
  },
  methods: {
    getZy (data) {
      this.msg = data
    }
  }
}
</script>

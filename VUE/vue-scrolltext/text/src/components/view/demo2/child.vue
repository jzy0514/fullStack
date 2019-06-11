<template>
    <div class="container">
      <button @click="sendMsg">ok</button>
    </div>
</template>

<script>
export default {  
  name: 'demoChild2',
  data () {
    return {
      message: '朝阳'
    }
  },
  methods: {
    sendMsg () {
      this.$emit('zy', this.message)
    }
  }
}
</script>

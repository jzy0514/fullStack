<template>
  <div class="scroll-wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    pullUpLoad: {
      type: [Boolean, Object],
      default: false
    }
  },
  watch: {
    data(newVal, oldVal) {
      setTimeout(() => {
        this.forceUpdate()
      }, 20)
    }
  },
  mounted() {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 修改点击事件，使滚动页面内容可被点击
        click: true,
        bounce: false,
        pullUpload: this.pullUpload
      })
      if (this.pullUpload) {
        // 上拉加载更多
        this.initPullUpLoad()
      }
    },
    initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.$emit('pulling-up')
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    forceUpdate() {
      if (this.pullUpLoad) {
        this.scroll.finishPullUp()
        this.refresh()
      }
    }
  }
}
</script>

<style>

</style>

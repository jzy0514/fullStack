<template>
  <section>
    <div class="textscroll">
      <transition-group tag="ul" :name="scrolltype">
        <li v-for="(item, index) in dataList" :key="index" v-show="index === count">
          <p>{{ item.text }}</p>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      count: 0
    };
  },
  props: ["scrolltype", "dataList"],
  created() {
    setInterval(() => {
      this.getText();
      // console.log(this.count);
    }, 2000);
  },
  methods: {
    getText() {
      let len = this.dataList.length;
      if (len === 0) {
        return;
      };
      if (this.count === len - 1) {
        this.count = 0;
      } else {
        this.count++;
      }
    }
  }
};
</script>

<style>
ul {
  margin: 5px 0;
  padding: 0;
  background-color: #fff;
  overflow: hidden;
  height: 40px;
}
li {
  height: 40px;
  list-style-type: none;
  line-height: 1;
  overflow: hidden;
}
/* 从下到上滚动 */
.scroll-up-enter-active {
  transition: all 1s ease;
}
.scroll-up-leave-active {
  transition: all 1s ease;
}
.scroll-up-enter {
  transform: translate3d(0, 100%, 0);
}
.scroll-up-leave-to {
  transform: translate3d(0, -100%, 0);
}
/* 从右到左滚动 */
.scroll-left-enter-active {
  transition: all 1s ease;
}
.scroll-left-leave-active {
  transition: all 1s ease;
}
.scroll-left-enter {
  transform: translate3d(100%, 0, 0);
}
.scroll-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>

<template>
  <div>
    <div class="score">
      <div class="score-Comprehensive">
        <div class="score-number">4.2</div>
        <div>综合评分</div>
        <div style="color:#8a8f90">高于周边商家69.2%</div>
      </div>
      <div class="score-star">
        <div class="service">
          <div>服务态度</div>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
        <div class="commodity">
          <div>商品评分</div>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
        <span style="color:#8a8f90">送达时间  38分钟</span>
      </div>
    </div>
    <div class="footer">
      <div class="head">
        <el-row>
          <el-button type="primary">全部 {{}}</el-button>
          <el-button type="primary">满意 {{}}</el-button>
          <el-button type="primary">不满意 {{}}</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      value: 4.1
    }
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5d023d77f91dbf489ccf41de/Elemon/vue-eleme-rating"
      )
  },
}
</script>

<style lang="stylus">
@import '../../common/stylus/index.styl';
*
  margin: 0
  padding: 0
.score
  display: flex
  width: 100%
  box-sizing: border-box
  padding: 18px 14px
  border-bottom: 1px solid #dadddd
  font-size: 13px
  .score-Comprehensive
    text-align: center
    line-height: 27px
    border-right: 1px solid #dadddd
    padding-right: 10px
    .score-number
      font-size: 25px
      color: orange
  .score-star
    text-align: left
    line-height: 27px
    padding-left: 20px
    font-size: 13px
</style>

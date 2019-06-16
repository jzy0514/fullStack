vue的大型项目开发， 分成两种任务
- 组件开发工作 业务量开发
- vuex 数据设计
  store 独立于组件之外的， 应用app的中央数据管理中心
  公司：
  CEO  state {count: 0} 共享状态
  actions  日常工作， 修改状态
  修改: dispatch 派发 actions('name', payload) => action commit('mutationname') mutations => state 修改数据
  mutations  审核部  跟老板接触  state
  审核对状态的修改是否符合规定
  

  组件 读  this.$store.state.count
  写  actions(组件调用方法，)

- data 是组件自有数据，没有多少， 思考会不会被共享， 应用层共享的， 只要多于一个组件要用， 且关系不是简单的兄弟， 就用 vuex
- 共享状态 
  vuex  state 管理
  mutations 才能修改
  actions  被触发动作并且提交到 mutations
  getters  对state的包装

mapActions  mapGetters 引入组件
import { mapActions, mapGetters } from 'vuex'
import Vue from 'vue';
import Vuex from 'vuex';

// this.$store.state.count  vue 全局实例
Vue.use(Vuex); // 启用vuex， 是可拔插的

const state = {
  count: 0
}

// 要改？ 修改的管理起来 要严谨
const mutations = {
  // 按我的方式来改
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

const getters = {
  eventOrOdd: state => state.count % 2 === 0 ?
  'even': 'odd'
}

// 组件智能跟actions 交流
// 组件不可以直接跟state修改交流
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd({commit, state}) {
    // 将组件逻辑放到action
    // 是否是奇数
    // state.count = 1;
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 2000)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
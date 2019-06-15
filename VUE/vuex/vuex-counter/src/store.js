import Vue from 'vue';  //  根组件
import Vuex from 'Vuex';


Vue.use(Vuex);
const state = {
  count: 0
}

export default new Vuex.Store({
  state
})

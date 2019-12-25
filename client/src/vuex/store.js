import Vue from "vue";
import Vuex from "vuex";
import mutation from "./mutation";
import action from "./action";
import getter from "./getter";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    test_state: 'test',
    major_list: ['18市场营销','18软件技术']
  },
  mutations: mutation,
  actions: action,
  getters: getter
});

export default store;

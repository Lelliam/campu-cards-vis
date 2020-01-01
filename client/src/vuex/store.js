import Vue from "vue";
import Vuex from "vuex";
import mutation from "./mutation";
import action from "./action";
import getter from "./getter";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    major_state: '18国际金融',
    major_cancel: {
      major:'',
      operate:'',
      color:''
    }
  },
  mutations: mutation,
  actions: action,
  getters: getter
});

export default store;

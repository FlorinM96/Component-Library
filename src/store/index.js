import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeCategory: ""
  },
  mutations: {
    changeActiveCategory(state, newValue) {
      state.activeCategory = newValue;
    }
  },
  actions: {},
  modules: {}
});

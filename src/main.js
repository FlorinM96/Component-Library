import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

require("./components/Elements");
require("./components/_globals");
require("./assets/icons");

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

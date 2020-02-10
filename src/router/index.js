import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import buttons from "../views/buttons.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/buttons",
    name: "buttons",
    component: buttons
  }
];

const router = new VueRouter({
  routes
});

export default router;

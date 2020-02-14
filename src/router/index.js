import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import elements from "../views/elements.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/elements",
    name: "Elements",
    component: elements
  }
];

const router = new VueRouter({
  routes
});

export default router;

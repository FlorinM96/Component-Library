import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import elements from "../views/elements.vue";
import iteran from "../views/iteran";
import post from "../views/iteran/post";

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
  },
  {
    path: "/iteran",
    name: "iteran",
    component: iteran
  },
  {
    path: "/iteran/post",
    name: "post",
    component: post
  }
];

const router = new VueRouter({
  routes
});

export default router;

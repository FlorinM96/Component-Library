<template>
  <div id="app">
    <nav-bar :pages="categoryNames" />
    <side-bar :elements="categories[0]" />
    <router-view />
  </div>
</template>

<script>
import { categories } from "@/logic/categories";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default {
  components: {
    SideBar,
    NavBar
  },
  computed: {
    categories: () => categories,
    categoryNames() {
      return this.categories.map(e => e.name);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
}
</style>

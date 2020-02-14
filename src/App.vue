<template>
  <div id="app">
    <router-view />
    <nav-bar :pages="categories.map(e => e.name)" />
  </div>
</template>

<script>
import { categories } from "@/logic/categories";
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar
  },
  data: () => ({
    categories: categories
  })
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
}
</style>

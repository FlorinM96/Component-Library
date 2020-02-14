<template>
  <div class="nav">
    <router-link to="/" class="title-container">
      <img src="@/assets/images/logo.png" alt="logo" class="logo" />
      <h3 class="title">Florins Library</h3>
    </router-link>
    <div class="links">
      <router-link
        v-for="(page, i) in pages"
        :to="{ name: page }"
        :key="i"
        class="link"
        @click.native="changeActiveCategory(page)"
        >{{ page }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations(["changeActiveCategory"])
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  padding: 1.1rem 2.4rem;
  line-height: 3.5rem;
  height: 5.7rem;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.05rem solid $color-gray-4;
  background-color: $color-white;
}
.title-container {
  display: flex;
  border: 0 !important;
}
.logo {
  max-height: 1.5rem;
  margin: auto;
  padding: 0 1rem;
}
h3 {
  @include font-paragraph-l;
  line-height: 3.5rem;
  color: $color-gray-2;
}
.link {
  @include font-paragraph-m;
  padding: 0.2rem 0;
  margin: 0 1rem;
  color: $color-gray-2;
  &:hover {
    border-bottom: 2px solid $color-primary;
    border-radius: 10%;
  }
}
.router-link-exact-active {
  color: $color-gray-1;
  border-bottom: 2px solid $color-primary;
  border-radius: 10%;
}
</style>

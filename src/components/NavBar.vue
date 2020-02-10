<template>
  <div>
    <div class="nav">
      <router-link to="/" class="title-container">
        <img src="@/assets/icons/logo.png" alt="logo" class="logo" />
        <h3 class="title">Florin's Library</h3>
      </router-link>
      <div class="links">
        <router-link
          v-for="(page, i) in pages"
          :to="{ name: modifiedPath(page) }"
          :key="i"
          class="link"
          >{{ page }}</router-link
        >
      </div>
    </div>
    <div class="side-bar"></div>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  methods: {
    modifiedPath(page) {
      return page.replace(/ +/g, "").toLowerCase();
    }
  },
  mounted() {
    console.log(this.pages);
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 0 1rem;
  background-color: $color-gray-5;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.05rem solid $color-gray-4;
}
.title-container {
  height: 4rem;
  display: flex;
  border: 0 !important;
}
.logo {
  max-height: 1.5rem;
  margin: auto;
  padding: 0 1rem;
}
h3 {
  @include font-paragraph-s;
  color: $color-gray-2;
  line-height: 4rem;
}
.link {
  @include font-paragraph-xs;
  line-height: 4rem;
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

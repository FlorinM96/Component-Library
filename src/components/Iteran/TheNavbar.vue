<template>
  <div class="the-navbar">
    <router-link to="/">
      <app-icon v-if="!white" icon="iteranlogo" class="logo" />
      <app-icon v-else icon="iteranlogowhite" class="logo" />
    </router-link>
    <div :class="{ white: white }" class="nav-buttons">
      <router-link to="/" class="nav-button">Categoria</router-link>
      <router-link to="/" class="nav-button">TOP</router-link>
      <router-link to="/" class="nav-button">Eventos</router-link>
      <router-link to="/" class="nav-button">RECURSOS</router-link>
      <router-link to="/" class="nav-button">QUIÉNES SOMOS</router-link>
      <app-icon icon="iteransearch" class="search" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.the-navbar {
  display: flex;
  justify-content: space-between;
  width: 77%;
  margin: 4.6rem auto;
}
.logo {
  width: auto;
}
.search {
  vertical-align: middle;
  margin-left: 4rem;
}
.nav-button {
  @include font-featured;
  font-weight: 700;
  color: $color-gray-1;
  text-transform: uppercase;
  line-height: 5.3rem;
  margin: 0 4rem;
}
.white > * {
  color: white;
  /deep/ path {
    fill: white !important;
  }
}
</style>

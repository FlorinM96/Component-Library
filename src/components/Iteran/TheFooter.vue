<template>
  <div class="the-footer">
    <div class="left">
      <router-link to="/">
        <app-icon icon="iteranlogo" class="logo"
      /></router-link>
      <p class="description">
        We are a happy bunch of web professionals working as designers and
        developers, bringing you the latest news from our community.
      </p>
    </div>
    <div class="right">
      <router-link
        to="/"
        v-for="(link, i) in footerLinks"
        :key="i"
        class="link"
        >{{ link }}</router-link
      >
      <p class="companyTag">el laboratorio de la fábrica ETS Factory</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    footerLinks: ["frontend", "backend", "ux-ui", "data-science", "contacto"]
  })
};
</script>

<style lang="scss" scoped>
.the-footer {
  width: 100%;
  background-color: $color-gray-6;
  display: flex;
  justify-content: space-between;
}
.left {
  margin: 6rem 0 0 11.5%;
}
.right {
  margin: 9.5rem 11.5% 2.2rem 0;
}
.companyTag,
.description {
  @include font-paragraph-s;
  color: $color-gray-2;
}
.logo {
  height: 4.4rem;
}
.description {
  max-width: 40rem;
  margin-top: 2.1rem;
}
.link {
  @include font-featured;
  color: $color-gray-2;
  margin-left: 4rem;
}
.companyTag {
  margin-top: 7.8rem;
  text-align: right;
}
</style>

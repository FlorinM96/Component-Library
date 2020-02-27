<template>
  <div class="home-header">
    <div ref="icon" class="category">
      <app-icon icon="iterancategoryfront" class="icon" />
      <span class="category-title">{{ item.category }}</span>
    </div>
    <h2 ref="title" class="header">{{ item.title }}</h2>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: {
      category: "frontend",
      title:
        "8 Habits Everyone Should Try, and Why I Don’t Care if They Make Me 'Successful'.",
      image: "PostImage"
    }
  })
  // computed: {
  //   backgroundImage() {
  //     return { backgroundImage: `url('~@/assets/images/iteran/${this.item.image}.jpg')` };
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.home-header {
  width: 100%;
  min-height: 59rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("~@/assets/images/iteran/PostImage.jpg");
  background-size: cover;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  height: 5.3rem;
}
.category-title {
  @include font-quote;
  color: $color-gray-6;
  text-transform: uppercase;
  margin: 2rem 0;
}
.header {
  @include font-header-xl;
  color: $color-gray-6;
  max-width: 100rem;
}
</style>

<template>
  <div>
    <div ref="imageBackground" class="image-background" />
    <div ref="image" class="image" />
    <div class="text-container">
      <div class="post-details-wrapper">
        <app-icon icon="iteranindentation" class="icon" />
        <span>{{ post.category }}</span>
        •
        <span>{{ post.date }}</span>
        •
        <span>{{ post.timeToRead }}</span>
      </div>

      <h4 class="post-title">{{ post.title }}</h4>
      <p class="post-description">{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.image-background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: none;
  opacity: 0;
}
.text-container {
  margin: 0 0.5rem;
}
.image {
  background-image: url("~@/assets/images/iteran/PostImage.jpg");
  background-size: cover;
  width: 100%;
  min-height: 28rem;
  background-position: 50%;
  transform-origin: 50% 50%;
}
.post-details-wrapper {
  margin: 3.4rem 0 2.4rem;
  span {
    margin: 0 1rem;
  }
  > * {
    @include font-paragraph-s;
    text-transform: uppercase;
    color: $color-gray-3;
  }
}
.post-title {
  @include font-header-l;
  color: $color-gray-1;
  //  min-height: 10rem;
  margin-bottom: 1.5rem;
}
.post-description {
  @include font-paragraph-s;
  color: $color-gray-2;
}
</style>

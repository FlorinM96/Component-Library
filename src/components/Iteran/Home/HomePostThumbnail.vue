<template>
  <div class="thumbnail">
    <div ref="textContainer" class="text-container">
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
  data: () => ({
    post: {
      category: "ux-ui",
      date: "23 octubre 2021",
      timeToRead: "6 min",
      title: "8 Habits Everyone Should Try.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  })
};
</script>

<style lang="scss" scoped>
.thumbnail {
  background-image: url("~@/assets/images/iteran/PostImage.jpg");
  background-size: cover;
  background-position-x: 80%;
  min-height: 44.5rem;
  position: relative;
  transform-origin: 50% 50%;
}
.text-container {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 57%;
  width: 62%;
  background: white;
  padding: 2.6rem;
}
.post-details-wrapper {
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
  margin: 0.8rem 0 1.5rem;
}
.post-description {
  @include font-paragraph-s;
  color: $color-gray-2;
}
</style>

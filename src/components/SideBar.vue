<template>
  <div class="side-bar">
    <h3 class="title">{{ elements.name }}</h3>
    <template v-for="(element, i) in elements.values">
      <a :key="i" class="element">
        {{ element.name }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    elements: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 20rem;
  left: 0;
  top: 4rem;
}
.title {
  @include font-header-s;
}
.element {
  @include font-paragraph-s;
  background-color: $color-gray-5;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
}
</style>

<template>
  <component
    :is="`Icon${icon}`"
    :class="{ inverted, white }"
    v-bind="$props"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: " "
    }
  }
};
</script>

<style lang="scss" scoped>
.inverted {
  transform: rotate(180deg);
}
.white {
  path,
  circle {
    stroke: $color-white;
    color: $color-white;
  }
}
</style>

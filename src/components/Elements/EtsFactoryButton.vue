<template>
  <a v-if="route" :href="route" :target="target" class="appbutton">
    <app-icon
      :icon="icon"
      :class="{ 'icon-inverted': inverted }"
      :white="white"
      :inverted="iconInverted"
      class="icon"
    />
    <span :class="{ white, 'text-inverted': inverted }" class="text">{{
      text
    }}</span>
  </a>
  <button v-else class="appbutton" @click="$emit('click')">
    <app-icon
      :icon="icon"
      :class="{ 'icon-inverted': inverted }"
      :white="white"
      :inverted="iconInverted"
      class="icon"
    />
    <span :class="{ 'text-inverted': inverted, white }" class="text">{{
      text
    }}</span>
  </button>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: "take me there"
    },
    icon: {
      type: String,
      default: "arrowright"
    },
    target: {
      type: String,
      default: "_blank"
    },
    inverted: {
      type: Boolean,
      default: false
    },
    iconInverted: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.appbutton {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
  &:hover .text:after {
    transform: scaleX(1);
  }
}
.icon {
  height: 4.5rem;
  max-width: 4.5rem;
}

.text {
  font-size: 1rem;
  letter-spacing: 0.2rem;
  line-height: 2.08;
  color: $color-gray-2;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  text-align: left;
  padding: 0 1.6rem;
  color: $color-gray-2;

  &:after {
    box-shadow: 0 0 0 0.1rem currentColor;
    content: "";
    width: 100%;
    display: block;
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.16, 0.92, 0.32, 0.99);
  }
}
.white {
  color: $color-white;
}
.icon-inverted {
  order: 2;
}
.text-inverted {
  order: 1;
}
</style>

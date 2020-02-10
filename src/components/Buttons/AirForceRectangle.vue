<template>
  <div class="button-rectangle inverted">
    <span class="button-outline-copy">
      Button Text
    </span>
    <span class="button-outline-bottom"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-rectangle {
  position: relative;
  display: inline-block;
  height: 3rem;
  border-right: 1px solid;
  border-left: 1px solid;
  &:hover {
    cursor: pointer;
  }
  .button-outline-copy:after,
  .button-outline-copy:before,
  .button-outline-bottom::after,
  .button-outline-bottom:before {
    content: "";
    position: absolute;
    height: 1px;
    background: currentColor;
    left: 0;
    right: 0;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1) 50ms;
  }
  .button-outline-copy {
    @include font-paragraph-s;
    line-height: 3rem;
    position: relative;
    display: block;
    padding: 0 2.6rem;
    &:after,
    &:before {
      top: 0;
    }
    &:before {
      right: calc(38% + 5px);
    }
    &:after {
      left: calc(62% + 5px);
    }
  }
  .button-outline-bottom {
    &:after,
    &:before {
      bottom: 0;
    }
    &:before {
      right: calc(62% + 5px);
    }
    &:after {
      left: calc(38% + 5px);
    }
  }
  &:hover .button-outline-copy:after {
    left: calc(38% + 5px);
  }
  &:hover .button-outline-copy:before {
    right: calc(62% + 5px);
  }
  &:hover .button-outline-bottom:before {
    right: calc(38% + 5px);
  }
  &:hover .button-outline-bottom:after {
    left: calc(62% + 5px);
  }
}
</style>

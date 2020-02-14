<template>
  <div class="button-circle inverted">
    <svg
      class="circle-svg button-icon-outline"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
    >
      <circle
        class="circle"
        cx="50"
        cy="50"
        r="48.8"
        fill="none"
        stroke="black"
        stroke-width="1.2"
        vector-effect="non-scaling-stroke"
      ></circle>
    </svg>
    <span class="text">
      <app-icon icon="instagram" />
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-circle {
  position: relative;
  display: inline-block;
  background: 0 0;
  padding: 0;
  z-index: 0;
  display: block;
  height: 3.4rem;
  width: 3.4rem;
  &:before {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    -ms-transform: scale(0.25);
    transform: scale(0.25);
    background: currentColor;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  &:hover {
    .circle {
      stroke-dashoffset: 64;
    }
    cursor: pointer;
  }
}
.circle-svg {
  height: 100%;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
}
.button-icon-outline .circle {
  stroke: currentColor;
  stroke-dasharray: 42.2 10;
  stroke-dashoffset: 8;
  stroke-width: 1.2;
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.text {
  height: 50%;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

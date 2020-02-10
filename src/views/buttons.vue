<template>
  <div class="container">
    <div class="button-rectangle inverted">
      <span class="button-outline-copy">
        Button Text
      </span>
      <span class="button-outline-bottom"></span>
    </div>

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
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.1 29.6001L33 23.8L29.1 18"
            stroke="#666666"
            stroke-width="2.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 24H32.3"
            stroke="#666666"
            stroke-width="2.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button-rectangle {
  position: relative;
  display: inline-block;
  height: 2rem;
  background: 0 0;
  border-right: 1px solid;
  border-left: 1px solid;
  padding: 0;
  z-index: 0;
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
    position: relative;
    display: block;
    padding: 0 2.6rem;
    line-height: 2rem;
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

.button-circle {
  position: relative;
  display: inline-block;
  background: 0 0;
  padding: 0;
  z-index: 0;
  margin-top: 100px;
  display: block;
  height: 4rem;
  width: 4rem;
}
.circle-svg {
  height: 100%;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
}
.button-icon-outline .circle {
  stroke-dasharray: 80 15;
  stroke-dashoffset: 26;
  stroke-width: 2px;
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.button-circle:hover .circle {
  stroke-dashoffset: 111;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

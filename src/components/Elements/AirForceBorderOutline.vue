<template>
  <div class="text-box-container">
    <div class="box">
      <div class="box-content">
        <app-icon icon="instagram" class="icon" />
        <p class="pretitle">pretitle</p>
        <h4 class="title">the title of the title</h4>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="underline"></div>
      <air-force-rectangle class="box-button" />
    </div>
    <div class="box">
      <div class="box-content">
        <app-icon icon="instagram" class="icon" />
        <p class="pretitle">pretitle</p>
        <h4 class="title">the title of the title</h4>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="underline"></div>

      <air-force-rectangle class="box-button" />
    </div>
    <div class="box">
      <div class="box-content">
        <app-icon icon="instagram" class="icon" />
        <p class="pretitle">pretitle</p>
        <h4 class="title">the title of the title</h4>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="underline"></div>

      <air-force-rectangle class="box-button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-box-container {
  width: 100%;
  min-height: 50rem;
  display: flex;
  position: relative;
}
.box {
  position: relative;
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid $color-gray-4;
  border-right: 0;
  min-height: 100%;
  &:nth-last-child(1) {
    border-right: 1px solid $color-gray-4;
  }
  &:before,
  &:after {
    content: "";
    width: 50%;
    height: 1px;
    background-color: black;
    position: absolute;
    top: 0;
    transform: scaleX(0);
    transition: transform 0.2s;
  }
  &:before {
    left: 0;
    transform-origin: 0;
  }
  &:after {
    right: 0;
    transform-origin: 100%;
  }
  &:hover {
    &:before,
    &:after {
      transform: scaleX(1);
      transition-delay: 0.4s;
    }
    .box-content {
      &:before,
      &:after {
        transform: scaleY(1);
        transition-delay: 0.1s;
      }
    }
    .underline {
      &:before,
      &:after {
        transform: scaleX(1);
        transition: transform 0.2s;
      }
    }
    .title,
    .pretitle,
    .description,
    .icon {
      transform: translateY(-2rem);
      transition: transform 0.3s;
    }
  }
}
.box-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  padding: 4rem;
  &:before,
  &:after {
    content: "";
    width: 1px;
    height: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
    transform: scaleY(0);
    transform-origin: 0 100%;
    transition: transform 0.3s;
    transition-delay: 0.2s;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
}
.underline {
  &:before,
  &:after {
    content: "";
    width: 50%;
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: 0;
    transform: scaleX(0);
    transition: transform 0.2s;
    transition-delay: 0.5s;
  }
  &:before {
    left: 0;
    transform-origin: 100%;
  }
  &:after {
    right: 0;
    transform-origin: 0;
  }
}
.title,
.pretitle,
.description,
.icon {
  transition: transform 0.8s;
}
.icon {
  width: 4rem;
  margin: 0 auto 4rem auto;
}
.pretitle {
  @include font-paragraph-l;
  text-transform: uppercase;
}
.title {
  @include font-header-m;
  text-transform: uppercase;
  margin: 4rem 0;
}
.description {
  @include font-paragraph-m;
}
.box-button {
  margin-bottom: 3rem;
}
</style>

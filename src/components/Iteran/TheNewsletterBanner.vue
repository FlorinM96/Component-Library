<template>
  <div class="newsletter">
    <div class="input-container">
      <input id="email" type="email" class="input" placeholder=" " />
      <label for="email" class="label">
        Déjanos aquí tu email y suscríbete a nuestra newsletter</label
      >
    </div>
    <hr class="line" />
    <a class="button">¡Apúntame!</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.newsletter {
  min-height: 17.2rem;
  width: 100%;
  margin: 4rem auto;
  background-color: $color-blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-container {
  position: relative;
  min-width: 50%;
  text-align: center;
  @include desktop {
    min-width: 35%;
  }
}
.label {
  @include font-paragraph-m;
  color: $color-gray-6;
  position: absolute;
  transform-origin: center;
  transition: all 0.5s;
  pointer-events: none;
  top: 0;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
}
.input {
  @include font-paragraph-m;
  font-family: inherit;
  text-align: center;
  color: $color-gray-6;
  border: none;
  outline: none;
  width: 100%;
  background-color: #00adef;
  box-sizing: border-box;
  &:-webkit-autofill {
    -webkit-text-fill-color: $color-gray-6;
    -webkit-box-shadow: 0 0 0px 1000px #00adef inset;
    box-shadow: 0 0 0px 1000px #00adef inset;
  }
  &:placeholder-shown + .label {
    transform: scale(1) translateY(0);
  }
  & + .label,
  &:focus + .label {
    transform: scale(0.8) translateY(-100%);
  }
}

.line {
  margin: 0.2rem auto 1.8rem;
  width: 18%;
  border-style: none;
  border-bottom: 0.1rem solid $color-gray-6;
}
.button {
  @include font-header-m;
  color: #010188;

  &:hover {
    cursor: pointer;
    color: white;
  }
}
</style>

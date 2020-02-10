<template>
  <div class="container">
    <template v-for="(button, i) in buttons">
      <component :is="button.componentName" :key="i" />
    </template>
  </div>
</template>

<script>
import { categories } from "@/logic/categories";
import AirForceRectangle from "@/components/Buttons/AirForceRectangle";
import AirForceCircle from "@/components/Buttons/AirForceCircle";
export default {
  components: {
    AirForceRectangle,
    AirForceCircle
  },
  data: () => ({
    buttons: categories.filter(e => (e.name = "Buttons"))[0].values
  })
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

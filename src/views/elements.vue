<template>
  <div class="elements">
    <side-bar
      :elements="elements"
      :intersectedElement="intersectedElement"
      class="side-bar"
      @click="sideBarClick"
    />
    <div class="container">
      <div class="wrapper">
        <h3 class="cateory-name">{{ children.name }}</h3>
        <div v-for="(child, i) in children.children" :key="i" class="child">
          <h4 :id="child.name" class="child-name">{{ child.name }}</h4>
          <hr />
          <div
            :id="value.id"
            v-for="(value, i) in child.values"
            :key="i"
            class="value"
          >
            <span class="value-name">{{ value.name }}</span>
            <div :key="i" class="component">
              <component :is="value.componentName" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categories } from "@/logic/categories";
import SideBar from "@/components/SideBar";

export default {
  components: {
    SideBar
  },
  data: () => ({
    intersectedElement: "",
    children: categories.find(e => e.name === "Elements"),
    elements: categories.find(e => e.name === "Elements")
  }),
  beforeDestroy() {
    this.observer.disconnect();
  },
  mounted() {
    this.addIntersectionObserver();
  },
  methods: {
    sideBarClick(id) {
      const top = document.getElementById(id).offsetTop - 69;
      window.scrollTo({ top, behavior: "smooth" });
    },
    addIntersectionObserver() {
      const options = {
        rootMargin: `-57px 0px -${window.innerHeight - 100}px 0px`
      };

      this.observer = new IntersectionObserver(
        this.intersectionHandler,
        options
      );
      const items = document.querySelectorAll(".value");
      for (let i = items.length - 1; i >= 0; i--) {
        this.observer.observe(items[i]);
      }
    },
    intersectionHandler(value) {
      for (let i = 0; i < value.length; i++) {
        if (value[i].isIntersecting) {
          this.intersectedElement = value[i].target.id;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.elements {
  position: relative;
}
.side-bar {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 30rem;
  left: 0;
  top: 5.7rem;
  bottom: 0;
  border-right: 0.05rem solid $color-gray-4;
}
.container {
  margin-left: 30rem;
}
.wrapper {
  max-width: 50vw;
  padding: 2rem;
  margin: 0 auto;
}
.cateory-name {
  @include font-header-xl;
  margin: 4rem 0;
}
.child {
  margin-bottom: 8rem;
  .child-name {
    @include font-header-l;
  }
  hr {
    margin-bottom: 4rem;
  }
}
.value {
  margin: 2rem 0;
}
.value-name {
  @include font-header-m;
  color: $color-primary;
  padding: 0.25rem 0.5rem;
  margin: 0;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}
.component {
  width: 100%;
  margin: 4rem 0;
  padding: 0 2rem;
}
</style>

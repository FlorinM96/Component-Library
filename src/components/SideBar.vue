<template>
  <div>
    <h3 class="title">{{ elements.name }}</h3>
    <template v-for="(element, i) in elements.children">
      <a
        :key="i"
        class="children-name"
        :class="{ active: activeElement === element.name }"
        @click="$emit('click', element.name)"
      >
        {{ element.name }}
      </a>
      <ul :key="i + 'list'" class="list">
        <li
          v-for="(item, i) in element.values"
          :key="i"
          class="item"
          :class="{ 'active-child': intersectedElement === item.id }"
          @click="$emit('click', item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    elements: {
      type: Object,
      required: true
    },
    intersectedElement: {
      type: String,
      default: ""
    }
  },
  computed: {
    activeElement() {
      for (let i = 0; i < this.elements.children.length; i++) {
        let values = this.elements.children[i].values;
        for (let j = 0; j < values.length; j++) {
          if (values[j].id === this.intersectedElement)
            return this.elements.children[i].name;
        }
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  @include font-header-l;
  padding-left: 2rem;
}
.children-name {
  @include font-header-m;
  padding: 1rem 2.5rem 0;
  &:hover {
    cursor: pointer;
  }
}
.list {
  padding: 1rem 0;
  list-style: none;
}
.item {
  @include font-paragraph-s;
  padding: 0.4rem 1.6rem 0.4rem 3.2rem;
  &:hover {
    cursor: pointer;
    color: $color-primary;
  }
}
.active {
  border-left: 0.5rem solid $color-primary;
}
.active-child {
  color: $color-primary;
  margin-left: 0.5rem;
}
</style>

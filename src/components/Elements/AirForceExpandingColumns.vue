<template>
  <div class="expanding-columns">
    <div
      ref="column"
      class="column"
      v-for="(column, i) in info"
      :key="i"
      :style="{ backgroundImage: `url('${column.imageSrc}')` }"
      @mouseenter="setActive(i)"
      @mouseout="removeActive()"
    >
      <app-icon v-if="isActive === i" class="icon" icon="play" />
      <hr v-if="!isActive && isActive !== 0" class="line" />
      <h4 v-if="(!isActive && isActive !== 0) || isActive === i" class="text">
        some text
      </h4>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data: () => ({
    info: [
      {
        imageSrc:
          "https://images.squarespace-cdn.com/content/v1/52eaf4cde4b03726e48a3c50/1561339576554-8A3WVWYJ4IH3CP74YP1K/ke17ZwdGBToddI8pDm48kDAkHc2aH2maNifW2paJCA97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URpaYeDsKE-JX0fpgUCY_8I8KU4mWs3MpXkivxW-4VD9HqsZyj6nApxb6bWEhURKFg/bc-1.jpg?format=2500w"
      },
      {
        imageSrc:
          "https://1a1f425caba3315f1d12-bc09e78f0660e85983861bbe35588408.ssl.cf1.rackcdn.com/DSCF8361.jpg"
      },
      {
        imageSrc:
          "https://earthyphotography.co.uk/wp-content/uploads/2016/01/24-53826-page/corporate-portraits-london-34(pp_w768_h512).jpg"
      },
      {
        imageSrc:
          "https://i.pinimg.com/originals/dd/59/4e/dd594e241abf617abed2b7d586c19ef9.jpg"
      }
    ],
    isActive: null
  }),
  methods: {
    setActive(i) {
      this.isActive = i;
      gsap.to(this.$refs.column[i], { duration: 0.5, width: "35%" });
      if (i !== 0 && i !== this.$refs.column.length - 1)
        gsap.to([this.$refs.column[i - 1], this.$refs.column[i + 1]], {
          duration: 0.5,
          width: "20%"
        });
      else if (i === 0)
        gsap.to(this.$refs.column[i + 1], {
          duration: 0.5,
          width: "15%"
        });
      else
        gsap.to(this.$refs.column[i - 1], {
          duration: 0.5,
          width: "15%"
        });
    },
    removeActive() {
      gsap.to(this.$refs.column, { duration: 0.5, width: "25%" });
      this.isActive = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.expanding-columns {
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  min-height: 70rem;
}
.column {
  width: 25%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  transform-origin: 50% 50%;
}
.icon {
  width: 2rem;
}
.line {
  width: 4rem;
  height: 1px;
  box-shadow: none;
}
.text {
  @include font-header-xl;
  text-transform: uppercase;
  color: $color-white;
}
</style>

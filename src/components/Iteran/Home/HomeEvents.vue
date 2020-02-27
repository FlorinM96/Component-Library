<template>
  <div class="home-events">
    <h4 class="pretitle">Próximos eventos</h4>
    <div class="events-wrapper">
      <div v-for="(event, i) in events" :key="i" class="event">
        <span class="date">{{ event.date }}</span>
        <img
          src="~@/assets/images/iteran/PostImage.jpg"
          alt="event image"
          class="image"
        />
        <div class="location">
          <span>{{ event.location }}</span> · <span>{{ event.place }}</span>
        </div>
        <span class="name">{{ event.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        date: "17.02.20",
        image: "image",
        location: "madrid",
        place: "UNIVERSIDAD CARLOS III",
        name: "Techfest"
      },
      {
        date: "17.02.20",
        image: "image",
        location: "madrid",
        place: "UNIVERSIDAD CARLOS III",
        name: "Techfest"
      },
      {
        date: "17.02.20",
        image: "image",
        location: "madrid",
        place: "UNIVERSIDAD CARLOS III",
        name: "Techfest"
      },
      {
        date: "17.02.20",
        image: "image",
        location: "madrid",
        place: "UNIVERSIDAD CARLOS III",
        name: "Techfest"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.pretitle {
  @include font-header-m;
}
.events-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
}
.event {
  width: 23%;
}
.date,
.name {
  @include font-header-l;
}
.location > * {
  @include font-paragraph-s;
  text-transform: uppercase;
  color: $color-gray-3;
}
.image {
  margin: 1.5rem 0 3rem;
  width: 100%;
  min-height: 16rem;
}
</style>

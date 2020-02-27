<template>
  <div>
    <h4 class="pretitle">Unete a la Factoría</h4>
    <div class="events-wrapper">
      <div v-for="(job, i) in jobs" :key="i" class="job">
        <a
          :href="`https://new.etsfactory.com/joboffers/${job.id}`"
          target="_blank"
          ><span class="date">{{ job.date }}</span>
          <div
            :class="{
              front: job.title.toLowerCase().includes('front'),
              back:
                job.title.toLowerCase().includes('back') ||
                job.title.toLowerCase().includes('python'),
              full: job.title.toLowerCase().includes('full'),
              data: job.title.toLowerCase().includes('data'),
              design:
                job.title.toLowerCase().includes('ux') ||
                job.title.toLowerCase().includes('ui') ||
                job.title.toLowerCase().includes('design')
            }"
            class="icon-wrapper"
          >
            <app-icon icon="iterancategoryfront" class="icon" />
          </div>
          <div class="location">
            <span>{{ job.category }}</span>
          </div>
          <span class="name">{{ job.title }}</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    jobs: [
      {
        id: 45,
        title: "Frontend Developer (Vue.js)",
        description:
          "Are you an engineer ready to ride the wave of breakthrough projects? You'll be welcome if you are proactive, creative, not afraid to ask questions and willing to work in team.  There's a lot of innovative stuff going on here, and we need your experience and good ideas to deliver astonishing web products.",
        category: "Technology",
        imageUrl: "/Images/JobOpenings/Positions/39.png"
      },
      {
        id: 43,
        title: "Mid-Senior Python Developer",
        description:
          "This job is for you introduce yourself as a native Python speaker, because you know all its tricks and traps. You know other technologies, though, and you don't exclude the possibility of using them if needed. You're ready to develop all kinds of applications.",
        category: "R&D",
        imageUrl: "/Images/JobOpenings/Positions/36.png"
      },
      {
        id: 42,
        title: "Junior Python Developer",
        description:
          "This job is for you if you love to use Python, but you don't exclude the possibility of using other technologies if needed. you're a problem-solving engineer and you feel at ease with backroom software... come and stretch your brain with us, you won’t be alone. Let’s do big things together!",
        category: "Technology",
        imageUrl: "/Images/JobOpenings/Positions/35.png"
      },
      {
        id: 46,
        title: "Senior UX",
        description:
          "Would you like to work in a social project that helps underprivileged groups, become financially independent and improve its quality of life? You will have to develop tailor-made software tools for our social included projects. Creativity, proactivity, and autonomy are welcome.",
        category: "R&D",
        imageUrl: "/Images/JobOpenings/Positions/38.png"
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
.job {
  width: 23%;
}
.date,
.name {
  @include font-header-l;
  color: #000;
}
.location > * {
  @include font-paragraph-s;
  text-transform: uppercase;
  color: $color-gray-3;
}
.icon-wrapper {
  margin: 1.5rem 0 3rem;
  width: 100%;
  min-height: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  min-width: 12.5rem;
  height: auto;
}
.design {
  background-color: #f0008c;
}
.front,
.full,
.back {
  background-color: #00adef;
}
.data {
  background-color: #010188;
}
</style>

<template>
  <div>
    <the-navbar />
    <home-header ref="homeHeader" @click.native="headerNavigate" />
    <div ref="home" class="home">
      <the-newsletter-banner />
      <div ref="posts" class="posts">
        <home-post-thumbnail
          ref="postThumbnailLeft"
          class="post"
          @click.native="bigThumbnailNavigate('postThumbnailLeft')"
        />
        <div class="line" />
        <home-post-thumbnail
          ref="postThumbnailRight"
          class="post"
          @click.native="bigThumbnailNavigate('postThumbnailRight')"
        />
        <div ref="imageBackground" class="image-background" />
      </div>
      <home-events />
      <div class="mini-posts-container">
        <div
          v-for="(miniPost, i) in miniPosts"
          :key="i"
          class="mini-post-wrapper"
        >
          <home-mini-post-thumbnail
            ref="miniPostThumbnail"
            :post="miniPost"
            class="mini-post"
            @click.native="thumbnailNavigate(i)"
          />
          <div class="line" />
        </div>
      </div>
      <the-jobs />
    </div>
    <the-footer />
  </div>
</template>

<script>
import gsap from "gsap";
import TheNavbar from "@/components/Iteran/TheNavbar";
import HomeHeader from "@/components/Iteran/Home/HomeHeader";
import TheNewsletterBanner from "@/components/Iteran/TheNewsletterBanner";
import HomePostThumbnail from "@/components/Iteran/Home/HomePostThumbnail";
import HomeEvents from "@/components/Iteran/Home/HomeEvents";
import HomeMiniPostThumbnail from "@/components/Iteran/Home/HomeMiniPostThumbnail";
import TheJobs from "@/components/Iteran/TheJobs";
import TheFooter from "@/components/Iteran/TheFooter";

export default {
  components: {
    TheNavbar,
    HomeHeader,
    TheNewsletterBanner,
    HomePostThumbnail,
    HomeEvents,
    HomeMiniPostThumbnail,
    TheJobs,
    TheFooter
  },
  data: () => ({
    miniPosts: [
      {
        category: "ux-ui",
        date: "23 octubre 2021",
        timeToRead: "6 min",
        title:
          "8 Habits Everyone Should Try, and Why I Don’t Care if They Make Me “Successful.”",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        category: "ux-ui",
        date: "23 octubre 2021",
        timeToRead: "6 min",
        title: "8 Habits Everyone Should Try.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        category: "ux-ui",
        date: "23 octubre 2021",
        timeToRead: "6 min",
        title:
          "8 Habits Everyone Should Try, and Why I Don’t Care if They Make Me “Successful.”",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        category: "ux-ui",
        date: "23 octubre 2021",
        timeToRead: "6 min",
        title: "8 Habits Everyone Should Try.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        category: "ux-ui",
        date: "23 octubre 2021",
        timeToRead: "6 min",
        title: "8 Habits Everyone Should Try.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        category: "ux-ui",
        date: "23 octubre 2021",
        timeToRead: "6 min",
        title:
          "8 Habits Everyone Should Try, and Why I Don’t Care if They Make Me “Successful.”",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  }),
  methods: {
    headerNavigate() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      gsap.to(this.$refs.homeHeader.$el, {
        duration: 0.5,
        width: "100%",
        margin: 0,
        y: -156,
        onComplete: this.navigateWithoutTransition
      });
      gsap.to(this.$refs.home, { duration: 0.25, opacity: 0 });
    },
    navigateWithoutTransition() {
      this.$router.push({ name: "post" });
    },
    navigateWithTransition() {
      this.$router
        .push({ name: "post", params: { withTransition: true } })
        .then(() => window.scrollTo(0, 0));
    },
    thumbnailNavigate(i) {
      const diff = this.$refs.miniPostThumbnail[
        i
      ].$refs.image.getBoundingClientRect();
      gsap.to(this.$refs.miniPostThumbnail[i].$refs.image, {
        duration: 0.75,
        width: "calc(100vw - 16px)",
        height: "590px",
        backgroundPositionY: 0,
        translateY: -diff.y,
        translateX: -diff.x,
        onComplete: this.navigateWithTransition
      });
      gsap.to(this.$refs.miniPostThumbnail[i].$refs.imageBackground, {
        duration: 0.5,
        display: "block",
        opacity: 1
      });
    },
    bigThumbnailNavigate(which) {
      gsap
        .timeline({ onComplete: this.navigateWithTransition })
        .to(this.$refs[which].$el, {
          duration: 0,
          zIndex: "3"
        })
        .to(this.$refs.posts, { duration: 0, display: " -webkit-box" }, 0)
        .to(
          this.$refs[which].$el,
          {
            duration: 1,
            backgroundPosition: 0,
            width: "calc(100vw - 16px)",
            minHeight: "590px",
            translateY: -this.$refs[which].$el.getBoundingClientRect().y,
            translateX: -this.$refs[which].$el.getBoundingClientRect().x
          },
          0
        )
        .to(
          this.$refs[which].$refs.textContainer,
          {
            duration: 0.5,
            opacity: 0
          },
          0
        );
      gsap.to(
        this.$refs.imageBackground,
        {
          duration: 0.5,
          display: "block",
          opacity: 1
        },
        0
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.image-background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: none;
  opacity: 0;
}
.the-navbar {
  display: flex;
  justify-content: space-between;
  width: 77%;
  margin: 4.6rem auto;
}
.home {
  width: 80.9%;
  margin: 0 auto 10rem;
}
.home-header {
  cursor: pointer;
  width: 80.9%;
  margin: 0 auto;
}

.posts {
  margin: 0 auto 5.6rem;
  display: flex;
  justify-content: space-between;
  .post {
    width: calc(50% - 4.05rem);
  }
}
.mini-posts-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8rem 0;
}
.line {
  min-width: 0.1rem;
  background-color: $color-gray-4;
  margin: 0 3rem;
  @include desktop {
    margin: 0 4rem;
  }
}
.mini-post-wrapper {
  display: inline-flex;
  .line {
    height: 80%;
  }
  @include tablet {
    width: calc(50% + 3.05rem);
    &:nth-child(2n + 2) {
      width: calc(50% - 3.05rem);
      .line {
        display: none;
      }
    }
  }
  @include desktop {
    width: calc(33.3% + 2.7rem);
    &:nth-child(2n + 2) {
      width: calc(33.3% + 2.7rem);
      .line {
        display: initial;
      }
    }
    &:nth-child(3n + 3) {
      width: calc(33.3% - 5.4rem);
      .line {
        display: none;
      }
    }
  }
}
.mini-post {
  margin-bottom: 5rem;
}
</style>

<template>
  <div class="post-sticky">
    <div ref="stickyPostContent" class="post-content">
      <div class="title-container">
        <span class="title-intro">Estas leyendo:</span>
        <span class="title"> {{ title }}</span>
      </div>
      <div class="share-container">
        <span class="share">Compartir</span>
        <a
          href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://PUT LINK HERE"
          target="_blank"
          ><app-icon icon="iteranlinkedin"
        /></a>
        <a
          href="https://twitter.com/share?url=https://PUT LINK HERE"
          target="_blank"
          ><app-icon icon="iterantwitter"
        /></a>
      </div>
      <div class="date-comments-container">
        <span class="date">{{ date }}</span>
        <span class="comments"
          >{{ comments + (comments === 1 ? " Comentario" : " Comentarios") }}
          <app-icon icon="iterancomments" class="icon" />
        </span>
      </div>
    </div>
    <div class="progress-bar" ref="progressBar" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    comments: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.post-sticky {
  width: 100%;
  top: 0;
  left: 0;
}
.post-content {
  display: flex;
  justify-content: space-around;
  min-height: 8rem;
  background-color: $color-blue;
  transition: all 0.25s;
}
.title-intro {
  @include font-featured;
  color: $color-white;
}
.title-container,
.share-container,
.date-comments-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.share-container {
  flex-direction: row;
  align-items: center;
  & > * {
    margin: 0 0.4rem;
  }
}
.date-comments-container {
  align-items: center;
}

.title,
.share,
.date,
.comments {
  @include font-paragraph-s;
  color: $color-white;
}
.comments {
  .icon {
    vertical-align: middle;
    margin: 0 0.4rem;
  }
}
.progress-bar {
  height: 4px;
  background-color: #f0008c;
  width: 0;
}

.active-sticky {
  position: fixed;
}
</style>

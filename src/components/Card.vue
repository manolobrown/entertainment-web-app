<script setup>
import { ref, computed } from "vue";
import BookMarkIconEmpty from "./icons/IconBookmarkEmpty.vue";
import BookMarkIconFull from "./icons/IconBookmarkFull.vue";
import MovieIcon from "./icons/IconCategoryMovie.vue";
import TVIcon from "./icons/IconCategoryTV.vue";
import PlayIcon from "./icons/IconPlay.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconBookmarkEmpty from "./icons/IconBookmarkEmpty.vue";
const props = defineProps({
  classModifier: String,
  movie: Object,
  isTrending: Boolean,
});

const isActive = ref(false);

//TODO create picture component and fetch data based on trending
</script>

<template>
  <div class="card" :class="classModifier">
    <picture v-if="isTrending">
      <source
        media="(min-width: 1024px)"
        :srcset="movie.thumbnail.trending.large"
      />
      <img :src="movie.thumbnail.trending.small" alt="" />
    </picture>

    <picture v-else>
      <source
        media="(min-width: 768px)"
        :srcset="movie.thumbnail.regular.medium"
      />
      <source
        media="(min-width: 1024px)"
        :srcset="movie.thumbnail.regular.large"
      />
      <img :src="movie.thumbnail.regular.small" alt="" />
    </picture>

    <div class="attributes">
      <div class="meta">
        <div class="year">{{ movie.year }}</div>
        <div class="category">
          <div class="icon">
            <MovieIcon />
          </div>
          {{ movie.category }}
        </div>
        <div class="rating">{{ movie.rating }}</div>
      </div>
      <h2>{{ movie.title }}</h2>
    </div>

    <div
      v-if="movie.isBookmarked"
      class="bookmark bookmark--full"
      :class="{ bookmarked: isActive }"
      @click="isActive = !isActive"
    >
      <BookMarkIconFull />
    </div>
    <div
      v-else
      class="bookmark"
      :class="{ bookmarked: isActive }"
      @click="isActive = !isActive"
    >
      <IconBookmarkEmpty />
    </div>
    <div class="play"><IconPlay /> Play</div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/util" as *;
.card {
  position: relative;
  cursor: pointer;
  img {
    border-radius: rem(8);
    object-fit: cover;
    width: 100%;
  }
  .bookmark {
    position: absolute;
    top: rem(8);
    right: rem(8);
    padding: rem(9) rem(10);
    background-color: var(--dark-blue-light);
    display: flex;
    align-items: center;
    border-radius: 50%;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: var(--white);
      svg path {
        stroke: #000 !important;
      }
    }
  }

  .bookmarked {
    svg path {
      fill: #fff;
    }
  }
  picture {
    display: block;
    margin-block-end: rem(8);
  }
  .meta,
  .category,
  .icon {
    display: flex;
    align-items: center;
  }
  .meta {
    column-gap: rem(14);
    margin-block-end: rem(4);
    > div {
      opacity: 0.75;
      position: relative;
    }
    > div + div:before {
      content: "\2022";
      display: inline-block;
      position: absolute;
      margin-left: rem(-9);
    }
  }
  .category {
    column-gap: rem(4);
  }
  h2 {
    font-size: rem(14);
    font-weight: 500;
    margin-block-end: 0;
  }

  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: rem(25);
    padding: rem(9) rem(24) rem(9) rem(9);
    font-size: rem(18);
    gap: rem(19);
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }
  &:hover .play {
    opacity: 1;
  }
}

.card--overlay .attributes {
  position: absolute;
  bottom: rem(16);
  left: rem(16);
}
.card--overlay picture {
  margin-block-end: 0;
}

@include breakpoint(medium) {
  .card {
    .bookmark {
      top: rem(16);
      right: rem(16);
    }
    .meta {
      font-size: rem(13);
      column-gap: rem(20);
      margin-block-end: rem(5);
      > div + div:before {
        margin-left: rem(-12);
      }
    }
    .category {
      column-gap: rem(6);
    }
    h2 {
      font-size: rem(18);
    }
    .card--overlay img {
      aspect-ratio: 16/9;
      object-position: bottom;
    }
  }
}

@include breakpoint(large) {
  .card {
    h2 {
      font-size: rem(24);
    }
    .meta {
      font-size: rem(15);
    }
  }
}
</style>

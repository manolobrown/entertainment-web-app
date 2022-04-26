<script setup>
import BookMarkIcon from "./icons/IconBookmarkEmpty.vue";
import MovieIcon from "./icons/IconCategoryMovie.vue";
import TVIcon from "./icons/IconCategoryTV.vue";
defineProps({
  classModifier: String,
});
</script>

<template>
  <div class="card" :class="classModifier">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="../assets/thumbnails/relentless/regular/medium.jpg"
      />
      <source
        media="(min-width: 1024px)"
        srcset="../assets/thumbnails/relentless/regular/large.jpg"
      />
      <img src="../assets/thumbnails/relentless/regular/small.jpg" alt="" />
    </picture>
    <div class="attributes">
      <div class="meta">
        <div class="year">2019</div>
        <div class="category">
          <div class="icon">
            <MovieIcon />
          </div>
          Movie
        </div>
        <div class="rating">E</div>
      </div>
      <h2>Title</h2>
    </div>

    <div class="bookmark">
      <BookMarkIcon />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
.card {
  position: relative;
  img {
    border-radius: rem(8);
    object-fit: cover;
    width: 100%;
  }
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

.card--overlay .attributes {
  position: absolute;
  bottom: rem(16);
  left: rem(16);
}
.card--overlay picture {
  margin-block-end: 0;
}

@include breakpoint(medium) {
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
</style>

<script setup>
import BookMarkIcon from "./icons/IconBookmarkEmpty.vue";
import MovieIcon from "./icons/IconCategoryMovie.vue";
import TVIcon from "./icons/IconCategoryTV.vue";
defineProps({
  // msg: {
  //   type: String,
  //   required: true,
  // },
});
</script>

<template>
  <div class="card">
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
    <div class="bookmark">
      <BookMarkIcon />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref, computed } from "vue";
import Card from "@/components/Card.vue";
defineProps({
  classModifier: String,
  movies: Object,
  isTrending: Boolean,
});
</script>

<template>
  <div class="card-slider vertical-scroll">
    <Card
      classModifier="card--overlay"
      v-for="movie in movies"
      :movie="movie"
      :isTrending="true"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
.card-slider {
  display: flex;
  column-gap: rem(16);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  margin-block-end: rem(24);
  margin-right: rem(-16);

  scroll-snap-type: inline mandatory;
  scroll-padding-inline: rem(16);

  padding: 0 0 rem(24);

  .card {
    flex: 0 0 rem(240);
    max-width: rem(240);
    width: 100%;
    scroll-snap-align: start;
  }
}

.vertical-scroll::-webkit-scrollbar-track {
  background-color: var(--semi-dark-blue);
  border-radius: 100vw;
  margin-block: 0.5em;
}
.vertical-scroll::-webkit-scrollbar {
  width: 2em;
  height: 1em;
}
.vertical-scroll::-webkit-scrollbar-thumb {
  background-color: var(--greyish-blue);
  border: 0.25em solid var(--greyish-blue);
  border-radius: 100vw;
}
@include breakpoint(medium) {
  .card-slider {
    column-gap: rem(40);
    margin-right: rem(-25);
    margin-block-end: rem(40);
    .card {
      flex: 0 0 rem(470);
      max-width: rem(470);
    }
  }
}
@include breakpoint(large) {
  .card-slider {
    margin-right: rem(-36);
  }
}
</style>

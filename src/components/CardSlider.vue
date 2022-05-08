<script setup>
import { ref } from "vue";
import Card from "@/components/Card.vue";
defineProps({
  classModifier: String,
  movies: Object,
  movieTrending: Boolean,
});
</script>

<template>
  <div class="card-slider">
    <Card
      classModifier="card--overlay"
      v-for="movie in movies"
      :movie="movie"
      :movieTrending="true"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
.card-slider {
  display: flex;
  column-gap: rem(16);
  overflow-x: scroll;
  margin-block-end: rem(24);
  margin-right: rem(-16);
  .card {
    flex: 0 0 rem(470);
    max-width: rem(470);
    width: 100%;
  }
}
@include breakpoint(medium) {
  .card-slider {
    column-gap: rem(40);
    margin-right: rem(-25);
    margin-block-end: rem(40);
  }
}
@include breakpoint(large) {
  .card-slider {
    margin-right: rem(-36);
  }
}
</style>

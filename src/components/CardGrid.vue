<script setup>
import { ref, computed } from "vue";
import Card from "@/components/Card.vue";

defineProps({
  classModifier: String,
  movies: Object,
});
</script>

<template>
  <div class="card-grid">
    <Card v-for="movie in movies" :movie="movie" />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(16);
  margin-block-end: rem(24);
}
@include breakpoint(medium) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: rem(30);
  }
}
@include breakpoint(xlarge) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: rem(40);
  }
}
</style>

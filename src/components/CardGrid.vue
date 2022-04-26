<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="card-grid">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(15);
  margin-block-end: rem(24);
}
@include breakpoint(medium) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: rem(30);
  }
}
</style>

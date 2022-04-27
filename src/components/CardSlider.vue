<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="card-slider">
    <Card classModifier="card--overlay" />
    <Card classModifier="card--overlay" />
    <Card classModifier="card--overlay" />
    <Card classModifier="card--overlay" />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
.card-slider {
  display: flex;
  column-gap: rem(15);
  overflow-x: scroll;
  margin-block-end: rem(24);
  .card {
    flex: 0 0 71%;
    max-width: 71%;
    width: 100%;
  }
}
@include breakpoint(medium) {
  .card-slider {
    column-gap: rem(40);
  }
}
@include breakpoint(large) {
  .card-slider {
    column-gap: rem(40);
    margin-right: rem(-36);
    margin-block-end: rem(40);
  }
}
@include breakpoint(xlarge) {
  .card-slider .card--overlay {
    flex: 0 0 rem(470);
    max-width: rem(470);
  }
}
</style>

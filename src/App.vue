<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-main">
      <RouterView />
    </div>
  </div>
</template>

<!-- 
  TODO: Components Needed
  --header
  movie card
  movie card overlay
  --search
  login
  signup  
  -->

<style lang="scss">
@use "@/assets/scss/util" as *;
@import "@/assets/scss/style.scss";
</style>

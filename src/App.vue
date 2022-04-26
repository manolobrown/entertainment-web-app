<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
</script>

<template>
  <Header />
  <Search />

  <RouterView />
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

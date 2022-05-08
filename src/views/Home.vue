<script setup>
import { ref } from "vue";
import CardSlider from "@/components/CardSlider.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";

const movies = ref(data);
</script>

<template>
  <main>
    <h2>Trending</h2>
    <!-- <CardSlider /> -->
    <h2>Recommended for you</h2>
    <CardGrid :movies="movies" />
  </main>
</template>

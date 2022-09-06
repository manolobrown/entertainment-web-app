<script setup>
import { ref, computed } from "vue";
import Search from "@/components/Search.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";
const movies = ref(data);
const getMovies = computed(() => {
  const movieTitles = [];
  movies.value.filter((title) => {
    if (title.category === "Movie") {
      movieTitles.push(title);
    }
  });

  return movieTitles;
});
</script>

<template>
  <main>
    <Search placeHolder="Search for movies" />
    <h2>Movies</h2>
    <CardGrid :movies="getMovies" />
  </main>
</template>

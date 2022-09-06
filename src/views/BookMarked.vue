<script setup>
import { ref, computed } from "vue";
import Search from "@/components/Search.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";
const movies = ref(data);
const getMovies = computed(() => {
  const movieTitles = [];
  movies.value.filter((title) => {
    if (title.category === "Movie" && title.isBookmarked) {
      movieTitles.push(title);
    }
  });

  return movieTitles;
});

const getTVSeries = computed(() => {
  const tvTitles = [];
  movies.value.filter((title) => {
    if (title.category === "TV Series" && title.isBookmarked) {
      tvTitles.push(title);
    }
  });

  return tvTitles;
});
</script>

<template>
  <main>
    <Search placeHolder="Search for bookmarked movies or TV series" />
    <h2>Bookmarked Movies</h2>
    <CardGrid :movies="getMovies" />

    <h2>Bookmarked TV Series</h2>
    <CardGrid :movies="getTVSeries" />
  </main>
</template>

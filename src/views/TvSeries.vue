<script setup>
import { ref, computed } from "vue";
import Search from "@/components/Search.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";
const movies = ref(data);
const getTVSeries = computed(() => {
  const tvTitles = [];
  movies.value.filter((title) => {
    if (title.category === "TV Series") {
      tvTitles.push(title);
    }
  });

  return tvTitles;
});
</script>

<template>
  <main>
    <Search placeHolder="Search for TV series" />
    <h2>TV Series</h2>
    <CardGrid :movies="getTVSeries" />
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import Search from "@/components/Search.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";
const search = ref("");
const getData = ref(data);
const movies = ref([]);

const getMovies = computed(() => {
  const movieTitles = [];
  getData.value.filter((title) => {
    if (title.category === "Movie") {
      movieTitles.push(title);
    }
  });

  return movieTitles;
});

const filterItems = (arr, query) => {
  const searchData = [];
  arr.filter((el) => {
    const movieTitle = el.title.toLowerCase().includes(query.toLowerCase());
    if (movieTitle && el.category === "Movie") {
      searchData.push(el);
    }
  });

  return (movies.value = searchData);
};

const searchData = computed(() => {
  if (search.value != "") {
    filterItems(getData.value, search.value);
  }
});
</script>

<template>
  <main>
    <Search
      @search-data="searchData"
      placeHolder="Search for movies"
      v-model="search"
    />
    <div v-if="movies.length && search.length">
      <h2>Found {{ movies.length }} results for {{ search }}</h2>
      <CardGrid :movies="movies" />
    </div>
    <div v-else>
      <h2>Movies</h2>
      <CardGrid :movies="getMovies" />
    </div>
  </main>
</template>

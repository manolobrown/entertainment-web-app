<script setup>
import { ref, computed } from "vue";
import Search from "@/components/Search.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";
const search = ref("");
const getData = ref(data);
const movies = ref([]);

const getTVSeries = computed(() => {
  const tvTitles = [];
  getData.value.filter((title) => {
    if (title.category === "TV Series") {
      tvTitles.push(title);
    }
  });

  return tvTitles;
});
const filterItems = (arr, query) => {
  const searchData = [];
  arr.filter((el) => {
    const movieTitle = el.title.toLowerCase().includes(query.toLowerCase());
    if (movieTitle && el.category === "TV Series") {
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
      placeHolder="Search for TV series"
      v-model="search"
    />
    <div v-if="movies.length && search.length">
      <h2>Found {{ movies.length }} results for {{ search }}</h2>
      <CardGrid :movies="movies" />
    </div>
    <div v-else>
      <h2>TV Series</h2>
      <CardGrid :movies="getTVSeries" />
    </div>
  </main>
</template>

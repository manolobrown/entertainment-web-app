<script setup>
import { ref, computed } from "vue";
import Search from "@/components/Search.vue";
import CardSlider from "@/components/CardSlider.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";

const search = ref("");
const getData = ref(data);
const movies = ref([]);

const getTrendingTitles = computed(() => {
  const trendingTitles = [];
  getData.value.filter((title) => {
    if (title.isTrending) {
      trendingTitles.push(title);
    }
  });

  return trendingTitles;
});

const getRecommendedTitles = computed(() => {
  const recommendedTitles = [];
  getData.value.filter((title) => {
    if (!title.isTrending) {
      recommendedTitles.push(title);
    }
  });

  return recommendedTitles;
});

const filterItems = (arr, query) => {
  const searchData = [];
  arr.filter((el) => {
    const movieTitle = el.title.toLowerCase().includes(query.toLowerCase());
    if (movieTitle) {
      searchData.push(el);
    }
  });

  return (movies.value = searchData);
};

const searchData = computed(() => {
  if (search.value != "") {
    return filterItems(getData.value, search.value);
  }
});
</script>

<template>
  <main>
    <Search
      @search-data="searchData"
      placeHolder="Search for movies or TV series"
      v-model="search"
    />
    <div v-if="movies.length && search.length">
      <h2>Found {{ movies.length }} results for {{ search }}</h2>
      <CardGrid :movies="movies" />
    </div>
    <div v-else>
      <h2>Trending</h2>
      <CardSlider :movies="getTrendingTitles" />
      <h2>Recommended for you</h2>
      <CardGrid :movies="getRecommendedTitles" />
    </div>
  </main>
</template>

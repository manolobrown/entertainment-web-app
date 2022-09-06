<script setup>
import { ref, computed } from "vue";
import Search from "@/components/Search.vue";
import CardSlider from "@/components/CardSlider.vue";
import CardGrid from "@/components/CardGrid.vue";
import data from "../assets/data.json";
const movies = ref(data);

const getTrendingTitles = computed(() => {
  const trendingTitles = [];
  movies.value.filter((title) => {
    if (title.isTrending) {
      trendingTitles.push(title);
    }
  });

  return trendingTitles;
});

const getRecommendedTitles = computed(() => {
  const recommendedTitles = [];
  movies.value.filter((title) => {
    if (!title.isTrending) {
      recommendedTitles.push(title);
    }
  });

  return recommendedTitles;
});
</script>

<template>
  <main>
    <Search placeHolder="Search for movies or TV series" />
    <h2>Trending</h2>
    <CardSlider :movies="getTrendingTitles" />
    <h2>Recommended for you</h2>
    <CardGrid :movies="getRecommendedTitles" />
  </main>
</template>

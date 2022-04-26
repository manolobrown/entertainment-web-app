<script setup>
import SearchIcon from "./icons/IconSearch.vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="search">
    <button class="btn btn--search">
      <SearchIcon />
    </button>
    <input type="text" placeholder="Search for movies or TV series" />
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import SearchIcon from "./icons/IconSearch.vue";
</script>

<template>
  <div class="search">
    <button class="btn btn--search">
      <SearchIcon />
    </button>
    <input type="text" placeholder="Search for movies or TV series" />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
button,
input {
  background-color: transparent;
  border: 0;
}
button {
  padding: rem(8);
  margin-left: rem(-8);
  margin-right: rem(8);
}
.search {
  display: flex;
  margin-block-end: rem(24);
}
input {
  display: inline-block;
  width: 100%;
}
</style>

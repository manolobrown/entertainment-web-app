<script setup>
import { ref, computed } from "vue";
import SearchIcon from "./icons/IconSearch.vue";
defineProps({
  placeHolder: String,
});
</script>

<template>
  <div class="search">
    <button class="btn btn--search">
      <SearchIcon />
    </button>
    <input type="text" :placeholder="placeHolder" />
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
  cursor: pointer;
  caret-color: var(--red);
  transition: all 0.3s ease-in-out;
  &:focus,
  &:focus-visible,
  &:hover {
    outline: 0;
    border-bottom: 1px solid var(--greyish-blue);
  }
}
</style>

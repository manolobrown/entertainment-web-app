<script setup>
import { ref, computed } from "vue";
import SearchIcon from "./icons/IconSearch.vue";
defineProps({
  placeHolder: String,
  modelValue: String,
});
defineEmits(["update:modelValue", "searchData"]);
</script>

<template>
  <form @submit.prevent="$emit('searchData')" class="search">
    <button type="submit" class="btn btn--search">
      <SearchIcon />
    </button>
    <input
      type="text"
      :placeholder="placeHolder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </form>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
button,
input {
  background-color: transparent;
  border: 0;
  cursor: pointer;
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

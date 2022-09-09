<script setup>
import { onBeforeMount, onUnmounted, ref } from "vue";
import LogoIcon from "@/components/icons/IconLogo.vue";

defineProps({
  heading: String,
  button: String,
  message: String,
  messageUrl: String,
  messageUrlText: String,
  isCreatePassword: Boolean,
});

onBeforeMount(() => {
  document.body.classList.add("disable-header", "login");
});
onUnmounted(() => {
  document.body.classList.remove("disable-header", "login");
});
</script>

<template>
  <div class="form-wrapper">
    <LogoIcon />
    <form action="">
      <h2>{{ heading }}</h2>
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input
        type="password"
        placeholder="Repeat Password"
        v-if="isCreatePassword"
      />
      <button>{{ button }}</button>
      <p>
        {{ message }} <a :href="messageUrl">{{ messageUrlText }}</a>
      </p>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/util" as *;
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: rem(58.4);

  svg {
    margin: 0 auto;
  }
}
form {
  display: flex;
  flex-direction: column;
  gap: rem(24);
  border-radius: rem(20);
  background-color: var(--semi-dark-blue);
  padding: rem(32);
}
button {
  background-color: var(--red);
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: rem(6);
  font-size: rem(15);
  padding: rem(15);
  width: 100%;
  max-width: 100%;
  margin-top: rem(16);
  cursor: pointer;

  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--white);
    color: var(--semi-dark-blue);
  }
}

input {
  display: block;
  width: 100%;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid var(--greyish-blue);
  caret-color: var(--red);
  transition: all 0.3s ease-in-out;
  padding: 0 0 rem(18) rem(16);
  &,
  &::placeholder {
    font-size: rem(15);
  }
  &:focus,
  &:focus-visible,
  &:hover {
    outline: 0;
    border-bottom: 1px solid var(--white);
  }
}
a {
  color: var(--red);
}
p {
  margin: 0;
  text-align: center;
}
</style>

<script setup>
import { ref } from "vue";
import Form from "@/components/Form.vue";

const formElements = {
  heading: "Login",
  button: "Login to your account",
  message: "Don't have an account?",
  messageUrl: "/sign-up",
  messageUrlText: "Sign Up",
  isCreatePassword: false,
};
</script>

<template>
  <main>
    <Form v-bind="formElements" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Form from "@/components/Form.vue";

const formElements = {
  heading: "Sign Up",
  button: "Create an account",
  message: "Already have an account?",
  messageUrl: "/login",
  messageUrlText: "Login",
  isCreatePassword: true,
};
</script>

<template>
  <main>
    <Form v-bind="formElements" />
  </main>
</template>

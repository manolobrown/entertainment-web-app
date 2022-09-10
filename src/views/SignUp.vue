<script setup>
import { ref } from "vue";
import Form from "@/components/Form.vue";

const form = ref({
  email: "",
  password: "",
  repeatPassword: "",
});

const formElements = {
  heading: "Sign Up",
  button: "Create an account",
  message: "Already have an account?",
  messageUrl: "/login",
  messageUrlText: "Login",
  isCreatePassword: true,
};

const submitForm = () => {
  let user = {
    email: form.value.email,
    password: form.value.password,
    repeatPassword: form.value.repeatPassword,
  };

  if (user.email === "") {
    document
      .querySelector("input[type=email]")
      .closest("div")
      .classList.add("error");
  }

  if (user.password === "") {
    document.querySelector(".password-wrap").classList.add("error");
  }

  if (user.repeatPassword === "") {
    document.querySelector(".confirm-password-wrap").classList.add("error");
  }

  if (user.email !== "" && user.password === user.repeatPassword) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};
</script>

<template>
  <main>
    <Form
      @submit-form="submitForm"
      v-bind="formElements"
      v-model:email="form.email"
      v-model:password="form.password"
      v-model:repeatPassword="form.repeatPassword"
    />
  </main>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Form from "@/components/Form.vue";

const form = ref({
  email: "",
  password: "",
});

let formElements = {
  heading: "Login",
  button: "Login to your account",
  message: "Don't have an account?",
  messageUrl: "/sign-up",
  messageUrlText: "Sign Up",
  isCreatePassword: false,
  isValid: false,
};

const getUser = localStorage.getItem("user");
const userData = JSON.parse(getUser);

const submitForm = () => {
  let user = {
    email: form.value.email,
    password: form.value.password,
  };

  if (user.email === "") {
    document
      .querySelector("input[type=email]")
      .closest("div")
      .classList.add("error");
  }

  if (user.password === "") {
    document
      .querySelector("input[type=password]")
      .closest("div")
      .classList.add("error");
  }

  if (user.password !== "" && user.email !== "") {
    if (!userData) return;
    if (user.email === userData.email) {
      console.log(userData);
    }
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
    />
  </main>
</template>

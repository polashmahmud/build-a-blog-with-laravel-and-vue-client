<script setup>
import {reactive} from "vue";
import useAuth from "../auth/useAuth.js";

const form = reactive({
  email: 'polashmahmud@gmail.com',
  password: 'password'
})

const {login, getUser: user, getAuthenticated: authenticated} = useAuth()

</script>

<template>
  {{ user }} {{ authenticated }}
  <form v-on:submit.prevent="login(form)">
    <button type="submit">Login</button>
  </form>
</template>
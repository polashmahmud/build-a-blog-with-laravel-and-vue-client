<script setup>
import {reactive} from "vue";
import useAuth from "../auth/useAuth.js";
import router from "../router/index.js";

const form = reactive({
  email: '',
  password: ''
})

const {login, getUser: user, getAuthenticated: authenticated, errors} = useAuth()

const handleLogin = () => {
  login(form).then(() => {
    router.push({ name: 'admin.post'} )
  })
}

</script>

<template>
  <h1 class="text-xl font-medium text-center mb-6">Login</h1>
  <form class="max-w-lg mx-auto border rounded-lg p-6" v-on:submit.prevent="handleLogin">
    <div class="mb-3">
      <label for="email" class="leading-7 text-gray-600 text-sm">Email</label>
      <input v-model="form.email" type="email" name="email" id="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      <div v-if="errors.email">
        <p class="text-xs text-red-500">{{ errors.email[0] }}</p>
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="leading-7 text-gray-600 text-sm">Password</label>
      <input v-model="form.password" type="password" name="password" id="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      <div v-if="errors.password">
        <p class="text-xs text-red-500">{{ errors.password[0] }}</p>
      </div>
    </div>
    <button type="submit" class="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
  </form>
</template>
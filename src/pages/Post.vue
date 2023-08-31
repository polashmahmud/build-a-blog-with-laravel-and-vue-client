<script setup>
import usePosts from "../api/usePosts.js";
import { onMounted } from "vue";

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const {post, fetchPost} = usePosts(props.slug)

onMounted(fetchPost)

</script>

<template>
  <h1 class="block text-center text-4xl sm:text-6xl leading-10 font-extrabold tracking-tight text-gray-900">
    {{ post.title }}
  </h1>
  <div class="prose lg:prose-xl mt-16 text-gray-500" v-html="post.body"></div>
</template>

<style scoped>

</style>
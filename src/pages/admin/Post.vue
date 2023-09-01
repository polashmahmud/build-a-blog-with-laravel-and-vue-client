<script setup>
import useAdminPosts from "../../api/useAdminPosts.js";
import { onMounted } from "vue";

const {posts, fetchPosts} = useAdminPosts()

onMounted(fetchPosts)
</script>

<template>
  <div class="space-y-16">
    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ri
 focus:ring-offset-2 focus:ring-blue-500">New Post
    </button>

    <div v-for="post in posts" :key="post.uuid">
      <div class="flex items-baseline sm:justify-between flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 space-y-3 sm:space-y-0">
        <p class="text-xl font-bold tracking-tight text-gray-900">{{ post.title }}</p>
        <div class="flex items-center space-x-6">
          <p
              class="text-base text-gray-500"
              :class="{ 'bg-green-100 text-green-800' : post.published, 'bg-gray-100 text-gray-800': !post.published}"
          >
            {{ post.published ? 'Published' : 'Unpublished'}}
          </p>
          <div>
            <a href="" class="text-sm font-medium">Edit</a>
          </div>
          <div>
            <button class="text-sm font-medium">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
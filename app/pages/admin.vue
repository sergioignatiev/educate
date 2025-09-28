<template>
  <TheWrapper>
    <nav class="flex flex-col md:flex-row gap-2  mb-4">
      <NuxtLink
        to="/admin"
        class="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
        active-class="bg-blue-600 text-white"
        exact
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/admin/list"
        class="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
        active-class="bg-blue-600 text-white"
        exact
      >
        List
      </NuxtLink>
    </nav>

    <!-- Контент дочерней страницы -->
    <div class="bg-gray-50 py-4 rounded-md shadow">
      <NuxtPage />
    </div>
  </TheWrapper>
</template>

<script lang="ts" setup>
// Нет логики, просто родительская страница
</script>

<style scoped>
.router-link-active{
  color:red
}
</style>
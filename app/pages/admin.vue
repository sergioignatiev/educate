<template>
  <TheWrapper class="py-16">
    <nav class="flex flex-col gap-6 mb-6 md:flex-row">
      <NuxtLink
        class="pb-1 text-gray-700 transition-colors hover:text-blue-500"
        to="/admin"
      >
        Админка
      </NuxtLink>

      <NuxtLink
        class="pb-1 text-gray-700 transition-colors hover:text-blue-500"
        to="/admin/list"
      >
        Список товаров
      </NuxtLink>
    </nav>

    <div class="bg-gray-50 py-4 rounded-md shadow">
      <NuxtPage />
    </div>
  </TheWrapper>
</template>

<script lang="ts" setup>
// Нет логики, просто родительская страница
</script>

<style scoped>
/* Стили для активной ссылки */
.router-link-exact-active {
  color: blue;
  font-weight: 700;
}
</style>
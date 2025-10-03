<template>
  <TheWrapper class="py-16">
    <nav class="flex flex-col md:flex-row gap-6 mb-6">
      <NuxtLink
        to="/admin"
        class="text-gray-700 hover:text-blue-500 transition-colors pb-1"
        
     
      >
        Админка
      </NuxtLink>

      <NuxtLink
        to="/admin/list"
        class="text-gray-700 hover:text-blue-500 transition-colors pb-1"
       
      
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
.router-link-exact-active{
  color:blue;
  font-weight: 700;
}
</style>
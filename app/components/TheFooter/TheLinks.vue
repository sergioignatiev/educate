<template>
  <div class="flex flex-col pt-4 sm:pt-0">
    <div class="font-bold mb-5"><slot/></div>
    
    <NuxtLink 
      v-for="l in links" 
      :key="l.id" 
      class="text-sm text-gray-700 font-bold hover:text-blue-600 mb-2 transition-colors duration-200" 
      :to="l.link"
    >
      {{ l.name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
// Определяем интерфейс для объекта ссылки
interface Link {
  id: number;
  name: string;
  link: string;
}

// Определяем и типизируем пропсы
const { links } = defineProps<{
  links: Link[];
}>();
</script>
<style scoped>

</style>
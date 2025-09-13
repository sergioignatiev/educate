<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { type User } from '~/interfaces/user';
const items = ref<User[]>([]);

const fetchItems = async () => {
  items.value = await $fetch('/api/items/get');
};
onMounted(()=>{
fetchItems();
})




const reversedItems = computed(() => [...items.value].reverse());

</script>

<template>
  <div class="flex flex-wrap gap-4">

   
   <section class="bg-blue-200 p-2 rounded-sm" v-if="items.length>0" v-for="item in reversedItems" :key="item.id">

    <h2>hello {{ item.name }}</h2>
    <p>{{ item.description }}</p>
    <p>{{ item.title }}</p>
  
  </section>
  <h1 v-else>...Loading</h1>
  </div>
</template>

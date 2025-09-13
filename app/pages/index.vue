<script setup lang="ts">
import { ref } from 'vue';

const items = ref<any[]>([]);

const fetchItems = async () => {
  items.value = await $fetch('/api/items/get');
};


fetchItems();

const reversedItems = computed(() => [...items.value].reverse());

</script>

<template>
  <div>

   
   <section v-for="item in reversedItems" :key="item">

    <h2>hello {{ item.name }}</h2>
    <p>{{ item.description }}</p>
  
  </section>
  </div>
</template>

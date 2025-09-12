<script setup lang="ts">
import { ref } from 'vue';

const items = ref<any[]>([]);

const fetchItems = async () => {
  items.value = await $fetch('/api/items/get');
};

const addItem = async () => {
  await $fetch('/api/items/post', {
    method: 'POST',
    body: { name: name.value, description: 'Hello',title:"?path"},
  });
  name.value=''
  fetchItems();
};

fetchItems();
const name=ref('')
const reversedItems = computed(() => [...items.value].reverse());

</script>

<template>
  <div>
    <input type="text" v-model="name">
    <button @click="addItem">Добавить</button>
   <section v-for="item in reversedItems" :key="item">

    <h2>hello {{ item }}</h2>
  
  </section>
  </div>
</template>

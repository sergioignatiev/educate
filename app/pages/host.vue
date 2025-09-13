<script setup lang="ts">
import { ref } from 'vue';

const items = ref<any[]>([]);

const fetchItems = async () => {
  items.value = await $fetch('/api/items/get');
};

const addItem = async () => {
  await $fetch('/api/items/post', {
    method: 'POST',
    body: { name: name.value, description: 'Hello',title:"?path",price:'5'},
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

    <h2 v-if="item">hello {{ item }}</h2>
  <h1 v-else>loading</h1>
  </section>
  </div>
</template>

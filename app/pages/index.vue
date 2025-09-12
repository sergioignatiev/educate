<script setup lang="ts">
import { ref } from 'vue';

const items = ref<any[]>([]);

const fetchItems = async () => {
  items.value = await $fetch('/api/items/get');
};

const addItem = async () => {
  await $fetch('/api/items/post', {
    method: 'POST',
    body: { name: name.value, description: 'Hello' },
  });
  name.value=''
  fetchItems();
};

fetchItems();
const name=ref('')
</script>

<template>
  <div>
    <input type="text" v-model="name">
    <button @click="addItem">Добавить</button>
   <section v-for="item in items">

    <h2>hello {{ item.name}}</h2>
  
  </section>
  </div>
</template>

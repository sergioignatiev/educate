<script setup lang="ts">
import { ref } from 'vue';
import {nanoid} from 'nanoid'
import {type User} from '@/interfaces/user'
const items = ref<User[]>([]);

const fetchItems = async () => {
  items.value = await $fetch('/api/items/get');
};

const addItem = async () => {
  await $fetch('/api/items/post', {
    method: 'POST',
    body: {id:nanoid(), name: name.value, description: 'Hello',title:"?path",price:'5'},
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
    <input type="text" class="bg-slate-100" v-model="name">
    <button @click="addItem" class="bg-blue-700 px-4 py-1 text-white rounded-sm">ADD</button>
   <section v-for="item in reversedItems" :key="item.id">

    <p v-if="item"> {{ item }}</p>
  <h1 v-else>loading</h1>
  </section>
  </div>
</template>

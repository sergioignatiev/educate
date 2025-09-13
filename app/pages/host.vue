<script setup lang="ts">
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import { useCounterStore } from '../stores/host';
import { storeToRefs } from 'pinia';
import { type User } from '~/interfaces/user';
const store=useCounterStore()
const {data}=storeToRefs(store)
const items = ref<any[]>([]);
const fetchItems = async () => {
  items.value = await $fetch<User[]>('/api/items/get');
};

const addItem = async () => {
  await $fetch('/api/items/post', {
    method: 'POST',
    body: { id: nanoid(), name: name.value,image:image.value, description: 'Hello', title: '?path', price: 7, info: 'TEST' },
  });
  name.value = '';
  image.value=''
  fetchItems();
};

const clearItems = async () => {
  await $fetch('/api/items/delete', { method: 'DELETE' });
  await fetchItems(); // обновляем список
  alert('bugs');
};

const deleteItem = async (name: string) => {
  await $fetch(`/api/items/delete-one?name=${encodeURIComponent(name)}`, { method: 'POST' });
  await fetchItems(); // обновляем список
};

fetchItems();
const name = ref('');
const image=ref('')
const reversedItems = computed(() => [...items.value].reverse());

</script>

<template>
  <div>
    <h1 @click="clearItems">DELETE ALL</h1>
    <input type="text" class="bg-slate-100" v-model="name" placeholder="name" />
    <input type="text" class="bg-slate-100" v-model="image" placeholder="ImageUrl">
    <button @click="addItem" class="bg-blue-700 px-4 py-1 text-white rounded-sm">ADD</button>
    <section v-for="item in reversedItems" :key="item.id">
      <button @click="deleteItem(item.name)" class="text-white bg-blue-900 px-4 py-2 rounded-md">DELETE ITEM</button>
      <p v-if="item">{{ item }}</p>
      <h1 v-else>loading</h1>
    </section>
  </div>
</template>
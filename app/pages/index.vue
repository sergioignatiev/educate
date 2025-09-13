<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { type User } from '~/interfaces/user';
const items = ref<any[]>([]);

const fetchItems = async () => {
  items.value = await $fetch<User[]>('/api/items/get');
};

onMounted(() => {
  fetchItems();
});

const reversedItems = computed(() => [...items.value].reverse());
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <section v-if="items">
      <div v-if="items.length > 0" v-for="item in reversedItems" :key="item.id" class="bg-blue-200 p-2 rounded-sm">
        <h2>hello {{ item.name }} {{ item.price }}</h2>
        <p>{{ item.description }}</p>
       <img :src="item.image" :alt="item.title">
      </div>
      <h1 v-else>Nothing is here</h1>
    </section>
    <h1 v-else>...Loading</h1>
  </div>
</template>
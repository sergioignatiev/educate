<template>
  <div>
    <section v-if="data.length" class="flex flex-wrap justify-center gap-1 p-4">
      <div v-for="item in reversedItems" :key="item.id" class="flex flex-col">
        <product-card v-bind="item" />
      </div>
    </section>
    <p v-else class="p-4">Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCounterStore, storeToRefs } from '#imports';
import ProductCard from '~/components/productElements/ProductCard.vue';

const store = useCounterStore();
const { data } = storeToRefs(store);

onMounted(() => {
  if (data.value.length === 0) store.fetchItems();
});

const reversedItems = computed(() => [...data.value].reverse());

useSeoMeta({
  title: 'BALD-E | ВСЕ ТОВАРЫ',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
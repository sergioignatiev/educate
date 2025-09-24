<template>
  <div class="flex flex-col md:flex-row bg-gray-50 min-h-screen py-16 relative">
    
    <products-aside
      v-model:price="globalRange"
      v-model:categories="globalCategories"
      :product="data"
      @reset="reset"
:visibility="asideVisibility"
    />

    <div class="flex-1">
      <div class="md:invisible bg-blue-100 text-end" @click="asideVisibility=!asideVisibility">#</div>
      <main class="flex justify-start flex-wrap gap-4">
        <product-card
          v-for="item in filtered"
          :key="item.id"
          v-bind="item"
        />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCounterStore, storeToRefs } from '#imports';

import ProductCard from '~/components/productElements/ProductCard.vue';
import ProductsAside from '~/components/productElements/ProductsAside.vue';

const store = useCounterStore();
const { data } = storeToRefs(store);

const globalRange = ref(1000);
const globalCategories = ref<string[]>([]);

const asideVisibility=ref(true)
// Сначала фильтр
const filtered = computed(() => {
  const reverse=[...data.value].reverse()
  const price = reverse.filter((i) => i.price as number <= globalRange.value);
  if (globalCategories.value.length < 1) {
    return price;
  } else return price.filter((i) => globalCategories.value.includes(i.category));
});
const reset=()=>{
 globalRange.value=1000
 globalCategories.value=[]
}
// Затем SEO
useSeoMeta({
  title: 'BALD-E | ВСЕ ТОВАРЫ',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

// И потом onMounted
onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems();
  }
});
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>

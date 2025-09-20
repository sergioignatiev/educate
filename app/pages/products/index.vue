<template>
  <div class="flex flex-col md:flex-row bg-gray-50 min-h-screen py-16 relative">
    <aside
      :class="{ 'translate-x-[-100%] ': asideVisibility }"
      class="md:translate-x-0 md:w-fit md:min-w-[250px] w-3/4 pr-8 p-4 mb-4 md:mb-0 md:relative fixed left-0 top-0 md:bg-transparent bg-slate-100"
    >
<h2 class="text-lg font-semibold mb-4">Цена</h2>
<div class="">
  <label for="price">Цена до {{ price }}</label>
  <h1>@{{ filteredByPrice }}</h1>
<input type="range" class="w-full"  min="0" max="1000" v-model="price" name="price" id="prce">

</div>

      <h2 class="text-lg font-semibold mb-4">Категории</h2>
      <div class="flex flex-col gap-2">
        <div v-for="category in uniqueCategories" :key="category" class="flex items-center gap-2">
          <input
            @click="filter(category)"
            type="checkbox"
            :name="category"
            :id="category"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <label :for="category" class="text-gray-700 capitalize">{{ category }}</label>
        </div>
      </div>
    </aside>

    <div class="">
      <div class="md:invisible bg-blue-100 text-end">
        <p @click="asideVisibility = !asideVisibility">US</p>
      </div>
      <main class="flex justify-start flex-wrap gap-4">
        <product-card
          v-for="item in filteredItems"
          :key="item.id"
          v-bind="item"
        />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCounterStore, storeToRefs } from '#imports';
import { type User } from '~/interfaces/user';
import ProductCard from '~/components/productElements/ProductCard.vue';

const store = useCounterStore();
const { data } = storeToRefs(store);
const asideVisibility = ref(true);
const uniqueCategories = computed(() => [
  ...new Set(data.value.map((item: User) => item.category)),
]);
const price=ref(1000)
onMounted(() => {
  if (data.value.length === 0) store.fetchItems();
});

const reversedItems = computed(() => [...data.value].reverse());
const filtered = ref<string[]>([]);
const filteredItems = computed(() => {
  
  if (filtered.value.length === 0) {
    return reversedItems.value;
  }
  return reversedItems.value.filter((item) => filtered.value.includes(item.category));
});
const filteredByPrice=computed(()=>{
return data.value.filter((i:User)=>i.price as number>price.value)
})

function filter(category: string) {
  if (filtered.value.includes(category)) {
    filtered.value.splice(filtered.value.indexOf(category), 1);
  } else {
    filtered.value.push(category);
  }
}

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
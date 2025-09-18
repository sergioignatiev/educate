<template>
  <div class="p-10">
    <NuxtLink to="/products" class=" mb-8 inline-block text-black hover:underline">
      ← К списку продуктов
    </NuxtLink>

    <section v-if="item" class="flex flex-col gap-8 md:flex-row">
      <div class="flex flex-col gap-1">
        <div
         
         
        v-for="(img, id) in item.image" :key="id" @mouseover="handleImageHover(id)">
          <img
  width="50"
  height="50"
  class="h-[50px] w-[50px] rounded-md  border-slate-700"
  :src="img"
  alt="img"
  :class="{ 'border-solid border-2 border-black': id === index }"
/>

        </div>
      </div>
      <div class="flex w-full items-start justify-center md:w-1/2">
        <img
          :src="item.image[index]"
          :alt="item.title"
          class="h-[80vh] w-auto rounded-md object-contain shadow-lg"
        />
      </div>

      <div class="w-full rounded-md bg-[blue] p-6 shadow-lg md:w-1/2">
        <div class="mb-6 mt-6">
          <p>{{ item?.seller }}</p>
          <button @click="store.addToBasket(item)" class="w-full bg-[#FFD814] text-black font-semibold py-2 rounded-full shadow-md hover:bg-[#F7CA00] mb-2">Добавить в корзину</button>
          <button class="w-full bg-[#FFA41C] text-black font-semibold py-2 rounded-full shadow-md hover:bg-[#FA9800]">Купить сейчас</button>
        </div>
        
        <h1 class="mb-1 text-2xl font-bold md:text-3xl">
          {{ item.title }}
        </h1>
        <div class="mb-4 flex items-center">
          <span class="text-yellow-400">★★★★★</span>
          <span class="ml-2 text-sm text-gray-600">5.0</span>
          <span class="ml-2 text-sm text-gray-500">1 отзыв</span>
        </div>

        <p class="mb-4 text-xl font-semibold text-[#B12704]">
          ${{ item.price }}
        </p>

        <p class="mb-6 text-sm text-gray-600">
          <span class="text-blue-600 hover:underline">Бесплатный возврат</span>
        </p>

        <p class="mb-1 text-sm font-semibold">
          Категория: <span class="font-normal">{{ item.category }}</span>
        </p>

        <div class="border-t border-gray-300 pt-6">
          <h3 class="mb-2 text-lg font-bold">Об этом товаре</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <p v-else class="mt-10 text-center text-lg">Загрузка...</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCounterStore } from '../../stores/host';
import { storeToRefs } from 'pinia';
import { type User } from '~/interfaces/user';
import { ref } from 'vue';

function handleImageHover(x: number) {
  index.value = x;
}
const index = ref(0);
const store = useCounterStore();
const { data } = storeToRefs(store);

const route = useRoute();
const id = computed(() => route.params.id as string);

const item = computed(() => data.value.find((i: User) => i.id === id.value));

onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems();
  }
});
useSeoMeta({
  title: `BALD-E | ${item.value?.title || ''}`,

  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
<template>
  <div class="p-4 sm:p-8 md:p-12 lg:p-16 bg-gray-50">
    
<ProductIdLink/>
    <div v-if="item" class="bg-white rounded-lg shadow-lg">
      <div class="flex flex-col md:flex-row">
        <div class="p-6 md:p-8 lg:p-12 w-full md:w-1/2 md:sticky md:top-4 md:h-screen">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="flex md:flex-col gap-2 order-2 md:order-1 mt-4 md:mt-0">
              <div v-for="(img, id) in item.image" :key="id" @mouseover="handleImageHover(id)" class="cursor-pointer">
                <img
                  width="60"
                  height="60"
                  class="h-[60px] w-[60px] rounded-md object-cover transition-all duration-300 border-slate-700"
                  :src="img"
                  :alt="`Thumbnail of ${item.title}`"
                  :class="{ 'border-solid border-2 border-black': id === index }"
                />
              </div>
            </div>
            <div class="flex-1 order-1 md:order-2 flex items-center justify-center w-full">
              <img
                :src="item.image[index]"
                :alt="item.title"
                class="w-full h-auto max-h-[70vh] rounded-md object-contain"
              />
            </div>
          </div>
        </div>

        <div class="p-6 md:p-8 lg:p-12 w-full md:w-1/2 flex flex-col justify-between">
          <div class="space-y-4">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
              {{ item.title }}
            </h1>
            <p class="text-sm sm:text-base font-medium text-gray-500">{{ item?.seller }}</p>

            <div class="flex items-center text-sm sm:text-base text-gray-600">
              <span class="text-yellow-400">★★★★★</span>
              <span class="ml-2 font-semibold">5.0</span>
              <span class="ml-2 text-gray-400">|</span>
              <span class="ml-2">1 отзыв</span>
            </div>

            <p class="text-2xl sm:text-3xl font-bold text-gray-800">
              ${{ item.price }}
            </p>

            <p class="text-sm text-gray-500">
              <span class="text-blue-500 hover:underline cursor-pointer">Бесплатный возврат</span>
            </p>
            
            <div class="mb-4 pt-4">
              <span class="text-sm font-semibold text-gray-600">Количество в корзине: </span>
              <span class="text-lg font-bold text-black">{{ quantityInBasket?.quantity || 0 }}</span>
            </div>

            <p class="text-sm font-semibold text-gray-600">
              Категория: <span class="font-normal capitalize">{{ item.category }}</span>
            </p>

            <div class="border-t border-gray-200 pt-6 mt-6">
              <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-2">Об этом товаре</h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
          
          <div class="mt-8 flex items-center gap-4">
            <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden h-12 w-32">
              <button @click="totalInBasket>1?totalInBasket++:totalInBasket=0"  class="w-1/3 text-2xl text-gray-600 flex justify-center items-center h-full hover:bg-gray-100 transition-colors duration-200">
                −
              </button>
              <input
                type="number"
                class="w-1/3 text-lg text-center font-semibold border-none outline-none h-full"
                v-model="totalInBasket"
               min="1"
               max="10"
              />
              <button @click="totalInBasket++"  class="w-1/3 text-2xl text-gray-600 flex justify-center items-center h-full hover:bg-gray-100 transition-colors duration-200">
                +
              </button>
            </div>
            <button @click="addToBasketAndReset" class="flex-1 bg-gray-800 text-white font-semibold py-3 rounded-md shadow-md hover:bg-gray-900 transition-colors duration-200">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="mt-10 text-center text-xl text-gray-600">Загрузка...</p>
  </div>
</template>

<script lang="ts" setup>
import ProductIdLink from '~/components/productElements/ProductIdLink.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCounterStore } from '../../stores/host';
import { storeToRefs } from 'pinia';
import { type User } from '~/interfaces/user';



const store = useCounterStore();
const { data, basket } = storeToRefs(store);

const route = useRoute();
const id = computed(() => route.params.id as string);

const item = computed(() => data.value.find((i: User) => i.id === id.value));
const quantityInBasket = computed(() => basket.value?.find((q: User) => q.id === id.value));


function handleImageHover(x: number) {
  index.value = x;
}
const totalInBasket=ref(1)
const index = ref(0);

const addToBasketAndReset = () => {
if(item.value){
  store.addToBasket(item.value,totalInBasket.value);
  totalInBasket.value=1
}
};
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
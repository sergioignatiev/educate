<template>
  <TheWrapper class="pb-36">
    <ProductIdLink class="py-8" />

    <div
      v-if="item"
      class="bg-white rounded-lg shadow-lg"
    >
      <div class="flex flex-col md:flex-row">
        <div class="p-6 w-full md:w-1/2 md:sticky md:top-4 md:h-screen md:p-8 lg:p-12">
          <div class="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <ThumbnailId
              :images="compressedImages"
              :activeIndex="index"
              :title="item.title"
              @hover="handleImageHover"
            />

            <div class="order-1 flex w-full flex-1 items-center justify-center md:order-2">
              <NuxtImg
                v-if="compressedImages.length"
                :src="mainImages[index]"
                :alt="item.title"
                class="h-auto w-full max-h-[70vh] rounded-md object-contain"
              />
            </div>
          </div>
        </div>

        <div class="flex w-full flex-col justify-between p-6 md:w-1/2 md:p-8 lg:p-12">
          <ProductIdInfo
            :item="item"
            :quantity-in-basket="quantityInBasket"
          />

          <ProductIdBasketCounter
            v-model:count="totalInBasket"
            @add-to-basket="addToBasketAndReset"
          />
        </div>
      </div>
    </div>

    <p
      v-else
      class="mt-10 text-center text-xl text-gray-600"
    >
      Загрузка...
    </p>
  </TheWrapper>
</template>

<script lang="ts" setup>
import ProductIdLink from '~/components/productElements/ProductIdLink.vue';
import ThumbnailId from '~/components/productElements/ThumbnailId.vue';
import ProductIdInfo from '~/components/productElements/ProductIdInfo.vue';
import ProductIdBasketCounter from '~/components/productElements/ProductIdBasketCounter.vue';
import { compressImage } from '~/lib/imageCompressor';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCounterStore } from '../../stores/host';
import { storeToRefs } from 'pinia';
import { type User } from '~/interfaces/user';
import { navigateTo } from '#app';

// --- 1. Store ---
const store = useCounterStore();
const { data, basket } = storeToRefs(store);

// --- 2. State & Computed ---
const route = useRoute();
const id = computed(() => route.params.id as string);
const item = computed(() => data.value.find((i: User) => i.id === id.value));
const quantityInBasket = computed(() => basket.value?.find((q: User) => q.id === id.value));

const index = ref(0);
const totalInBasket = ref(1);
const compressedImages = ref<string[]>([]);
const mainImages = ref<string[]>([]);

// --- 3. Functions ---

function handleImageHover(x: number) {
  index.value = x;
}

const addToBasketAndReset = () => {
  if (item.value) {
    store.addToBasket(item.value, totalInBasket.value);
    totalInBasket.value = 1;
  }
};

// --- 4. Life Cycle ---

// Сжатие изображения в браузере
onMounted(async () => {
  // [УЛУЧШЕНИЕ] Логику проверки наличия данных и fetchItems лучше вынести в middleware или useAsyncData
  // для корректного SSR и предотвращения двойной загрузки.
  if (data.value.length === 0) {
    await store.fetchItems();
  }

  // [УЛУЧШЕНИЕ] Обработка ошибки "Не найден" в onMounted происходит на стороне клиента.
  // Это может привести к неверному рендерингу на SSR.
  // Лучше использовать useAsyncData для перехвата 404 на сервере.
  if (!item.value) {
    navigateTo('/products/notfound', { replace: true })
    return
  }
  
  if (item.value) {
    compressedImages.value = await Promise.all(
      item.value.image.map((img) => compressImage(img, 160, 160))
    );
    mainImages.value = await Promise.all(
      item.value.image.map((img) => compressImage(img, 600, 600))
    );
  }
});
useSeoMeta({
   title: computed(() => `BALD-E | ${item.value?.title || 'Загрузка...'} `),
  
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
 
})
</script>
<template>
  <TheWrapper>
    <!-- 🔗 Навигация -->
    <ProductIdLink />

    <!-- 🛒 Карточка товара -->
    <div v-if="item" class="bg-white rounded-lg shadow-lg">
      <div class="flex flex-col md:flex-row">
        <!-- 🖼️ Левая колонка: изображения -->
        <div class="p-6 md:p-8 lg:p-12 w-full md:w-1/2 md:sticky md:top-4 md:h-screen">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <!-- 📌 Миниатюры -->
            <ThumbnailId
              :images="compressedImages"
              :activeIndex="index"
              :title="item.title"
              @hover="handleImageHover"
            />

            <!-- 🖼️ Основное изображение -->
            <div class="flex-1 order-1 md:order-2 flex items-center justify-center w-full">
              <img
                v-if="compressedImages.length"
                :src="compressedImages[index]"
                :alt="item.title"
                class="w-full h-auto max-h-[70vh] rounded-md object-contain"
              />
            </div>
          </div>
        </div>

        <!-- 📄 Правая колонка: информация -->
        <div class="p-6 md:p-8 lg:p-12 w-full md:w-1/2 flex flex-col justify-between">
          <ProductIdInfo :item="item" :quantity-in-basket="quantityInBasket" />

          <!-- ➕ Добавление в корзину -->
          <ProductIdBasketCounter
            v-model:count="totalInBasket"
            @add-to-basket="addToBasketAndReset"
          />
        </div>
      </div>
    </div>

    <!-- ⏳ Лоадер -->
    <p v-else class="mt-10 text-center text-xl text-gray-600">Загрузка...</p>
  </TheWrapper>
</template>

<script lang="ts" setup>
import ProductIdLink from '~/components/productElements/ProductIdLink.vue';
import ThumbnailId from '~/components/productElements/ThumbnailId.vue';
import ProductIdInfo from '~/components/productElements/ProductIdInfo.vue';
import ProductIdBasketCounter from '~/components/productElements/ProductIdBasketCounter.vue';
import { ref, computed, onMounted } from 'vue';
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

const index = ref(0);
const totalInBasket = ref(1);
const compressedImages = ref<string[]>([]);

function handleImageHover(x: number) {
  index.value = x;
}

const addToBasketAndReset = () => {
  if (item.value) {
    store.addToBasket(item.value, totalInBasket.value);
    totalInBasket.value = 1;
  }
};

// Сжатие изображения в браузере
async function compressImage(fileOrUrl: string, maxWidth = 800, maxHeight = 800) {
  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      let { width, height } = img;
      if (width > maxWidth) {
        height = (maxWidth / width) * height;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = (maxHeight / height) * width;
        height = maxHeight;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('No canvas context');

      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', 0.7)); // сжатие до 70%
    };
    img.onerror = reject;
    img.src = fileOrUrl;
  });
}

onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems();
  }
  if (item.value) {
    compressedImages.value = await Promise.all(
      item.value.image.map((img) => compressImage(img, 600, 600))
    );
  }
});
</script>

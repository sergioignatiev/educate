<template>
  <div class="space-y-4">
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
      {{ item.title }}
    </h1>
    <p class="text-sm sm:text-base font-medium text-gray-500">{{ item?.seller }}</p>

    <TheStars />

    <p class="text-2xl sm:text-3xl font-bold text-gray-800">
      ${{ item.price }}
    </p>

    <p class="text-sm text-gray-500">
      <span class="text-blue-500 hover:underline cursor-pointer">Бесплатный возврат</span>
    </p>

    <!-- 📦 Количество -->
    <div class="mb-4 pt-4">
      <span class="text-sm font-semibold text-gray-600">Количество в корзине: </span>
      <span class="text-lg font-bold text-black">{{ quantityInBasket?.quantity || 0 }}</span>
    </div>

    <!-- 🏷️ Категория -->
    <p class="text-sm font-semibold text-gray-600">
      Категория: <span class="font-normal capitalize">{{ item.category }}</span>
    </p>

    <!-- 📝 Описание -->
    <div class="border-t border-gray-200 pt-6 mt-6">
      <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-2">Об этом товаре</h3>
      <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheStars from './TheStars.vue'
import { type User } from '~/interfaces/user'
defineProps<{
  item: User
  quantityInBasket?: { quantity: number } | null
}>()

defineEmits<{
  (e: 'some-event'): void
}>()
</script>

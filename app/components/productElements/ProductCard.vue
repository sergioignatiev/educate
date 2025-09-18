<template>
  <div class="w-full sm:w-[240px] p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
    <nuxt-link :to="`/products/${id}`"
      class="w-full flex flex-col items-start mb-2">
      <div class="w-full h-[200px] flex items-center justify-center mb-2 overflow-hidden">
        <img class="max-w-full max-h-full object-contain" :src="image[0]" :alt="title" />
      </div>
      <div class="flex flex-col flex-grow w-full">
        <h1 class="w-full text-sm font-normal text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis mb-1">
          {{ title }}
        </h1>
        <h2 class="w-full font-semibold text-lg text-black mb-1">
          ${{ price }}
        </h2>
        <div class="text-xs text-green-700 font-medium mb-1">
          В наличии
        </div>
        <div class="text-xs text-gray-500 mt-auto">
          Бесплатная доставка
        </div>
      </div>
    </nuxt-link>
    <button @click="store.addToBasket(props)" class="w-1/2 text-[13px] font-thin py-2 px-4 rounded-full bg-yellow-400 font-bold text-gray-800 shadow-sm hover:bg-yellow-500 transition-colors duration-200">
      В корзину
    </button>
  </div>
</template>

<script lang="ts" setup>
import { type User } from '@/interfaces/user'
import { useCounterStore } from '#imports';
const store=useCounterStore()

const props=defineProps<User>()
</script>

<style>
/* UnoCSS works without a style block */
</style>
<template>
  <header class="w-full text-black">
    <div class="flex justify-between items-center py-2.5 px-5 bg-white text-black">
      <div class="flex items-end">
        <a href="#" class="w-25 mr-4">
          <img src="https://nuxt-shopping-woad.vercel.app/logo2.png" alt="Bald-e">
        </a>
      </div>

      <div class="flex flex-grow items-center mx-4 relative">
  <!-- Обертка кнопки и дропдауна -->
  <div class="relative flex-grow">
    <!-- Кнопка -->
    <button
      @click="open = !open"
      class="h-10 px-3 rounded-l border bg-white flex items-center w-full text-left"
    >
      Все >
    </button>

    <!-- Дропдаун -->
    <div
      v-if="open"
      class="absolute left-0 top-full mt-1 w-full bg-white border rounded shadow z-50"
    >
      <div
        v-for="item in uniqueCategories"
        :key="item"
        class="relative flex justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer group"
      >
        <span>{{ item }}</span>
        <!-- Подменю справа -->
        <div
          class="absolute left-full top-0 ml-2 bg-white border rounded shadow p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-150"
        >
          <p>DATA</p>
          <p>DATA</p>
          <p>DATA</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Поле ввода -->
  <input
    type="text"
    placeholder="Искать на Bald-e"
    class="h-10 flex-grow bg-slate-100 border border-gray-300 p-2.5 outline-none"
  />

  <!-- Кнопка поиска -->
  <button class="h-10 bg-[#febd69] border-none p-2.5 rounded-r cursor-pointer">
    <span class="i-carbon-search text-black">🔍</span>
  </button>
</div>



      <div class="flex items-center space-x-4 ml-4 text-xs">
        <a href="#" class="flex flex-col cursor-pointer no-underline text-black">
          <span class="text-[10px]">Здравствуйте, войдите</span>
          <span class="font-bold text-sm">Аккаунт и списки</span>
        </a>
        <a href="#" class="flex flex-col cursor-pointer no-underline text-black">
          <span class="text-[10px]">Возвраты</span>
          <span class="font-bold text-sm">и заказы</span>
        </a>
        <a href="#" class="flex items-center cursor-pointer no-underline text-black">
          <span class="i-carbon-shopping-cart w-6 h-6 mr-1"></span>
          <span class="text-lg font-bold">
            <Icon name="ph:shopping-cart-simple-bold" size="34px" />
          </span>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useCounterStore } from '#imports';
import { storeToRefs } from '#imports';

const store = useCounterStore()
const { uniqueCategories, data } = storeToRefs(store)
const open = ref(false)
</script>

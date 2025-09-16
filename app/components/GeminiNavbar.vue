<template>
  <header class="w-full text-black">
    <div class="flex justify-between items-center py-2.5 px-5 bg-white text-black">
      <div class="flex items-end">
        <a href="#" class="w-25 mr-4">
          <img src="https://nuxt-shopping-woad.vercel.app/logo2.png" alt="Логотип Amazon">
        </a>
        <a href="#" class="flex items-end text-xs text-gray-700 hover:text-black cursor-pointer no-underline">
          <span class="i-carbon-location w-4 h-4 mr-1"></span> Доставить в Нью-Йорк 10001
        </a>
      </div>
      <div class="flex flex-grow items-center mx-4">
        <select class="h-10 p-2.5 rounded-l border-none outline-none">
          <option>Все</option>
        </select>
        <input type="text" placeholder="Искать на Amazon" class="h-10 flex-grow bg-white border border-gray-300 rounded-md p-2.5 outline-none">
        <button class="h-10 bg-[#febd69] border-none p-2.5 rounded-r cursor-pointer">
          <span class="i-carbon-search text-black"></span>
        </button>
      </div>
      <div class="flex items-center space-x-4 ml-4 text-xs">
        <a href="#" class="flex items-center cursor-pointer no-underline text-black">
          <span class="i-carbon-language w-4 h-4 mr-1"></span> RU
        </a>
        <a href="#" class="flex flex-col cursor-pointer no-underline text-black">
          <span class="text-[10px]">Здравствуйте, войдите</span>
          <span class="font-bold text-sm">Аккаунт и списки</span>
        </a>
        <a href="#" class="flex flex-col cursor-pointer no-underline text-black">
          <span class="text-[10px]">Возвраты</span>
          <span class="font-bold text-sm">и заказы</span>
        </a>
        <a href="#" class="flex items-center cursor-pointer no-underline text-black">
          <span class="i-carbon-shopping-cart w-6 h-6 mr-1"></span> <span class="text-lg font-bold">Корзина</span>
        </a>
      </div>
    </div>
    <div class="flex items-center py-1.5 px-5 bg-[#232f3e] text-white space-x-4 text-sm">
      <div class="flex items-center cursor-pointer font-bold">
        <span class="i-carbon-menu w-5 h-5 mr-1"></span> Все
      </div>
      <div class="flex space-x-4">
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Amazon Haul</a>
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Ранние скидки Prime</a>
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Книги</a>
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Медицинские товары</a>
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Магазины люкс</a>
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Бестселлеры</a>
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Amazon Basics</a>
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Новинки</a>
      </div>
      <div class="flex-grow text-right">
        <a href="#" class="no-underline text-white hover:border-1 hover:border-white">Служба поддержки</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
// Скрипт остается пустым, так как вся логика в шаблоне
</script>
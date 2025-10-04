<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-950 p-6">
    <div class="text-center max-w-lg w-full">

      <div class="i-carbon-box text-8xl text-red-500 dark:text-red-400 mx-auto mb-6" aria-hidden="true"></div>

      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
        ПРОДУКТ НЕ НАЙДЕН
      </h1>

      <p class="text-xl text-gray-600 dark:text-gray-400 mb-10">
        Кажется, товар с этим ID не существует или был удален. Давайте поищем что-то другое.
      </p>

      <button 
        @click="clearTheError"
        class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-md 
               text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out
               focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
               dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        <span class="i-carbon-shopping-bag w-5 h-5 mr-2" aria-hidden="true"></span>
        Перейти ко всем продуктам
      </button>

      <div class="mt-4 text-sm">
         <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition">Вернуться на главную страницу</a>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { clearError } from '#app'
// Используем clearError с редиректом, чтобы избежать добавления страницы в историю браузера
const clearTheError = () => {
  clearError({ redirect: '/products' })
}
</script>

<style scoped>
/* Здесь можно добавить дополнительные CSS-переходы или анимации, но в данном случае UnoCSS справляется. */
</style>
<template>
  <div class="relative min-h-screen bg-white text-gray-800 font-sans">
    
    <header class="relative h-[85vh] flex items-center justify-center text-white text-center p-4">
      <div class="absolute inset-0 bg-gray-900/60 z-1" :style="{ 'background-image': `url('/images/main.webp')`, 'background-size': 'cover', 'background-position': 'center' }"></div>
      
      <div class="relative z-2 max-w-4xl space-y-6">
        <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight text-black">Ваш Стиль, Наша Вселенная</h1>
        <p class="text-lg sm:text-xl font-light text-black">Исследуйте галактику моды и откройте для себя вещи, которые действительно не от мира сего.</p>
        <a href="#featured" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 transform hover:-translate-y-1 shadow-lg">Начать Покупки</a>
      </div>
    </header>

    <section id="featured" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Избранные Категории</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="relative overflow-hidden rounded-xl shadow-lg group">
            <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2602&auto=format&fit=crop" alt="Мужская коллекция" class="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-white text-2xl font-semibold tracking-wide">Мужское</span>
            </div>
          </div>
          
          <div class="relative overflow-hidden rounded-xl shadow-lg group">
            <img src="https://images.unsplash.com/photo-1616763489245-21d3f9e42104?q=80&w=2787&auto=format&fit=crop" alt="Женская коллекция" class="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-white text-2xl font-semibold tracking-wide">Женское</span>
            </div>
          </div>
          
          <div class="relative overflow-hidden rounded-xl shadow-lg group">
            <img src="https://images.unsplash.com/photo-1549704787-8d19e09d84c6?q=80&w=2787&auto=format&fit=crop" alt="Аксессуары" class="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-white text-2xl font-semibold tracking-wide">Аксессуары</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Бестселлеры</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1596765798083-ae5ae90e54d8?q=80&w=2787&auto=format&fit=crop" alt="Название товара" class="w-full h-64 object-cover rounded-md mb-4">
            <h3 class="text-lg font-semibold truncate">Куртка "Celestial Bomber"</h3>
            <p class="text-gray-500 truncate">Мужская одежда</p>
            <p class="text-xl font-bold text-indigo-600 mt-2">$120.00</p>
          </div>

          <div class="bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1599874830177-d57b32402120?q=80&w=2687&auto=format&fit=crop" alt="Название товара" class="w-full h-64 object-cover rounded-md mb-4">
            <h3 class="text-lg font-semibold truncate">Кроссовки "Orion"</h3>
            <p class="text-gray-500 truncate">Женская обувь</p>
            <p class="text-xl font-bold text-indigo-600 mt-2">$85.00</p>
          </div>
          
          <div class="bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1549419356-6512c1c3f2d2?q=80&w=2835&auto=format&fit=crop" alt="Название товара" class="w-full h-64 object-cover rounded-md mb-4">
            <h3 class="text-lg font-semibold truncate">Сумка "Andromeda"</h3>
            <p class="text-gray-500 truncate">Аксессуары</p>
            <p class="text-xl font-bold text-indigo-600 mt-2">$55.00</p>
          </div>
          
          <div class="bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1620799140461-866415714777?q=80&w=2602&auto=format&fit=crop" alt="Название товара" class="w-full h-64 object-cover rounded-md mb-4">
            <h3 class="text-lg font-semibold truncate">Худи "Cosmic"</h3>
            <p class="text-gray-500 truncate">Унисекс</p>
            <p class="text-xl font-bold text-indigo-600 mt-2">$90.00</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-gray-900 text-gray-300 py-10">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 Stellar Threads. Все права защищены.</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
// В реальном приложении здесь будут загружаться данные
// import { ref, onMounted } from 'vue';
// const featuredCategories = ref([]);
// onMounted(() => {
//   // получить данные
// });
</script>

<style scoped>
/* Локальные стили не нужны, так как UnoCSS предоставляет все утилиты. */
</style>
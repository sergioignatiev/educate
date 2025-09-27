<template>
  <!-- Navbar: Прозрачный фон, черные надписи, виден только на md и выше -->
  <!-- Добавлено стики-поведение (sticky top-0 z-50) для фиксации навбара при прокрутке -->
  <nav class="hidden md:block bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-100 sticky top-0 z-50">
    
    <!-- Ограничиваем контент до 1280px (max-w-7xl) и центрируем его -->
    <!-- Уменьшаем горизонтальный паддинг для экономии места на меньших экранах (px-4) -->
    <div class="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between xl:space-x-6 space-x-4">

      <!-- 1. Логотип (Слева) -->
      <NuxtLink to="/" class="flex-shrink-0">
        <!-- 
          Изображение 1 (Большое): отображается только на экранах >= 1000px (xl:block)
          Использует полный логотип.
        -->
        <img 
          src="https://nuxt-shopping-woad.vercel.app/logo2.png" 
          alt="Bald-e Logo" 
          class="h-9 w-auto hidden xl:block"
        >
        <!-- 
          Изображение 2 (Маленькое): отображается только на экранах < 1000px (xl:hidden)
          Использует favicon.ico и уменьшенный размер.
        -->
        <img 
          src="/favicon.ico" 
          alt="Bald-e Icon" 
          class="h-9 w-9 xl:hidden"
        >
      </NuxtLink>
      
      <!-- 2. Центральная Навигация (Ссылки + Поиск) -->
      <!-- Уменьшаем space-x-8 до space-x-4 на экранах ниже xl -->
      <div class="flex items-center xl:space-x-8 space-x-4 flex-grow">
        
        <!-- Навигационные ссылки: Уменьшаем space-x-2 до space-x-1 на экранах ниже xl -->
        <!-- ИСКУЛЮЧАЕМ ПОСЛЕДНИЙ ЭЛЕМЕНТ (Корзина), используя slice(0, 3) -->
        <ul class="flex xl:space-x-2 space-x-1">
          <li v-for="nav in navigation.slice(0, 3)" :key="nav.id">
            <NuxtLink
              :to="nav.path"
              class="text-gray-700 hover:text-indigo-600 px-2 py-2 rounded-lg text-sm font-semibold tracking-wide transition duration-200 ease-in-out"
            >
              {{ nav.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- ОБЕРТКА ДЛЯ ПОИСКА И ДРОПДАУНА (relative) -->
        <!-- flex-grow обеспечивает максимальное расширение -->
 <div class="relative flex flex-grow max-w-lg" @keydown="handleKeydown">

  <!-- КОНТЕЙНЕР ПОЛЯ ПОИСКА -->
  <div class="flex flex-grow h-10 rounded-lg overflow-hidden border border-gray-400 shadow-sm">

    <!-- Поле поиска -->
    <input
      v-model="searchQuery"
      @focus="handleFocus"
      @blur="handleBlur"
      type="text"
      placeholder="Поиск товаров..."
      class="flex-grow px-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 border-transparent w-full text-base"
    />

    <!-- Кнопка очистки (крестик) -->
    <button
      v-if="searchQuery.length > 0"
      @mousedown.prevent="searchQuery = ''"
      class="w-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition"
    >
      ✕
    </button>

    <!-- Кнопка поиска -->
    <button class="bg-indigo-600 hover:bg-indigo-700 w-12 flex items-center justify-center transition duration-150">
      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>

  <!-- ДРОПДАУН -->
  <div v-if="isSearchActive && searchQuery.length > 0" class="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4">
    <h3 class="text-xs font-semibold uppercase text-gray-500 mb-2">{{ findedItems.length>0?"Нашлось":"Ничего не найдено" }}</h3>
    <ul class="space-y-1">
      <li
        v-for="(item, index) in findedItems"
        :key="item.id"
        :class="[
          'p-2 cursor-pointer text-gray-800 border-b border-gray-100 last:border-b-0 transition duration-150',
          index === focusedItemIndex ? 'bg-indigo-100 ring-2 ring-indigo-300' : 'hover:bg-gray-50'
        ]"
        @mousedown.prevent="selectItem(index)"
      >
        <NuxtLink :to="`/products/${item.id}`"> {{ item.title }}</NuxtLink>
      </li>
      <li class="p-2 text-sm text-gray-600 bg-gray-50 rounded-md mt-2">
        Текущий запрос: **{{ searchQuery }}**
      </li>
    </ul>
  </div>
</div>

          <!-- КОНТЕЙНЕР ПОЛЯ ПОИСКА (основное поле ввода) -->
            <!-- Добавлена более заметная граница border-gray-400 -->
  
      </div>

      <!-- 3. Корзина (Справа, только иконка и счетчик) -->
      <NuxtLink
          :to="navigation[3]?.path"
          class="flex items-center space-x-1 text-gray-900 hover:text-indigo-600 transition duration-150 p-2 rounded-lg relative group"
          aria-label="Корзина"
        >
          <!-- Иконка корзины (цвет текста - темно-серый, ховер - синий) -->
          <span class="text-3xl transition duration-200 group-hover:scale-110 transform">🛒</span>
          
          <!-- Счетчик: цвет фона синий, цвет текста белый -->
          <span class="absolute top-0 right-1 bg-indigo-600 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-white">{{ basket?.length }}</span>
        </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'; 
import { type User } from '~/interfaces/user';
import { useCounterStore,storeToRefs } from '#imports';
import { useRouter } from 'vue-router'

const store = useCounterStore()
const {data, basket} = storeToRefs(store)

const router = useRouter()

// -- НОВАЯ ЛОГИКА КЛАВИАТУРНОЙ НАВИГАЦИИ --
const focusedItemIndex = ref(-1); // -1: фокус на поле ввода

const navigation = [
  {id: 1, path: '/', label: 'Главная'},
  {id: 2, path: '/products', label: 'Товары'},
  {id: 3, path: '/admin', label: "Админ"},
  {id: 4, path: '/basket', label: "Корзина"} 
]

const searchQuery = ref('');
const isSearchActive = ref(false);

const findedItems = computed(() => {
    return data.value.filter((i:User) => i.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

// Функция выбора элемента (вызывается по Enter или клику)
const selectItem = async (index: number) => {
  const selectedItem = findedItems.value[index];
  if (selectedItem) {
    await router.push(`/products/${selectedItem.id}`);

    // После перехода — готовим ввод к новому поиску
    searchQuery.value = '';
    isSearchActive.value = true;
    focusedItemIndex.value = -1;

    // Возвращаем фокус в поле
    requestAnimationFrame(() => {
      const input = document.querySelector('input[placeholder="Поиск товаров..."]') as HTMLInputElement;
      input?.focus();
    });
  }
}

const handleKeydown = (event: KeyboardEvent) => {
    if (!isSearchActive.value || searchQuery.value.length === 0) return;

    const resultsCount = findedItems.value.length;
    if (resultsCount === 0) return;

    if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (focusedItemIndex.value < resultsCount - 1) {
            focusedItemIndex.value++;
        } else {
            focusedItemIndex.value = 0;
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (focusedItemIndex.value > 0) {
            focusedItemIndex.value--;
        } else {
            focusedItemIndex.value = -1; 
        }
    } else if (event.key === 'Enter') {
        event.preventDefault();
        if (focusedItemIndex.value !== -1) {
            selectItem(focusedItemIndex.value);
        } else if (findedItems.value.length > 0) {
            selectItem(0); // если нет выбранного — выбираем первый
        }
    }
};

const handleFocus = () => {
    focusedItemIndex.value = -1;
    isSearchActive.value = true;
};

const handleBlur = () => {
    setTimeout(() => {
        isSearchActive.value = false;
    }, 200);
};
</script>


<style>
/* NuxtLink: Стили для активной ссылки. */
ul li .router-link-active, 
ul li .router-link-exact-active {
  /* Активное состояние: фон становится светло-серым, чтобы имитировать нажатую кнопку */
  color: #1f2937; /* gray-800 */
  background-color: #f3f4f6 !important; /* bg-gray-100 */
}
</style>

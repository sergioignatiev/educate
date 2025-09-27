<template>
  <div class="relative min-h-screen bg-white text-gray-800 font-sans">
 
    <header class="relative h-[85vh] flex items-center justify-center text-white text-center p-4">
      <div class="absolute inset-0 bg-gray-900/60 z-1" :style="{  'background-size': 'cover', 'background-position': 'center' }"></div>
      
      <div class="relative z-2 max-w-4xl space-y-6">
        <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight text-black">Ваш Стиль, Наша Вселенная</h1>
        <p class="text-lg sm:text-xl font-light text-black">Исследуйте галактику моды и откройте для себя вещи, которые действительно не от мира сего.</p>
        <nuxt-link to="/products" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 transform hover:-translate-y-1 shadow-lg">Начать Покупки</nuxt-link>
      </div>
    </header>

    <section id="featured" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Избранные Категории</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <nuxt-link :to="{ path: '/products', query: { category: item.label } }" v-for="item in chosenCategories" class="relative overflow-hidden rounded-xl shadow-lg group" :key="item.id">
            <img :src="item.image" :alt="item.label" class="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 transition-opacity duration-300">
              <span class="text-white text-2xl font-semibold tracking-wide capitalize">{{ item.label }}</span>
            </div>
          </nuxt-link>
          
         
          
        
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Бестселлеры</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <nuxt-link :to="`/products/${item.id}`" v-for="item in data.slice(0,4)" :key="item.id" class="bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img :src="item.image" :alt="item.title" class="w-full h-64 object-cover rounded-md mb-4">
            <h3 class="text-lg font-semibold truncate capitalize">{{ item.title }}</h3>
            <p class="text-gray-500 truncate">{{ item.category }}</p>
            <p class="text-xl font-bold text-indigo-600 mt-2">${{ item.price }}</p>
          </nuxt-link>

       
          
        
          
          
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { useCounterStore } from '#imports'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = useCounterStore()
const { data } = storeToRefs(store) 

const chosenCategories=ref([
  {
    id:1,label:"электроника",image:'https://m.media-amazon.com/images/I/71CogDdSfyL._AC_SX679_.jpg'
  },
  {id:2,label:"одежда",image:'https://m.media-amazon.com/images/I/61Isb40O6wL._AC_SX569_.jpg'},
  {id:3,label:'косметика',image:'https://m.media-amazon.com/images/I/71rDL9n8MaL._SX522_.jpg'}
])

const bestsellers=ref([
 {id:1,label:"",image:'',price:''}
])

onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems()
  }
})

</script>

<style scoped>
/* Локальные стили не нужны, так как UnoCSS предоставляет все утилиты. */
</style>
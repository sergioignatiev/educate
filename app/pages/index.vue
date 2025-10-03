<template>
  <the-wrapper>
   
  <div class="relative min-h-screen  text-gray-800 font-sans py-16">
    <index-swiper/>



    <section id="featured" class="py-16 ">
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
  </the-wrapper>
</template>

<script setup>
import { useCounterStore } from '#imports'
import { storeToRefs } from 'pinia'
import IndexSwiper from '~/components/index/IndexSwiper.vue'
const store = useCounterStore()
const { data } = storeToRefs(store) 

const chosenCategories=ref([
  {
    id:1,label:"электроника",image:'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D'
  },
  {id:2,label:"одежда",image:'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D'},
  {id:3,label:'косметика',image:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D'}
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
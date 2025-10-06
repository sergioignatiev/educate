<template>
  <the-wrapper>
   
  <div class="relative min-h-screen  text-gray-800 font-sans py-16">
    <index-swiper/>



    <section id="featured" class="py-16 ">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Избранные Категории</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <nuxt-link :to="{ path: '/products', query: { category: item.label } }" v-for="item in chosenCategories" class="relative overflow-hidden rounded-xl shadow-lg group" :key="item.id">
 <picture>
    <source :srcset="item.image + '.avif'" type="image/avif" />
    <img :src="item.image + '.jpg'" :alt="item.label" class="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
  </picture>
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
          
       
<the-bestsellers
v-for="item in data.slice(0,4)" :key="item.id"
v-bind="item"
/>
       
          
        
          
          
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
import TheBestsellers from '~/components/index/TheBestsellers.vue'
const store = useCounterStore()
const { data } = storeToRefs(store) 

const chosenCategories=ref([
  {
    id:1,label:"электроника",image:'/images/electronics'
  },
  {id:2,label:"одежда",image:'/images/clothes'},
  {id:3,label:'косметика',image:'/images/cosmetics'}
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
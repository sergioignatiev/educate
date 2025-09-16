<template>
  <div class="p-10">
    <NuxtLink to="/products" class="text-blue-600 hover:underline mb-8 inline-block">← К списку продуктов</NuxtLink>
    
    <section v-if="item" class="flex flex-col md:flex-row gap-8">
      
      <div class="w-full md:w-1/2 flex items-start justify-center">
        <img :src="item.image" :alt="item.title" class="max-h-[80vh] w-auto object-contain rounded-md shadow-lg" />
      </div>

      <div class="w-full md:w-1/2 p-6 bg-white rounded-md shadow-lg">
        <NuxtLink :to="`/products/${id}`">index</NuxtLink>
        <NuxtLink :to="`/products/${id}/two`">two</NuxtLink>
      <NuxtPage />
        <h1 class="text-2xl md:text-3xl font-bold mb-1">{{ item.title }}</h1>
        <div class="flex items-center mb-4">
          <span class="text-yellow-400">★★★★★</span>
          <span class="text-gray-600 ml-2 text-sm">5.0</span>
          <span class="text-gray-500 ml-2 text-sm">1 отзыв</span>
        </div>
        
        <p class="text-xl font-semibold mb-4 text-[#B12704]">${{ item.price }}</p>
        
        <p class="text-sm text-gray-600 mb-6">
          <span class="text-blue-600 hover:underline">Бесплатный возврат</span>
        </p>

        <p class="text-sm font-semibold mb-1">Категория: <span class="font-normal">{{ item.category }}</span></p>
        
        <div class="mb-6 mt-6">
          <button class="w-full bg-[#FFD814] text-black font-semibold py-2 rounded-full shadow-md hover:bg-[#F7CA00] mb-2">Добавить в корзину</button>
          <button class="w-full bg-[#FFA41C] text-black font-semibold py-2 rounded-full shadow-md hover:bg-[#FA9800]">Купить сейчас</button>
        </div>
        
        <div class="border-t border-gray-300 pt-6">
          <h3 class="text-lg font-bold mb-2">Об этом товаре</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>
    
    <p v-else class="text-center text-lg mt-10">Загрузка...</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '../../stores/host'
import { storeToRefs } from 'pinia'
import { type User } from '~/interfaces/user'

const store = useCounterStore()
const { data } = storeToRefs(store)

const route = useRoute()
const id = computed(() => route.params.id as string)

const item = computed(() => data.value.find((i: User) => i.id === id.value))

onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems()
  }
})
</script>

<style scoped>
/* Дополнительные стили, если необходимы */
</style>

---

### **Что было изменено**

Я внес следующие ключевые изменения в элемент `<img>`:

* **`max-h-[80vh]`**: Этот класс устанавливает **максимальную высоту** изображения на 80% от высоты области просмотра. Это гарантирует, что изображение не будет слишком большим и всегда поместится на экране, даже если его исходное разрешение очень высокое. `vh` (viewport height) — это CSS-единица, равная 1% от высоты окна браузера.
* **`w-auto`**: Этот класс позволяет изображению автоматически масштабировать свою **ширину** в соответствии с его исходным соотношением сторон. В сочетании с `max-h-[80vh]` это гарантирует, что изображение не будет выглядеть растянутым или сплющенным.
* **`flex items-start justify-center`**: Я также добавил эти классы к родительскому `div`. Это центрирует изображение по горизонтали внутри его контейнера и выравнивает его по верхнему краю.
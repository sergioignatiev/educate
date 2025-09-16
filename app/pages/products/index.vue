<template>
  <div>
    
    <section v-if="data.length" class="flex flex-wrap gap-1 p-4">
      <div class="flex flex-col" v-for="item in reversedItems" :key="item.id">
      <nuxt-link  :to="`/products/${item.id}`"
       class=" w-full sm:w-[300px] 
       p-4  rounded-md flex flex-col items-center gap-2">
        <img class="w-full h-[300px] " :src="item.image" :alt="item.title" />
        <h1 class="self-start h-8 overflow-hidden text-ellipsis whitespace-nowrap">{{ item.title }}</h1>
        <h2 class="self-start">${{ item.price }}</h2>
      <button type="button" @click="testAlert"
      class="bg-yellow-300 px-5 py-2 rounded-[20px] self-start hover:bg-yellow-40">Добавить</button>
      </nuxt-link>
      </div>
      
    </section>
    <p v-else class="p-4">Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCounterStore } from '#imports'
import { storeToRefs } from '#imports'

const store = useCounterStore()
const { data } = storeToRefs(store)

onMounted(() => {
  if (data.value.length === 0) store.fetchItems()
})
const reversedItems = computed(() => [...data.value].reverse())

const testAlert=()=>{
  alert("HI")
}
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>

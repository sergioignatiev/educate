<template>
    <div class="p-10">
         <NuxtLink to="/products">К всем продуктам</NuxtLink>
  <section v-if="item" class="flex">

   
    
    <img :src="item.image" :alt="item.title" />
    <section>
    <h1>{{ item.title }}</h1>
    <h2>{{ item.category }}</h2>
    <p>{{ item.description }}</p>
    <p>Price: {{ item.price }}</p>
    <p>Category: {{ item.category }}</p>
</section>  
</section>
  <p v-else>Loading...</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '../../stores/host'
import { storeToRefs } from 'pinia'
import { type User } from '~/interfaces/user'
// Pinia store
const store = useCounterStore()
const { data } = storeToRefs(store)

// reactive route id
const route = useRoute()
const id = computed(() => route.params.id as string)

// computed item
const item = computed(() => data.value.find((i: User) => i.id === id.value))

// Загружаем данные только один раз при первой загрузке приложения
onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems()
  }
})
</script>

<style scoped>
img {
  max-width: 600px;
  display: block;
  margin-bottom: 20px;
}
</style>

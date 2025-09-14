<template>
  <div>
    <section v-if="data.length" class="flex flex-wrap gap-4 p-4">
      <nuxt-link v-for="item in data" :key="item.id" :to="`/products/${item.id}`" class="p-4 bg-blue-100 rounded-md flex flex-col items-center gap-2">
        <img class="w-[100px] " :src="item.image" :alt="item.title" />
        <h1>{{ item.title }}</h1>
      </nuxt-link>
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
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>

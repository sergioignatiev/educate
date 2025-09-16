<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '#imports'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { data,reversedItems } = storeToRefs(store) // реактивный ref из Pinia






onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems()
  }
})



const handleDeleteItem = async (id: string) => {
  await store.deleteItem(id)
}

const handleClearItems = async () => {
  await store.clearItems()
  alert('All items deleted')
}
</script>

<template>
  <div class="p-8">
<nuxt-page/>
  
    <button
      class="bg-red-700 text-white px-4 py-1 rounded-md"
      @click="handleClearItems"
    >
      DELETE ALL
    </button>

  

    <section v-for="item in reversedItems" :key="item.id">
      <div class="flex items-center gap-4 bg-slate-100 rounded-md p-4 justify-between mt-4">
        <section class="flex gap-4 items-center">
        <img
          :src="item.image"
          width="50"
          height="50"
          :alt="item.title"
          loading="lazy"
        />
        <h2>{{ item.title }}</h2>
        </section>
        <button
          type="button"
          @click="handleDeleteItem(item.id)"
          class="text-white bg-blue-900 px-4 py-2 h-fit rounded-md"
        >
          DELETE ITEM
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
input,
textarea {
  width: 1000px;
  height: 40px;
  padding: 5px;
}
</style>

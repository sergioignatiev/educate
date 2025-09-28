<template>
  <div class="p-4 md:p-8 max-w-4xl mx-auto">

    <nuxt-page />

    <button
      class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition mb-4 w-full"
      @click="handleClearItems"
    >
      DELETE ALL
    </button>

    <div class="space-y-4">
      <div
        v-for="item in reversedItems"
        :key="item.id"
        class="bg-white shadow rounded-lg p-4 flex items-center gap-4"
      >
        <!-- Изображение -->
        <img
          :src="item.image[0]"
          :alt="item.title"
          class="w-20 h-20 object-cover rounded-md flex-shrink-0"
          loading="lazy"
        />

        <!-- Информация -->
        <div class="flex-1">
          <h2 class="font-semibold text-lg text-gray-800">{{ item.title }}</h2>
          <p class="text-gray-600 text-sm">Категория: {{ item.category || '—' }}</p>
          <p class="text-gray-600 text-sm">Цена: ${{ item.price }}</p>
        </div>

        <!-- Кнопка -->
        <button
          type="button"
          @click="handleDeleteItem(item.id)"
          class="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition"
        >
          Удалить
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCounterStore } from '#imports'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { data, reversedItems } = storeToRefs(store)

onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems()
  }
})
const handleDeleteItem = async (id: string) => {
  if (confirm('Вы уверены, что хотите удалить этот товар?')) {
    await store.deleteItem(id)
  }
}

const handleClearItems = async () => {
  if (confirm('Удалить все товары безвозвратно?')) {
    await store.clearItems()
  }
}


</script>

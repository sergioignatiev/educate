<template>
  <div class="p-4 md:p-8 max-w-4xl mx-auto">
    <button
      class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition mb-4 w-full"
      @click="handleClearItems"
    >
      Удалить все
    </button>

    <div class="space-y-4">
      <div
        v-for="item in reversedItems"
        :key="item.id"
        class="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <img
          :src="item.image[0]"
          :alt="item.title"
          class="w-full sm:w-20 h-40 sm:h-20 object-cover rounded-md flex-shrink-0"
          loading="lazy"
        />

        <div class="flex-1 w-full">
          <h2 class="font-semibold text-lg text-gray-800">
            {{ item.title }}
          </h2>
          <p class="text-gray-600 text-sm">
            Категория: {{ item.category || '—' }}
          </p>
          <p class="text-gray-600 text-sm">
            Цена: ${{ item.price }}
          </p>
        </div>

        <button
          class="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md mt-2 sm:mt-0 flex-shrink-0 w-full sm:w-auto"
          type="button"
          @click="handleDeleteItem(item.id)"
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

// --- 1. Store ---
const store = useCounterStore()
const { data, reversedItems } = storeToRefs(store)

// --- 2. Life Cycle / Initial Load ---
onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems()
  }
})

// --- 3. Functions ---

// Удаление одного товара
const handleDeleteItem = async (id: string) => {
  if (confirm('Вы уверены, что хотите удалить этот товар?')) {
    await store.deleteItem(id)
  }
}

// Удаление всех товаров
const handleClearItems = async () => {
  if (confirm('Удалить все товары безвозвратно?')) {
    await store.clearItems()
  }
}
</script>
<template>
  <div class="p-4 max-w-4xl mx-auto">

    <section v-if="basket && basket.length">
      <div
        v-for="b in basket"
        :key="b.id"
        class="flex items-center gap-4 bg-white shadow rounded-lg p-4 mb-3"
      >
        <!-- Картинка -->
        <img
          :src="b.image?.[0]"
          :alt="b.title"
          class="w-20 h-20 object-cover rounded-md flex-shrink-0"
        />

        <!-- Информация -->
        <div class="flex-1">
          <h2 class="font-semibold text-lg">{{ b.title }}</h2>
          <p class="text-gray-800 font-bold">Итого: ${{ b.price * b.quantity }}</p>

          <!-- Количество -->
          <div class="flex items-center gap-2 mt-2">
            <button
              class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
              @click="decrement(b)"
            >−</button>

            <span class="px-3">{{ b.quantity }}</span>

            <button
              class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
              @click="increment(b)"
            >+</button>
          </div>
        </div>

        <!-- Удалить -->
        <button
          class="bg-red-600 text-white px-3 py-1 rounded-md"
          @click="remove(b)"
        >Удалить</button>
      </div>

      <!-- Общая сумма -->
      <div class="text-right font-bold text-lg mt-4">
        Общая сумма: ${{ basket.reduce((sum, b) => sum + b.price * b.quantity, 0) }}
      </div>
    </section>

    <section v-else class="text-center py-10 text-gray-600">
      <h1 class="text-xl mb-4">Корзина пуста</h1>
      <NuxtLink to="/products" class="text-blue-600 hover:underline">Перейти к покупкам →</NuxtLink>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useCounterStore, storeToRefs } from '#imports'
const store = useCounterStore()
const { basket } = storeToRefs(store)

// Удаление товара
// Удаление товара
const remove = (item: any) => {
  basket.value = basket.value?.filter(i => i.id !== item.id) || []
}

// Увеличение количества
const increment = (item: any) => {
  item.quantity++
}

// Уменьшение количества
const decrement = (item: any) => {
  if (!basket.value) return // <-- важно!
  if (item.quantity > 1) {
    item.quantity--
  } else {
    basket.value = basket.value.filter(i => i.id !== item.id)
  }
}

</script>

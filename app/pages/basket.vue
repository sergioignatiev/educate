<template>
  <div class="p-4 max-w-4xl mx-auto">

    <section v-if="basket && basket.length">
      <div
        v-for="b in basket"
        :key="b.id"
        class="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white shadow rounded-lg p-4 mb-3"
      >
        <!-- Картинка -->
       <TheImage
       v-bind="b"
      :width="200"
      :height="200"
      css="w-30 sm:w-20 h-40 sm:h-20 object-cover rounded-md flex-shrink-0"
       />

        <!-- Информация -->
        <div class="flex-1 w-full">
          <h2 class="font-semibold text-lg">{{ b.title }}</h2>
          <p class="text-gray-800 font-bold mt-1 sm:mt-0">Итого: ${{ b.price * b.quantity }}</p>

          <!-- Количество -->
          <div class="flex items-center gap-2 mt-2 flex-wrap">
            <button
              class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
              @click="decrement(b)"
            >−</button>

            <span class="px-3">{{ b.quantity }}</span>

            <button
              class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
              @click="increment(b)"
            >+</button>
          </div>
        </div>

        <!-- Удалить -->
        <button
          class="bg-red-600 text-white px-4 py-2 rounded-md mt-2 sm:mt-0 flex-shrink-0 w-full sm:w-auto"
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

<template>
  <div class="mt-8 flex items-center gap-4">
    <!-- 🔢 Счетчик -->
    <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden h-12 w-32">
      <button
        @click="decrement"
        class="w-1/3 text-2xl text-gray-600 flex justify-center items-center h-full hover:bg-gray-100 transition-colors duration-200"
      >
        −
      </button>
      <input
        type="number"
        class="w-1/3 text-lg text-center font-semibold border-none outline-none h-full"
        :value="localCount"
        @input="onInput"
        min="1"
        max="10"
      />
      <button
        @click="increment"
        class="w-1/3 text-2xl text-gray-600 flex justify-center items-center h-full hover:bg-gray-100 transition-colors duration-200"
      >
        +
      </button>
    </div>

    <!-- 🛒 Кнопка -->
    <button
      @click="$emit('add-to-basket')"
      class="flex-1 bg-gray-800 text-white font-semibold py-3 rounded-md shadow-md hover:bg-gray-900 transition-colors duration-200"
    >
      Добавить в корзину
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{ count: number }>()

const emit = defineEmits<{
  (e: 'update:count', value: number): void
  (e: 'add-to-basket'): void
}>()

// Локальная computed переменная, как в FilterAside
const localCount = computed({
  get: () => props.count,
  set: (val: number) => emit('update:count', val),
})

function increment() {
  localCount.value = localCount.value + 1
}

function decrement() {
  localCount.value = localCount.value > 1 ? localCount.value - 1 : 1
}

// безопасный обработчик для input
function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target) return
  localCount.value = Number(target.value)
}
</script>

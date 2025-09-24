<template>
  <aside
    class="md:translate-x-0 
    min-h-screen md:w-[300px]
     w-3/4 pr-8 p-4 mb-4 md:mb-0 md:relative
      fixed left-0 top-0 
      md:bg-transparent bg-slate-100"
      :class="{'translate-x-[-100%]':visibility}"
  >
    <!-- Цена -->
    <h2 class="text-lg font-semibold mb-4">Цена</h2>
    <div class="flex flex-col mb-6">
      <label for="range" class="mb-2">Цена до {{ localPrice }}</label>
      <input
        type="range"
        id="range"
        name="range"
        max="1000"
        v-model="localPrice"
        class="w-full h-2 bg-gray-200 rounded-lg  cursor-pointer"
      />
    </div>

    <!-- Категории -->
    <h2 class="text-lg font-semibold mb-4">Категории</h2>
    <div class="flex flex-col gap-2">
      <div
        v-for="category in localProducts"
        :key="category"
        class="flex items-center gap-2"
      >
        <input
          type="checkbox"
          :id="category"
          :value="category"
          v-model="localCategories"
          class="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label :for="category" class="text-gray-700 capitalize">{{ category }}</label>
      </div>
   <!-- Кнопка -->
<button
  @click="reset"
  type="button"
  class="bg-blue-500 mt-8 text-white rounded-xl px-8 py-2 font-medium shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg active:scale-95"
>
  Сбросить
</button>

    </div>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { type User } from '~/interfaces/user';
const props = defineProps<{ price: number, product:User[], categories: string[],visibility:boolean }>()
const emit = defineEmits<{
  (e: 'update:price', x: number): void
  (e: 'update:categories', x: string[]): void,
  (e:'reset'):void
}>()
const reset = () => {
  emit('reset') // эмитим событие наверх
}
const localPrice = computed({
  get: () => props.price,
  set: (x) => emit('update:price', x),
})
const localProducts=computed(()=>{
 const products= props.product.map(i=>i.category)
 return Array.from(new Set(products))
})

const localCategories = computed<string[]>({
  get: () => props.categories,
  set: (x) => emit('update:categories', x),
})
</script>

<style scoped>

</style>

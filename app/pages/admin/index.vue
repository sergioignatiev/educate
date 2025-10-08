<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">
      Добавить товар
    </h1>

    <form
      class="space-y-4"
      @submit.prevent="handleAddItem"
    >
      
      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Продавец *</label>
        <input
          v-model="seller"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="text"
          placeholder="Продавец"
          required
        />
      </div>

      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Название *</label>
        <input
          v-model="title"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="text"
          placeholder="Название товара"
          required
        />
      </div>

      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Цена *</label>
        <input
          v-model.number="price"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="number"
          min="0"
          placeholder="Цена"
          required
        />
      </div>

      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Описание *</label>
        <textarea
          v-model="description"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          placeholder="Описание товара"
          rows="4"
          required
        ></textarea>
      </div>

      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Категория *</label>
        <select
          v-model="category"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
          required
        >
          <option value="" disabled selected>-- Выберите категорию --</option>
          <option value="одежда">Одежда</option>
          <option value="электроника">Электроника</option>
          <option value="картины">Картины</option>
          <option value="обувь">Обувь</option>
          <option value="велосипеды">Велосипеды</option>
          <option value="косметика">Косметика</option>
          <option value="медицина">Медицина</option>
          <option value="книги">Книги</option>
          <option value="спорт">Спорт </option>
        </select>
      </div>

      <div class="flex flex-col sm:flex-row gap-2 w-full">

        <input
          v-model="oneImage"
          class="border border-gray-300 rounded-md px-3 py-2 flex-1 min-w-0 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="text"
          placeholder="Добавьте URL"
        />
       
        <button
          class="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition flex-shrink-0 w-full sm:w-auto"
          type="button"
          @click="addImage"
        >
          Добавить Изображение
        </button>
      </div>
 <p>ДОБАВЬТЕ URL одного или нескольких изображений. После каждого добавления нажмите на кнопку Добавить изображение </p>
      <div
        v-if="image.length"
        class="flex flex-wrap gap-2"
      >
        <span
          v-for="(img, index) in image"
          :key="index"
          class="bg-gray-100 px-2 py-1 rounded-md text-sm"
        >
          {{ img }}
        </span>
      </div>

      <button
        class="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        type="submit"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import { useCounterStore } from '#imports'

// --- 1. Store ---
const store = useCounterStore()

// --- 2. State (Реактивные переменные) ---
const title = ref('')
const price = ref<number | null>(null)
const description = ref('')
const category = ref('')
const image = ref<string[]>([])
const oneImage = ref('')
const seller = ref('')

// --- 3. Life Cycle / Initial Load ---
store.fetchItems()

// --- 4. Functions ---

// Добавление URL изображения в массив
const addImage = () => {
  if (oneImage.value) {
    image.value.push(oneImage.value)
    oneImage.value = ''
  }
}

// Обработка отправки формы
const handleAddItem = async () => {
  if (!title.value || !price.value || !description.value || !category.value || !seller.value) {
    alert('Пожалуйста, заполните все обязательные поля (*)')
    return
  }

  await store.addItem({
    id: nanoid(),
    title: title.value,
    price: price.value,
    description: description.value,
    category: category.value,
    image: image.value,
    seller: seller.value,
    quantity: 0
  })

  alert(`${title.value} успешно добавлен!`)

  // Очистка полей
  title.value = ''
  price.value = null
  description.value = ''
  category.value = ''
  image.value = []
  seller.value = ''
  oneImage.value = ''
}
</script>
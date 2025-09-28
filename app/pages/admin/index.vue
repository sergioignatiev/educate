<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Добавить товар</h1>

    <form @submit.prevent="handleAddItem" class="space-y-4">
      
      <!-- Продавец -->
      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Продавец *</label>
        <input
          v-model="seller"
          type="text"
          placeholder="Продавец"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <!-- Название -->
      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Название *</label>
        <input
          v-model="title"
          type="text"
          placeholder="Название товара"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <!-- Цена -->
      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Цена *</label>
        <input
          v-model.number="price"
          type="number"
          min="0"
          placeholder="Цена"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <!-- Описание -->
      <div class="flex flex-col">
        <label class="font-semibold mb-1 text-gray-700">Описание *</label>
        <textarea
          v-model="description"
          placeholder="Описание товара"
          class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          rows="4"
          required
        ></textarea>
      </div>

      <!-- Категория -->
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
        </select>
      </div>

      <!-- Изображения -->
      <div class="flex gap-2">
        <input
          v-model="oneImage"
          type="text"
          placeholder="URL изображения"
          class="border border-gray-300 rounded-md px-3 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="button"
          @click="addImage"
          class="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
        >
          Добавить
        </button>
      </div>

      <!-- Список добавленных изображений -->
      <div v-if="image.length" class="flex flex-wrap gap-2">
        <span
          v-for="(img, index) in image"
          :key="index"
          class="bg-gray-100 px-2 py-1 rounded-md text-sm"
        >
          {{ img }}
        </span>
      </div>

      <!-- Кнопка добавления товара -->
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition"
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

const store = useCounterStore()

const title = ref('')
const price = ref<number | null>(null)
const description = ref('')
const category = ref('')
const image = ref<string[]>([])
const oneImage = ref('')
const seller = ref('')

const addImage = () => {
  if (oneImage.value) {
    image.value.push(oneImage.value)
    oneImage.value = ''
  }
}

store.fetchItems()

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

  title.value = ''
  price.value = null
  description.value = ''
  category.value = ''
  image.value = []
  seller.value = ''
  oneImage.value = ''
}
</script>

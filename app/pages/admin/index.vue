<script setup lang="ts">
import { ref, computed } from 'vue'
import { nanoid } from 'nanoid'
import { useCounterStore } from '#imports'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { data } = storeToRefs(store) // реактивный ref из Pinia

const title = ref('')
const price = ref(null)
const description = ref('')
const category = ref('')
const image = ref('')

const reversedItems = computed(() => [...data.value].reverse())

// загрузка данных при монтировании
store.fetchItems()

const handleAddItem = async () => {
  if (title.value && price.value) {
    alert(`${title.value} Успешно добавлен`)
    await store.addItem({
      id: nanoid(),
      title: title.value,
      price: price.value,
      description: description.value,
      category: category.value,
      image: image.value,
    })
    title.value = ''
    price.value = null
    description.value = ''
    category.value = ''
    image.value = ''
  } else {
    alert('Заполните все поля')
  }
}

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

  
    <button
      class="bg-red-700 text-white px-4 py-1 rounded-md"
      @click="handleClearItems"
    >
      DELETE ALL
    </button>

    <form action="" class="flex flex-col gap-4 items-center">
      <input
        v-model="title"
        placeholder="title"
        class="bg-slate-100"
        required="true"
      />
      <input
        v-model="price"
        placeholder="Price"
        type="number"
        class="bg-slate-100"
        required="true"
      />

      <textarea v-model="description" placeholder="Description" class="bg-slate-100" />
      <div class="w-full max-w-[1000px]">
          <label for="category" class="w-full text-left font-bold text-gray-700">Выберите категорию:</label>
        <select
          id="category"
          v-model="category"
          class="bg-slate-100 w-full px-5 py-2 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="" disabled selected>-- Выберите категорию --</option>
          <option value="одежда">Одежда</option>
          <option value="электроника">Электроника</option>
          <option value="картины">Картины</option>
        </select>
        </div>
      <input v-model="image" placeholder="Image URL" class="bg-slate-100" />
      <button
        @click="handleAddItem"
        class="bg-blue-700 w-full max-w-[1000px] px-4 py-1 text-white rounded-sm"
      >
        ADD
      </button>
    </form>

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

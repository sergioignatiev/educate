import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type User } from '~/interfaces/user'

export const useCounterStore = defineStore('host', () => {
  const data = ref<User[]>([])  // сюда будем складывать items

  // функция загрузки данных
  const fetchItems = async () => {
    data.value = await $fetch<User[]>('/api/items/get')
  }

  const addItem = async (item: User) => {
    await $fetch('/api/items/post', {
      method: 'POST',
      body: item,
    })
    await fetchItems()
  }

  const deleteItem = async (id: string) => {
    await $fetch(`/api/items/delete-one?id=${encodeURIComponent(id)}`, { method: 'POST' })
    await fetchItems()
  }

  const clearItems = async () => {
    await $fetch('/api/items/delete', { method: 'DELETE' })
    await fetchItems()
  }

  return { data, fetchItems, addItem, deleteItem, clearItems }
})

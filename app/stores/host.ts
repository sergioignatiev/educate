import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type User } from '~/interfaces/user'
interface Basket extends User{
  quantity?:number
}
export const useCounterStore = defineStore('host', () => {
  const data = ref<User[]>([])  // сюда будем складывать items
const basket=ref<Basket[]|null>([])
  const addToBasket=(item:User)=>{
  const existingItem = basket.value?.find((p) => p.id === item.id);

  if (existingItem) {
    // Если товар найден, увеличиваем его количество
    // Предполагается, что у вашего типа User есть свойство quantity
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    // Если товара нет, добавляем его с количеством 1
    // Добавляем новое свойство quantity
    basket.value?.push({ ...item});
  }
}

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
const reversedItems = computed(() => [...data.value].reverse())
  return { data, basket, fetchItems, addItem, deleteItem, clearItems,reversedItems,addToBasket }
})

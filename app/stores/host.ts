import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type User } from '~/interfaces/user'

interface Basket extends Omit<User, 'price'> {
  quantity: number
  price: number // Теперь price будет только number, а не number | null
}

export const useCounterStore = defineStore('host', () => {
  const data = ref<User[]>([])  // сюда будем складывать items
const basket=ref<Basket[]|null>([])

const addToBasket = (item: User, quantity: number) => {
  const existingItem = basket.value?.find((p) => p.id === item.id);

  if (existingItem) {
    // If the item exists, add the specified quantity
    existingItem.quantity = (existingItem.quantity || 0) + quantity;
    
  } else {
    //так как в items price опционален то здесь меняем на as number
    basket.value?.push({ ...item, quantity, price: item.price as number });
  }
};


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

const uniqueCategories=computed(()=>{
  const allCategories=data.value.map(item=>item.category)
  const filteredCategories=Array.from(new Set(allCategories))
  return filteredCategories
})
  return { data, basket, fetchItems, addItem, deleteItem, clearItems,reversedItems,addToBasket,uniqueCategories }
})

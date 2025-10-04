import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { type User } from '~/interfaces/user'

interface Basket extends Omit<User, 'price'> {
  quantity: number
  price: number // price теперь только number
}

export const useCounterStore = defineStore('host', () => {
  const data = ref<User[]>([]) // все items

  // -----------------------------
  // Безопасная инициализация basket
  // -----------------------------
  let initialBasket: Basket[] = []
  try {
    const raw = localStorage.getItem('basket')
    if (raw) {
      initialBasket = JSON.parse(raw)
    }
  } catch (e) {
    console.warn('Invalid basket in localStorage, resetting...', e)
  }

  const basket = ref<Basket[]>(initialBasket)

  // Сохраняем basket в localStorage
  watch(
    basket,
    (val) => {
      localStorage.setItem('basket', JSON.stringify(val))
    },
    { deep: true }
  )

  const basketCount = computed(() =>
    basket.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const addToBasket = (item: User, quantity: number) => {
    const existingItem = basket.value.find((p) => p.id === item.id)

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 0) + quantity
    } else {
      basket.value.push({ ...item, quantity, price: item.price as number })
    }
  }

  // -----------------------------
  // API
  // -----------------------------
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
    await $fetch(`/api/items/delete-one?id=${encodeURIComponent(id)}`, {
      method: 'POST',
    })
    await fetchItems()
  }

  const clearItems = async () => {
    await $fetch('/api/items/delete', { method: 'DELETE' })
    await fetchItems()
  }

  // -----------------------------
  // computed
  // -----------------------------
  const reversedItems = computed(() => [...data.value].reverse())

  const uniqueCategories = computed(() => {
    const allCategories = data.value.map((item) => item.category)
    return Array.from(new Set(allCategories))
  })

  return {
    data,
    basket,
    basketCount,
    fetchItems,
    addItem,
    deleteItem,
    clearItems,
    reversedItems,
    addToBasket,
    uniqueCategories,
  }
})

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state через ref
 const data=ref([])

  // возвращаем всё наружу
  return { data }
})

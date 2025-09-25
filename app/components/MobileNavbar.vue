
<template>

    <nav class=" p-4 w-full fixed bottom-0 bg-white">
      <ul class="flex justify-between">
        <li
          v-for="item in navItems"
          :key="item.name"
          class="flex flex-col items-center justify-center"
        >
          <Icon class="text-red-700" :name="item.icon" :size="iconSize" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </nav>

</template>

<script setup>
import { ref } from 'vue'

const iconSize = ref(22)

const navItems = [
  { name: 'home', text: 'Главная', icon: 'ph:house-simple-fill' },
  { name: 'cart', text: 'Корзина', icon: 'ph:shopping-cart-simple-bold' },
  { name: 'profile', text: 'Профиль', icon: 'ph:user-list-bold' },
  { name: 'settings', text: 'Настройки', icon: 'ph:gear-six-bold' }
]
</script>
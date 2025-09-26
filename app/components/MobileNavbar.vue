
<template>

    <nav class=" p-4 w-full fixed bottom-0 bg-white z-20">
      <ul class="flex justify-between">
        <li
          v-for="item in navItems"
          :key="item.name"
          class=""
        >
        <NuxtLink class="flex flex-col items-center justify-center text-slate-500" :to="item.link">
          <Icon  :name="item.icon" :size="iconSize" />
          <p>{{ item.text }}</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>

</template>

<script setup>
import { ref } from 'vue'

const iconSize = ref(22)

const navItems = [
  { name: 'home', text: 'Главная', icon: 'ph:house-simple-fill',link:"/" },
  
  { name: 'products', text: 'Продукты', icon: 'ph:user-list-bold',link:'/products' },
  { name: 'admin', text: 'Админ', icon: 'ph:gear-six-bold',link:'/admin' },
  { name: 'cart', text: 'Корзина', icon: 'ph:shopping-cart-simple-bold',link:'/basket' },
]
</script>
<style scoped>
.router-link-exact-active{
    color:black
}
</style>
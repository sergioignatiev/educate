<template>
  <nav class="p-4 w-full fixed bottom-0 bg-white z-20 border-t border-gray-200">
    <ul class="flex justify-between">
      <li
        v-for="item in navItems"
        :key="item.name"
      >
        <NuxtLink class="relative flex flex-col items-center justify-center text-slate-500" :to="item.link">
          
          <!-- Иконка -->
          <Icon :name="item.icon" size="24" />

          <!-- Счётчик только для корзины -->
          <span
            v-if="item.name === 'cart'"
            class="absolute -top-1 right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full"
          >
            0
          </span>

          <p class="text-xs mt-1">{{ item.text }}</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { name: 'home', text: 'Главная', icon: 'ph:house', link:"/" },
  { name: 'products', text: 'Продукты', icon: 'ph:bag', link:'/products' },
  { name: 'admin', text: 'Админ', icon: 'ph:gear-six', link:'/admin' },
  { name: 'cart', text: 'Корзина', icon: 'ph:shopping-cart', link:'/basket' },
]
</script>

<style scoped>
.router-link-exact-active {
  color: black;
}
</style>

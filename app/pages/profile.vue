<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-md w-full space-y-8 p-6 sm:p-10 bg-white rounded-xl shadow-2xl">
      
      <div class="flex flex-col items-center">
        <NuxtImg class="h-10 w-auto" src="/images/footerlogo.webp" alt="Логотип"/>
        <h2 class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
          Зарегистрироваться
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Уже есть аккаунт?
          <a href="/login" class="font-medium text-blue-600 hover:text-blue-500">
            Войти
          </a>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="submit">
        
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">ИМЯ:</label>
          <input
            id="name"
            ref="nameRef"
            v-model="nombre"
            type="text"
            placeholder="Ваше имя"
            required
            class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">EMAIL:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
          <div class="relative">
            <input
              id="password"
              v-model="password"
              :type="pass"
              name="password"
              placeholder="••••••••"
              required
              class="appearance-none relative block w-full pr-12 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            >
            <img
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer opacity-70 hover:opacity-100"
              :src="showHide"
              alt="show/hide"
              @click="changePassword"
            >
          </div>
        </div>

        <button
          type="submit"
          class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-extrabold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>

    <NuxtPage class="mt-8"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useSeoMeta, navigateTo } from '#app';

useSeoMeta({
  title: "Регистрация"
})

// --- State ---
const nombre = ref('')
const email = ref('')
const password = ref('')
const showHide = ref('https://www.svgrepo.com/show/380007/eye-password-hide.svg') // Иконка "скрыто"
const pass = ref('password')
const nameRef = ref<HTMLInputElement | null>(null) // Переименовал ref для ясности

// --- Methods ---
function changePassword() {
  if (pass.value === 'password') {
    pass.value = 'text'
    showHide.value = 'https://www.svgrepo.com/show/380010/eye-password-show.svg' // Иконка "показано"
  } else {
    pass.value = 'password'
    showHide.value = "https://www.svgrepo.com/show/380007/eye-password-hide.svg" // Иконка "скрыто"
  }
}

async function submit() {
  // Здесь будет логика API для регистрации
  console.log('Регистрация:', { name: nombre.value, email: email.value })
  
  // Временно перенаправляем, как в оригинале
  await navigateTo({path:'/products',query:{name:nombre.value}})
}

// --- Lifecycle ---
onMounted(() => {
  // Устанавливаем фокус на поле имени при монтировании
  if (nameRef.value) {
    nameRef.value.focus()
  }
})
</script>
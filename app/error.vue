<script setup lang="ts">
import { clearError } from '#app'


// Nuxt автоматически предоставляет объект ошибки через defineProps
const props = defineProps<{
  error: {
    url: string,
    statusCode: number,
    statusMessage: string,
    message: string,
    stack: string,
    data?: any
  }
}>()

/**
 * Очищает состояние ошибки и перенаправляет пользователя на главную страницу.
 * * ВАЖНО: clearError() с параметром { redirect: '/' } использует replaceState, 
 * что предотвращает добавление страницы ошибки в историю браузера.
 */
const handleError = () => {
  clearError({ redirect: '/' })
}

// Переменная для отображения более точного сообщения, если statusMessage пуст
const displayMessage = computed(() => {
  return props.error.statusMessage || props.error.message || 'Произошла неизвестная ошибка.'
})
</script>

<template>
  <ErrorPage
    :status-code="props.error.statusCode"
    :status-message="displayMessage"
    button-text="Вернуться на главную"
    @button-click="handleError"
  />
</template>
<script setup lang="ts">
// ... (определение Props и логика остаются прежними)
interface Props {
  statusCode?: number
  statusMessage?: string
  buttonText?: string
}

// Объявляем событие, которое будет вызываться при клике
const emit = defineEmits(['button-click'])

const props = withDefaults(defineProps<Props>(), {
  statusCode: 404,
  statusMessage: 'Страница не найдена. Возможно, вы ошиблись в адресе.',
  buttonText: 'Вернуться на главную',
})

const titleText = computed(() => {
  return props.statusCode === 404 ? 'О нет, Вы потерялись!' : 'Произошла ошибка сервера'
})

// Функция, которая вызывает событие
const handleClick = () => {
  emit('button-click')
}
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
    <div class="text-center">
      
      <h1 class="text-9xl font-extrabold text-red-600 dark:text-red-400 mb-4">
        {{ props.statusCode }}
      </h1>
      
      <p class="text-4xl font-bold mb-6">
        {{ titleText }}
      </p>
      
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-10">
        {{ props.statusMessage }}
      </p>

      <button 
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        @click="handleClick"
      >
        <span class="i-carbon-home w-5 h-5 mr-2" /> 
        {{ props.buttonText }}
      </button>
    </div>
  </div>
</template>
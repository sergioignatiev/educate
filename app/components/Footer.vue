<template>
  <TheWrapper class="bg-[#E6F4FF] ">
  <footer class="text-gray-800 py-6 px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-blue-200">
    <!-- Логотип -->
    <div class="flex items-center gap-2">
      <img src="https://nuxt-shopping-woad.vercel.app/logo2.png" alt="Logo" class="h-10 w-auto" />
     
    </div>

    <!-- Соц. ссылки -->
    <div class="flex items-center gap-4">
      <a href="#" target="_blank" aria-label="Telegram" class="text-blue-600 hover:text-blue-800">
        <Icon name="ph:telegram-logo" size="28" />
      </a>
      <a href="#" target="_blank" aria-label="HeadHunter" class="text-blue-600 hover:text-blue-800">
        <Icon name="ph:suitcase-simple" size="28" />
      </a>
      <a href="#" target="_blank" aria-label="GitHub" class="text-blue-600 hover:text-blue-800">
        <Icon name="ph:github-logo" size="28" />
      </a>
      <a href="tel:#" aria-label="Phone" class="text-blue-600 hover:text-blue-800">
        <Icon name="ph:phone" size="28" />
      </a>
    </div>

    <!-- Текст -->
    <div class="text-center text-sm opacity-80 md:text-right">
      Проект выполнен в учебных целях Игнатьевым Сергеем
    </div>
    
  </footer>
  </TheWrapper>
</template>

<script setup>
</script>

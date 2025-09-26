<template>
  <div class="spinner" aria-hidden="true"></div>
</template>

<script setup lang="ts">
// тут ничего не нужно
</script>

<style scoped>
.spinner {
  width: 5rem;               /* больше размера (w-20) */
  height: 5rem;              /* h-20 */
  border-radius: 9999px;     /* круг */
  border: 6px solid #e5e7eb; /* светло-серый (gray-200) */
  border-top-color: #8b5cf6; /* фиолетовый (purple-500) */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>

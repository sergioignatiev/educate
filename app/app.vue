<template>
  <client-only>
   
     
    <NuxtLayout :name="layoutName">
      
      <NuxtPage/>
    
     
    </NuxtLayout>
 
  </client-only>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const layoutName = ref('mobile')

function updateLayout() {
  if (window.innerWidth < 768) {
    layoutName.value = 'mobile'
  } else {
    layoutName.value = 'default'
  }
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout)
})
useSeoMeta({
  title:"BALD-E",
  lang:'ru',
  description: 'Учебный интернет магазин.',
  ogDescription: 'Учебный интернет магагин.',
  ogImage: '/images/footerlogo.webp',
  twitterCard: 'summary_large_image',
})
</script>
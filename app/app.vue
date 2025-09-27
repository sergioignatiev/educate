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
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div class="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source 
        :src="video.src" 
        type="video/mp4" 
      />
      Ваш браузер не поддерживает видео.
    </video>
    <div class=" z-10 text-white ">
      <h1 class="text-2xl ">{{ video.label }}</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ video: { src: string, label: string } }>();

</script>
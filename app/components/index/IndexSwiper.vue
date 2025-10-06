<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination,EffectFade } from 'swiper/modules'
import TheVideo from './TheVideo.vue'
const videos = [
  {id:1,src:'/video/clothes.mp4',label:"Одежда"},
   {id:2,src:'/video/electronics.mp4',label:"Электроника"},
   {id:3,src:'/video/cosmetics.mp4',label:"Косметика"}
]
</script>



<template>
    
  <Swiper
    :modules="[Autoplay, Navigation, Pagination,EffectFade]"
    :slides-per-view="1"
    :space-between="0"
    :loop="true"
    :autoplay="{ delay: 10000 }"
    
    :fadeEffect="{ crossFade: true }"
    navigation
    :pagination="{ clickable: true }"
  >
   <SwiperSlide v-for="(src, index) in videos" :key="index">
      <TheVideo v-bind:video="src"/>
    </SwiperSlide>
  </Swiper>
</template>
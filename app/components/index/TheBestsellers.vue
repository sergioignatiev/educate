<template>
 <nuxt-link :to="`/products/${id}`"  class="bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <NuxtImg 
            class="w-full h-64 object-cover rounded-md mb-4" 
            :src="compressedImages[0]" :alt="title" 
            loading="lazy"
            />
            <h3 class="text-lg font-semibold truncate capitalize">{{ title }}</h3>
          
            <p class="text-gray-500 truncate">{{ category }}</p>
            <p class="text-xl font-bold text-indigo-600 mt-2">${{ price }}</p>
          </nuxt-link>
</template>

<script lang="ts" setup>
import { type User } from '@/interfaces/user'
import { compressImage,imageCache } from '~/lib/imageCompressor';
const compressedImages = ref<string[]>([]);

const props = defineProps<User>()

onMounted(async () => {
  const img = props.image?.[0];
  if (!img) return;

  if (imageCache.has(img)) {
    compressedImages.value = [imageCache.get(img)!];
  } else {
    const compressed = await compressImage(img, 600, 600);
    imageCache.set(img, compressed);
    compressedImages.value = [compressed];
  }
});
</script>


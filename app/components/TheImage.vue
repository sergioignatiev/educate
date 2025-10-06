<template>
 
    <img
:class="`${css}`"
    
    v-if="compressedImage" :src="compressedImage" :alt="title" />
 <div class="" v-else>Заргузка</div>
</template>

<script lang="ts" setup>
import { type User } from '~/interfaces/user';
import { compressImage } from '~/lib/imageCompressor';

interface Image extends User {
  width: number
  height: number
  css?:string
}

const props = defineProps<Image>()
const compressedImage = ref<string | null>(null)

onMounted(async () => {
  const firstImage = props.image?.[0]
  if (firstImage) {
    compressedImage.value = await compressImage(firstImage, props.width, props.height)
  }
})

</script>

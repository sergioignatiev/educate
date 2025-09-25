<template>
  <div class="flex md:flex-col gap-2 order-2 md:order-1 mt-4 md:mt-0">
    <div
      v-for="(img, id) in images"
      :key="id"
      @mouseover="$emit('hover', id)"
      class="cursor-pointer"
    >
      <img
        width="60"
        height="60"
        class="h-[60px] w-[60px] rounded-md object-cover transition-all duration-300 border-slate-700"
        :src="img"
        :alt="`Thumbnail of ${title}`"
        :class="{ 'border-solid border-2 border-black': id === activeIndex }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  images: string[];       // список картинок
  activeIndex: number;    // текущий выбранный индекс
  title: string;          // для alt
}>();

const emit = defineEmits<{
  (e: 'hover', index: number): void; // уведомляем родителя
}>();
</script>

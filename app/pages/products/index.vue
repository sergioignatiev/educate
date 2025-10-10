<template>
  <TheWrapper class="bg-slate-100 pb-32">
  <div class="flex flex-col md:flex-row  min-h-screen  relative">

 
 
    <products-aside
      v-model:price="globalRange"
      v-model:categories="globalCategories"
      :product="data"
      @reset="reset"
     class="z-10"
:visibility="asideVisibility"
    />

    <div class="flex-1 px-2  sm:px-0 sm:py-0 " >
      <section class="md:invisible flex justify-end py-4" >
<div class="flex items-center justify-center p-1 border-solid border-1 border-slate-300 w-fit rounded-md" @click="asideVisibility=!asideVisibility">
         <Icon name="tabler:filter" size="32px" />
     </div>

    
      </section>

      <main class="grid  grid-cols-2 sm:flex sm:justify-start flex-wrap gap-4">
         <div
    v-if="!asideVisibility"
    class="fixed inset-0 bg-black/50"
    @click="asideVisibility = true"
  ></div>

        <product-card
          v-for="item in filtered"
          :key="item.id"
          v-bind="item"
        
        />
      </main>
    </div>
  </div>
  </TheWrapper>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCounterStore, storeToRefs } from '#imports';
import { useRoute } from 'vue-router';
import ProductCard from '~/components/productElements/ProductCard.vue';
import ProductsAside from '~/components/productElements/ProductsAside.vue';
const route=useRoute()
const store = useCounterStore();
const { data } = storeToRefs(store);

const globalRange = ref(1000);
const globalCategories = ref<string[]>([]);

const asideVisibility=ref(true)
// Сначала фильтр
const filtered = computed(() => {
  const reverse=[...data.value].reverse()
  const price = reverse.filter((i) => i.price as number <= globalRange.value);
  if (globalCategories.value.length < 1) {
    return price;
  } else return price.filter((i) => globalCategories.value.includes(i.category));
});
const reset=()=>{
 globalRange.value=1000
 globalCategories.value=[]
}


// Затем SEO
useSeoMeta({
  title: 'BALD-E | ВСЕ ТОВАРЫ',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

// И потом onMounted
onMounted(async () => {
  if (data.value.length === 0) {
    await store.fetchItems();
  }
  if(route.query.category){
  globalCategories.value.push(route.query.category as string)

}});


watch(asideVisibility, (val) => {
  if (val) {
    document.body.classList.remove('overflow-hidden')
  } else {
    document.body.classList.add('overflow-hidden')
  }
})
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>

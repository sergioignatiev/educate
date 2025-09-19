<template>
  <div class="">
    <section v-if="basket">
  <div v-for="b in basket" :key="b.id">{{ b.quantity }} {{ b.title }} ${{b?.quantity*b?.price  }}</div>
  </section>
  </div>
</template>
<script lang="ts" setup>
import { useCounterStore,storeToRefs } from '#imports';
const store=useCounterStore()
const {basket}=storeToRefs(store)
</script>

<style>

</style>
<template>
  <div>
<p v-for="b in basket" :key="b.id">{{ b.title }} <p>{{ b.quantity }}</p></p>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore,storeToRefs } from '#imports';
const store=useCounterStore()
const {basket}=storeToRefs(store)
</script>

<style>

</style>
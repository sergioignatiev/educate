<template>
 <nav class="h-16 bg-slate-300">
    <ul>
        <li v-for="nav in navigation" :key="nav.id">
            <NuxtLink :to="nav.path">{{ nav.label }}</NuxtLink>
        </li>
    </ul>
 </nav>
</template>

<script lang="ts" setup>
const navigation = [
  {id:1, path:'/', label:'Home'},
  {id:2, path:'/host', label:'Host'}
]

</script>

<style>

</style>
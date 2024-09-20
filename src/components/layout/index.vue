<script setup lang="ts">
import Header from '@/components/header/index.vue';
</script>
<template>
  <div class="size-full flex flex-col text-purple-200 p-4  leading-11">
    <Header></Header>
    <div class="flex-1 bg-slate-500 p-4 rounded mt-4">
      <RouterView />
    </div>
  </div>
</template>

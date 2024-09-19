<script setup lang="ts">
import Header from '@/components/header/index.vue';
</script>
<template>
  <div class="flex flex-col text-purple-200">
    <Header></Header>
    <div class="flex-1 bg-slate-500">
      <RouterView />
    </div>
  </div>
</template>

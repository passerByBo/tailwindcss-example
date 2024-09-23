<script setup lang="ts">
import Header from '@/components/header/index.vue';
</script>
<template>
  <div class="flex size-full flex-col p-4">
    <Header></Header>
    <div class="mt-4 flex-1 rounded bg-slate-500 p-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue';
</script>
<template>
  <div class="flex h-screen flex-col bg-black text-purple-200">
    <Header></Header>
    <div class="bg-dbg mt-px flex-1 overflow-hidden">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </div>
  </div>
</template>

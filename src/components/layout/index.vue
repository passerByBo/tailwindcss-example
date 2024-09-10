<script setup lang="ts">
import Header from "@/components/header/index.vue";
</script>
<template>
  <div class="flex flex-col h-screen">
    <Header></Header>
    <div class="flex-1 bg-dbg overflow-hidden mt-px">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </div>
  </div>
</template>

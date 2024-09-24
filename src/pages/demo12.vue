<template>
  <div class="size-full bg-purple-300 p-4">
    <div class="flex gap-10">
      <!-- 过度  px-4 py-2 -->
      <button
        class="h-10 rounded-md bg-blue-500 p-[8px_16px] text-base font-[600] text-white transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        保存
      </button>
      <div
        class="mt-20 inline-block h-20 w-20 rounded bg-primary transition hover:translate-x-10"
      ></div>
    </div>
    <!-- 动画 -->
    <div class="flex space-x-10">
      <div
        class="mt-20 inline-block h-20 w-20 animate-spin rounded bg-primary"
      ></div>
      <div
        class="animate-spin-slow mt-20 inline-block h-20 w-20 rounded bg-primary"
      ></div>
      <div
        class="mt-20 inline-block h-20 w-20 rounded bg-primary hover:animate-accordion-down"
      ></div>
      <div
        class="mt-20 inline-block h-20 w-20 rounded bg-primary hover:animate-accordion-up"
      ></div>
    </div>
    <!-- 三方库 -->
    <div class="mt-10 flex gap-10">
      <div
        class="animate-jump animate-infinite animate-duration-[2000ms] animate-delay-[10ms] animate-ease-in-out size-20 rounded bg-primary"
      ></div>
      <div
        class="animate-wiggle-more animate-infinite animate-duration-[2000ms] animate-delay-[10ms] animate-ease-linear size-20 rounded bg-primary"
      ></div>
      <div :class="btDefault"></div>
      <div class="size-20 rounded bg-primary"></div>
      <div class="size-20 rounded bg-primary"></div>
      <div class="size-20 rounded bg-primary"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const btDefault = `size-20 rounded bg-primary`;
// const size = 30;
// const c1 = `size-${size}`
</script>

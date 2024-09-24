<template>
  <div class="size-full bg-green-200 p-4">
    <div
      class="flex h-20 flex-row flex-nowrap gap-4 *:h-full *:rounded *:bg-primary *:text-center *:text-white"
    >
      <div class="w-14 flex-none">01</div>
      <div class="w-64 flex-initial">02</div>
      <div class="w-32 flex-initial">03</div>
    </div>
    <div
      class="mt-4 flex h-20 flex-row flex-nowrap gap-4 *:h-full *:rounded *:bg-primary *:text-center *:text-white"
    >
      <div class="h-14 w-14 flex-none">01</div>
      <div class="h-14 grow">02</div>
      <div class="h-14 w-14 flex-none">03</div>
    </div>

    <!-- grid布局 -->
    <div class="mt-12 grid grid-cols-3 gap-4 *:h-10 *:rounded *:bg-primary">
      <div class="">01</div>
      <div class="">02</div>
      <div class="">03</div>
      <div class="col-span-2">04</div>
      <div class="">05</div>
      <div class="">06</div>
      <div class="col-span-2">07</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

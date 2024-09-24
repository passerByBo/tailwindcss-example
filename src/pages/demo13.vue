<template>
  <div class="size-full overflow-auto bg-sky-300 p-4">
    <div class="space-x-4">
      <span class="bg-success inline-block size-20"></span>
      <span class="bg-warning inline-block size-20"></span>
      <span class="bg-error inline-block size-20"></span>
    </div>
    <div
      class="hover:bg-green-gradient size-20 overflow-hidden bg-primary"
    ></div>
    <div class="card-custom margin-top-10"></div>
    <div class="card-green margin-top-10"></div>
    <div class="btn1 margin-top-10"></div>
    <h1>H1</h1>
    <h2>H2</h2>
    <span class="font-color-red text-shadow-[11px]">测试预定义静态class</span>
    <div class="hocus:bg-purple-600/[.3] size-20 bg-primary"></div>
    <input class="hocus:outline-purple-600" />
    <div class="space-x-4">
      <span
        v-for="i in 8"
        :key="i"
        class="nth-[2n+1]:hover:bg-blue-500 inline-block size-20 bg-purple-500 text-center"
        >{{ i }}</span
      >
    </div>
  </div>
</template>
<script setup lang="ts"></script>

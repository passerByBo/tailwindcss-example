<template>
  <div class="size-full bg-sky-200 p-4">
    <!-- 纵横比 aspect-auto、aspect-square-->
    <div class="flex gap-2">
      <div class="aspect-video h-20 rounded bg-gray-800 text-center text-white">
        16/9
      </div>
      <div class="aspect-4/3 h-20 rounded bg-gray-800 text-center text-white">
        4/3
      </div>
      <div class="aspect-[2/1] h-20 rounded bg-gray-800 text-center text-white">
        2/1
      </div>
    </div>
    <!-- 容器 -->
    <div class="container mx-auto h-10 bg-orange-700"></div>
    <!-- 多列布局 -->
    <div class="mt-10 columns-3 gap-6 bg-slate-300">
      <div class="aspect-square h-full w-full bg-blue-400"></div>
      <div class="aspect-4/3 h-full w-full bg-green-400"></div>
      <div class="aspect-square h-full w-full bg-red-400"></div>
    </div>

    <div class="mt-10 columns-xs gap-6 bg-slate-300">
      <img
        class="aspect-square h-full w-full bg-blue-400"
        src="https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <img
        class="aspect-video h-full w-full bg-green-400"
        src="https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <img
        class="aspect-4/3 h-full w-full bg-red-400"
        src="https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <img
        class="aspect-[2/1] h-full w-full bg-pink-400"
        src="https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <img
        class="aspect-square h-full w-full bg-gray-400"
        src="https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
    </div>
  </div>
</template>
<script setup lang="ts"></script>

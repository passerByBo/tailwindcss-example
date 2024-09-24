<template>
  <div class="size-full bg-purple-300">
    <!-- 打印和显示的内容不同 -->
    <article class="print:hidden">
      <h1>标题</h1>
      <p>显示的内容</p>
    </article>
    <div class="hidden print:block">打印的内容</div>
    <!-- prefers-color-scheme 系统或者浏览器设置的主题色 -->
    <div
      class="mb-20 h-20 w-20 rounded-md bg-blue-700 text-primary-foreground dark:bg-blue-200 dark:text-black"
    >
      根据系统颜色设置
    </div>

    <!-- 动画：当用户不希望减少动画时才启用 -->
    <div
      class="inline-block rounded-lg bg-blue-500 p-6 text-white motion-safe:animate-bounce"
    >
      动画：启用动画的时候 才会动
    </div>

    <!-- 静止效果：当用户偏好减少动画时启用 -->
    <div
      class="mt-4 inline-block rounded-lg text-blue-700 motion-reduce:bg-green-500 motion-reduce:p-6 motion-reduce:text-lg"
    >
      静止效果：当用户偏好减少动画时显示绿色背景
    </div>

    <!-- 当设备处于竖屏模式时显示，横屏时隐藏 -->
    <div
      class="rounded-lg bg-blue-500 p-4 text-white portrait:block landscape:hidden"
    >
      当设备处于竖屏模式时显示，横屏时隐藏
    </div>

    <!-- 当设备处于横屏模式时显示，竖屏时隐藏 -->
    <div
      class="rounded-lg bg-green-500 p-4 text-white portrait:hidden landscape:block"
    >
      当设备处于横屏模式时显示，竖屏时隐藏
    </div>

    <!-- 这里会在支持 display:grid 的浏览器上显示为 Grid 布局 -->
    <div class="grid-cols-3 gap-4 supports-[display:grid]:grid">
      <div class="rounded-lg bg-blue-500 p-4 text-white">Item grid 1</div>
      <div class="rounded-lg bg-green-500 p-4 text-white">Item grid 2</div>
      <div class="rounded-lg bg-red-500 p-4 text-white">Item grid 3</div>
    </div>

    <!-- 浏览器不支持 Grid 时显示的备用布局 -->
    <div class="mt-4 supports-[display:grid]:hidden">
      <div class="mb-2 rounded-lg bg-blue-500 p-4 text-white">Item 1</div>
      <div class="mb-2 rounded-lg bg-green-500 p-4 text-white">Item 2</div>
      <div class="rounded-lg bg-red-500 p-4 text-white">Item 3</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

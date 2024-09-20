<template>
  <div class="size-full bg-slate-200">
    <div
      class="group/item h-52 w-52 cursor-pointer bg-sky-500 hover:bg-sky-700"
    >
      <p class="text-white group-hover/item:text-pink-300">第一行</p>
      <p class="text-white group-hover/item:text-pink-600">第二行</p>
    </div>
    <ul>
      <li class="bg-primary even:bg-amber-500" v-for="i in 4">第{{ i }}个</li>
    </ul>
    <div class="h-48 w-48 bg-[rgb(111,111,111)]"></div>
    <input
      type="text"
      value="tbone"
      class="`disabled:shadow-none` mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500"
    />

    <form>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">邮箱：</span>
        <input type="email" class="peer" />
        <p class="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
          请输入正确的邮箱
        </p>
      </label>
    </form>
  </div>
</template>
<script setup lang="ts"></script>

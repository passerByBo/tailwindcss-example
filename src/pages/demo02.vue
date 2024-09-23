<template>
  <div class="size-full bg-slate-200 p-4">
    <span
      class="text-black before:mr-1 before:inline-block before:text-red-600 before:content-['*']"
      >label：</span
    >
    <input
      placeholder="请输入"
      disabled
      class="mt-2 placeholder:italic placeholder:text-slate-400 focus:outline-lime-600"
    />

    <button
      class="h-15 my-5 block w-20 rounded-sm bg-primary py-2 text-primary-foreground active:bg-purple-600"
    >
      按钮
    </button>
    <div class="mb-4 flex gap-2 *:rounded-sm">
      <span
        v-for="i in 5"
        :key="i"
        class="inline-block bg-slate-400 p-2 first:bg-primary first:text-primary-foreground last:bg-pink-600"
        >第{{ i }}个</span
      >
    </div>
    <div>
      <input type="file" class="file:mr-4 file:p-2" />
    </div>
    <div>
      <span>只读</span>
      <input readonly class="read-only:outline-blue-300" />
      <span>读写</span>
      <input class="read-only:outline-blue-300" />
    </div>
    <div class="group/item size-52 cursor-pointer bg-sky-500 hover:bg-sky-700">
      <p class="text-white group-hover/item:text-pink-300">第一行</p>
      <p class="text-white group-hover/item:text-pink-600">第二行</p>
    </div>
    <ul>
      <li class="bg-primary even:bg-amber-500" v-for="i in 4" :key="i">
        第{{ i }}个
      </li>
    </ul>
    <div class="size-48 bg-[rgb(129,52,52)]"></div>
    <input
      type="text"
      value="tbone"
      class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
    />

    <form>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">邮箱：</span>
        <input type="email" class="peer" />
        <p
          class="peer:hover:text-pink-300 invisible mt-2 text-sm text-pink-600 peer-invalid:visible"
        >
          请输入正确的邮箱
        </p>
      </label>
    </form>
    <div class="table-box-auto">123</div>
  </div>
</template>
<script setup lang="ts"></script>

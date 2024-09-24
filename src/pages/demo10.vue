<template>
  <div>
    <div class="space-x-4 p-4">
      <Button type="primary" @click="changeTheme()">light</Button>
      <Button type="success" @click="changeTheme('dark')">dark</Button>
    </div>

    <div class="size-40 rounded-md bg-primary text-primary-foreground">
      你好我是根据变量来切换的
    </div>

    <div
      class="mt-10 size-40 rounded-md bg-primary text-primary-foreground dark:bg-black"
    >
      你好我是根据dark模式来切换的
    </div>
  </div>
</template>
<script setup lang="ts">
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import Button from '@/components/button/index.vue';
const changeTheme = (theme?: string) =>
  pipe(
    theme,
    O.fromNullable,
    O.fold(
      () => document.documentElement.classList.remove('dark'),
      () => document.documentElement.classList.add('dark')
    )
  );
</script>

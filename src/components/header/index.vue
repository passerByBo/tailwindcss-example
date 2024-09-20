<script setup lang="ts">
import Button from '@/components/button/index.vue';
import { pipe } from 'fp-ts/function';
import { useRouter } from 'vue-router';
const router = useRouter();

const mapPath = (name: string) => ({ path: `/${name}` });

const handleClick = (name: string) => pipe(name, mapPath, router.push);
</script>

<template>
  <div class="flex flex-wrap gap-4 text-primary">
    <Button type="primary" @click="handleClick('demo01')">伪类/伪元素</Button>
    <Button type="success" @click="handleClick('demo02')">指令样式</Button>
    <Button type="warning" @click="handleClick('demo03')">响应式设计</Button>
    <Button type="danger" @click="handleClick('demo04')">demo04</Button>
    <Button @click="handleClick('demo05')">demo05</Button>
    <Button @click="handleClick('demo06')">demo06</Button>
    <Button @click="handleClick('demo07')">demo07</Button>
    <Button @click="handleClick('demo08')">demo08</Button>
    <Button @click="handleClick('demo09')">demo09</Button>
    <Button @click="handleClick('demo10')">demo10</Button>
    <Button @click="handleClick('demo11')">demo11</Button>
    <Button @click="handleClick('demo12')">demo12</Button>
    <Button @click="handleClick('demo13')" :disabled="true">demo13</Button>
  </div>
</template>

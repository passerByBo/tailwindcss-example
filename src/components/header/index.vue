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
    <Button type="primary" @click="handleClick('demo01')">基础单位</Button>
    <Button type="success" @click="handleClick('demo02')">伪类/伪元素</Button>
    <Button type="warning" @click="handleClick('demo03')">媒体查询</Button>
    <Button type="danger" @click="handleClick('demo04')">响应式设计</Button>
    <Button @click="handleClick('demo05')">Layout</Button>
    <Button @click="handleClick('demo06')">Flexbox&Grid</Button>
    <Button @click="handleClick('demo07')">spacing</Button>
    <Button @click="handleClick('demo08')">Sizing</Button>
    <Button @click="handleClick('demo09')">Typography</Button>
    <Button @click="handleClick('demo10')">主题</Button>
    <Button @click="handleClick('demo11')">其他</Button>
    <Button @click="handleClick('demo12')">动画和过度</Button>
    <Button @click="handleClick('demo13')">自定义</Button>
    <Button @click="handleClick('demo14')">ts案例1</Button>
    <Button @click="handleClick('demo15')">ts案例2</Button>
    <Button :disabled="true">按钮不可点击</Button>
  </div>
</template>

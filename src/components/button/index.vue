<!-- src/components/MyButton.vue -->
<template>
  <button
    :class="[
      // 'rounded-lg px-4 py-2 font-semibold transition-all duration-200 ease-in-out',
      buttonClasses
      // {
      //   'cursor-not-allowed opacity-50': disabled,
      //   'hover:opacity-90 active:opacity-80': !disabled
      // }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { cva } from 'class-variance-authority';

type Props = {
  type?: ButtonType;
  disabled?: boolean;
};

type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  disabled: false
});

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

// const buttonTypeToClassMap: Record<ButtonType, string> = {
//   default: 'bg-gray-200 text-black hover:bg-gray-300 active:bg-gray-400',
//   primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
//   success: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
//   warning: 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
//   danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700'
// };

// const buttonTypeOption: O.Option<ButtonType> = O.fromNullable(props.type);

// const buttonClasses = computed(() =>
//   pipe(
//     buttonTypeOption,
//     O.map((type) => buttonTypeToClassMap[type]), // 从映射表获取按钮样式
//     O.match(
//       () => buttonTypeToClassMap.default, // 如果没有值，使用默认值
//       identity // 返回对应的 class
//     )
//   )
// );

const buttonClass = cva(
  'rounded-lg px-4 py-2 font-semibold transition-all duration-200 ease-in-out',
  {
    variants: {
      type: {
        default: 'bg-gray-200 text-black hover:bg-gray-300 active:bg-gray-400',
        primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
        success:
          'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
        warning:
          'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
        danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700'
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'hover:opacity-90 active:opacity-80'
      }
    },
    defaultVariants: {
      type: 'default',
      disabled: false
    }
  }
);
const buttonClasses = computed(() =>
  buttonClass({ type: props.type, disabled: props.disabled })
);

const disabledOption = O.fromPredicate((disabled: boolean) => !disabled);

// 使用 Either 处理点击事件的副作用   if (props.disabled) return
const handleClick = (event: MouseEvent) =>
  pipe(
    disabledOption(props.disabled),
    O.map(() =>
      pipe(
        E.tryCatch(
          () => emits('click', event),
          (e) => new Error(String(e))
        ),
        E.fold(
          (error) => console.error('按钮点击异常:', error.message),
          () => console.log('按钮点击成功')
        )
      )
    )
  );
</script>

<style scoped>
button {
  outline: none;
}
</style>

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import tailwind from 'eslint-plugin-tailwindcss'; // 引入 Tailwind CSS 插件

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  // 添加 TailwindCSS 推荐规则
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  // 添加 Prettier 相关配置
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'], // 适用于所有文件
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error' // 将 Prettier 的规则作为 ESLint 错误报告
    }
  },
  // 配置以禁用 ESLint 中与 Prettier 冲突的规则
  {
    rules: {
      ...eslintConfigPrettier.rules, // 禁用所有与 Prettier 冲突的规则,
      'vue/multi-word-component-names': ['off', {}]
    }
  }
];

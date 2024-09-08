import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  // 忽略项
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
      '.vscode'
    ]
  },

  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off', // 关闭多单词组件名检查
      'vue/no-v-html': 'warn', // 避免使用v-html以防范XSS攻击
      // 强制组件文件中标签的顺序
      // 'vue/component-tags-order': ['error', {
      //   'order': ['template', 'script', 'style']
      // }],
      'vue/no-unused-vars': 'error' // 禁止未使用的变量
    }
  },

  {
    files: ["**/*.js"],
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'no-var': 'error'
    }
  },

  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser
    },
    rules: {
      // 警告使用 `any` 类型
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];

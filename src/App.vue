<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { theme } from 'ant-design-vue'
import { nextTick } from 'vue'

const themeConfig = {
  algorithm: theme.defaultAlgorithm,
}

// 加载完成
nextTick(() => {
  setTimeout(() => document.dispatchEvent(new CustomEvent('loaded')), 2000)
})
</script>

<template>
  <a-config-provider :locale="zhCN" :theme="themeConfig">
    <router-view />
  </a-config-provider>
</template>

<style lang="scss" scoped></style>

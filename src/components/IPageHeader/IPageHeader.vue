<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '标题',
  },
  subTitle: {
    type: String,
    default: '副标题',
  },
})
</script>

<template>
  <div class="page-header-wrapper">
    <a-page-header :sub-title="subTitle" :title="title" class="page-header" />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

.page-header-wrapper {
  @include useTheme {
    background: getModeVar('cardBgColor');
    border: 1px solid getModeVar('borderColor');
  }
}
</style>

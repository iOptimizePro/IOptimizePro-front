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
  <a-page-header :sub-title="subTitle" :title="title" class="page-header" />
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

.page-header {
  @include useTheme {
    background: getModeVar('cardBgColor');
  }
}
</style>

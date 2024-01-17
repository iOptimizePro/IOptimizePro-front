<script lang="ts" setup>
import IMenu from '@/layouts/components/IMenu/IMenu.vue'
import { getAssetsFile } from '@/utils/utils'
import { useAppStore } from '@/stores'
import { useVModel } from '@vueuse/core'

const appStore = useAppStore()
const emit = defineEmits(['update:collapsed'])
const props = defineProps<{
  collapsed?: boolean
  menuList: any[]
}>()
const propsCollapsed = useVModel(props, 'collapsed', emit)
</script>

<template>
  <a-layout-sider
    v-bind="$attrs"
    v-model:collapsed="propsCollapsed"
    :theme="appStore.darkMode || 'light'"
    class="i-side"
  >
    <div class="i-side__logo">
      <a href="/">
        <img
          :src="
            collapsed
              ? appStore.darkMode == 'light'
                ? getAssetsFile('images/logo-blue.png')
                : getAssetsFile('images/logo-white.png')
              : appStore.darkMode == 'light'
              ? getAssetsFile('images/logo1-blue.png')
              : getAssetsFile('images/logo1-white.png')
          "
          :style="{ height: collapsed ? '40px' : '64px' }"
          alt=""
        />
      </a>
    </div>
    <i-menu v-bind="$attrs" :menu-list="menuList" />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

.i-side {
  overflow: auto;
  height: 100vh;
  box-sizing: border-box;
  @include useTheme {
    background: getModeVar('cardBgColor');
    //box-shadow: 2px 0 6px getModeVar('boxShadowColor');
  }
  z-index: 99;
  //transition: width 0.3s;

  .i-side__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    margin: 16px;
    //background: rgba(205, 205, 205, 0.3);
    //background: url('@/assets/images/logo1.png') no-repeat left center;
    //background-size: cover;
    color: #000;

    img {
      height: 64px;
      width: 100%;
      object-fit: cover;
      object-position: left center;
    }
  }
}

// 不显示默认的 收起菜单 trigger
:deep(.ant-layout-sider-trigger) {
  display: none !important;
}
</style>

<script lang="ts" setup>
import { computed } from 'vue'
import IMenu from '@/layouts/components/IMenu/IMenu.vue'
import { getAssetsFile } from '@/utils/utils'

const emit = defineEmits(['update:selectedKeys', 'update:collapsed'])
const props = defineProps<{
  selectedKeys: string[]
  collapsed?: boolean
  collapsible: boolean
  menuList: any[]
  sideWidth: number
}>()
const propsSelectedKeys = computed({
  get: () => props.selectedKeys,
  set: (val) => emit('update:selectedKeys', val),
})
const propsCollapsed = computed({
  get: () => props.collapsed,
  set: (val) => emit('update:collapsed', val),
})
</script>

<template>
  <a-layout-sider
    v-model:collapsed="propsCollapsed"
    :collapsible="collapsible"
    :width="sideWidth"
    class="i-side"
    theme="light"
  >
    <div class="logo">
      <a href="/">
        <img
          :src="collapsed ? getAssetsFile('images/logo.png') : getAssetsFile('images/logo1.png')"
          :style="{ height: collapsed ? '40px' : '64px' }"
          alt=""
        />
      </a>
    </div>
    <i-menu v-model:selected-keys="propsSelectedKeys" :menu-list="menuList" />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.i-side {
  overflow: auto;
  height: 100vh;

  .logo {
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
</style>

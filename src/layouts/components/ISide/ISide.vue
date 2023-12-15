<script lang="ts" setup>
import { computed } from 'vue'
import IMenu from '@/layouts/components/IMenu/IMenu.vue'

const emit = defineEmits(['update:selectedKeys'])
const props = defineProps<{
  selectedKeys: string[]
  menuList: any[]
  sideWidth: number
}>()
const propsSelectedKeys = computed({
  get: () => props.selectedKeys,
  set: (val) => emit('update:selectedKeys', val),
})
</script>

<template>
  <a-layout-sider :width="sideWidth" class="i-side" theme="light">
    <div class="logo">
      <!--<span>Logo</span>-->
    </div>
    <i-menu v-model:selected-keys="propsSelectedKeys" :menu-list="menuList" />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.i-side {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  height: 100vh;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    margin: 16px;
    //background: rgba(205, 205, 205, 0.3);
    background: url('@/assets/images/logo1.png') no-repeat left center;
    background-size: cover;
    color: #000;
  }
}
</style>

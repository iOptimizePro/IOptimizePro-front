<script lang="ts" setup>
import { computed } from 'vue'
import IAvatar from '@/layouts/components/IAvatar/IAvatar.vue'

const emit = defineEmits(['update:openDrawer', 'update:menuCollapsed'])
const props = defineProps<{
  openDrawer: boolean
  menuCollapsed?: boolean
}>()
const propsOpenDrawer = computed({
  get: () => props.openDrawer,
  set: (val) => emit('update:openDrawer', val),
})
const propsMenuCollapsed = computed({
  get: () => props.menuCollapsed,
  set: (val) => emit('update:menuCollapsed', val),
})
</script>

<template>
  <a-layout-header class="inner-layout-header">
    <div class="header">
      <div class="header-left">
        <a-button class="menu-btn collapse-menu" type="text" @click="propsMenuCollapsed = !propsMenuCollapsed">
          <Icon icon="MenuOutlined" />
        </a-button>
        <a-button class="menu-btn open-drawer" type="text" @click="propsOpenDrawer = !propsOpenDrawer">
          <Icon icon="MenuOutlined" />
        </a-button>
        <div class="logo">
          <!--<div class="logo-icon"></div>-->
          <div class="title">智能工业数据分析与优化平台</div>
        </div>
      </div>
      <div class="header-right">
        <a-button class="alert" type="text">
          <Icon icon="AlertOutlined" />
        </a-button>
        <i-avatar />
      </div>
    </div>
  </a-layout-header>
</template>

<style lang="scss" scoped>
.inner-layout-header {
  position: relative;
  padding: 0 10px;

  .header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-left {
      display: flex;
      align-items: center;
      justify-content: center;

      .menu-btn {
        display: inline-block;
        height: 40px;
        width: 40px;
        padding: 2px;
        font-size: 22px;
      }

      .open-drawer {
        display: none;
        @media screen and (max-width: 768px) {
          display: inline-block;
        }
      }

      .collapse-menu {
        display: inline-block;
        margin-right: 10px;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }

      .logo {
        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
          display: none;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          background: url('@/assets/images/logo.png') no-repeat left center;
          background-size: cover;
        }

        .title {
          font-size: 20px;
          font-weight: 500;
          color: #000;
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;

      .alert {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        font-size: 16px;
        padding: 2px;
        border: 1px #eee solid;
        border-radius: 999px;
        color: #000;
      }
    }
  }
}
</style>

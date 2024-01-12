<script lang="ts" setup>
import { ref } from 'vue'
import IAvatar from '@/layouts/components/IAvatar/IAvatar.vue'
import { useAppStore } from '@/stores'
import IAlert from '@/layouts/components/IAlert/IAlert.vue'
import { useVModel } from '@vueuse/core'

const appStore = useAppStore()
const emit = defineEmits(['update:openDrawer', 'update:menuCollapsed'])
const activeKey = ref('1')
const props = defineProps<{
  openDrawer: boolean
  menuCollapsed?: boolean
}>()
const propsOpenDrawer = useVModel(props, 'openDrawer', emit)
const propsMenuCollapsed = useVModel(props, 'menuCollapsed', emit)
</script>

<template>
  <!--TODO BEM命名待优化-->
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
          <div class="title">{{ $t('app.title') }}</div>
        </div>
      </div>
      <div class="header-right">
        <div class="lang">
          <a-dropdown :trigger="['click']">
            <a-button type="link">
              <Icon icon="GlobalOutlined" />
              {{ $t('setting.language.title') }}
              <Icon :size="10" icon="CaretDownOutlined" />
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1" @click="appStore.locale = 'zhCN'">中文</a-menu-item>
                <a-menu-item key="2" @click="appStore.locale = 'enUS'">English</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div class="skin">
          <a-dropdown :trigger="['click']">
            <a-button type="link">
              <Icon icon="SkinOutlined" />
              {{ $t('setting.theme.title') }}
              <Icon :size="10" icon="CaretDownOutlined" />
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1" @click="appStore.darkMode = 'dark'">{{ $t(`setting.theme.dark`) }}</a-menu-item>
                <a-menu-item key="2" @click="appStore.darkMode = 'light'">{{ $t(`setting.theme.light`) }}</a-menu-item>
                <!--更多颜色 TODO 废弃-->
                <!--<a-menu-item v-for="(color, name) in primaryColorEnum" :key="name" @click="appStore.themeName = name">-->
                <!--  {{ $t(`setting.theme.${name}`) }}-->
                <!--</a-menu-item>-->
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div class="role">
          <Icon icon="LockOutlined" />
          {{ $t('role.analyst') }}&nbsp;&nbsp;
        </div>
        <i-alert v-model:activeKey="activeKey" />
        <i-avatar />
      </div>
    </div>
  </a-layout-header>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

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
          background: url('@/assets/images/logo-blue.png') no-repeat left center;
          background-size: cover;
        }

        .title {
          font-size: 20px;
          font-weight: 500;
          @include useTheme {
            color: getModeVar('textColor');
          }
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;

      .lang,
      .skin {
        button {
          @include useTheme {
            color: getModeVar('textColor');
          }
        }
      }

      .role {
        // 单行文本溢出显示省略号
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 110px;

        @media screen and (max-width: 1200px) {
          display: none;
        }
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>

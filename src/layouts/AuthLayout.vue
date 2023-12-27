<script lang="ts" setup>
import IBackground from '@/layouts/components/IBackground/IBackground.vue'
import { ref, watch } from 'vue'
import router from '@/router'
import { useAppStore } from '@/stores'
import { theme } from 'ant-design-vue'

const appStore = useAppStore()
// const mobile = ref(window.innerWidth < 768)
const activeKey = ref(router.currentRoute.value.name)
const iBackgroundRef = ref<any>(null)

function toggleDarkMode(dark: 'dark' | 'light') {
  appStore.darkMode = dark
  // iBackgroundRef.value?.reCreate()
}

function handleTabsChange() {
  if (activeKey.value === 'login') {
    router.push('/auth/login')
  } else {
    router.push('/auth/register')
  }
}

// 监听路由变化
watch(
  () => router.currentRoute.value.name,
  (val) => {
    activeKey.value = val
  },
)

// // 监听窗口变化
// window.addEventListener('resize', () => {
//   mobile.value = window.innerWidth < 768
// })
</script>

<template>
  <div id="auth-layout">
    <a-config-provider
      :theme="{
        algorithm: theme.defaultAlgorithm,
      }"
    >
      <div class="auth-header">
        <div class="header-left">
          <a href="/">
            <!--移动端不显示 TODO -->
            <img src="@/assets/images/logo1-blue.png" />
          </a>
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
          <!--关闭登录界面的皮肤切换 TODO-->
          <div v-if="false" class="skin">
            <a-dropdown :trigger="['click']">
              <a-button type="link">
                <Icon icon="SkinOutlined" />
                {{ $t('setting.theme.title') }}
                <Icon :size="10" icon="CaretDownOutlined" />
              </a-button>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1" @click="toggleDarkMode('dark')">{{ $t(`setting.theme.dark`) }}</a-menu-item>
                  <a-menu-item key="2" @click="toggleDarkMode('light')">{{ $t(`setting.theme.light`) }}</a-menu-item>
                  <!--更多颜色 TODO 废弃-->
                  <!--<a-menu-item v-for="(color, name) in primaryColorEnum" :key="name" @click="appStore.themeName = name">-->
                  <!--  {{ $t(`setting.theme.${name}`) }}-->
                  <!--</a-menu-item>-->
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </div>
      <i-background ref="iBackgroundRef" />
      <div class="container">
        <div class="auth-top">
          <a-tabs v-model:active-key="activeKey" :tab-bar-gutter="150" class="auth-tabs" @change="handleTabsChange">
            <a-tab-pane key="login" :tab="$t('user.login.title')" />
            <a-tab-pane key="register" :tab="$t('user.register.title')" />
          </a-tabs>
        </div>
        <router-view v-slot="{ Component }" class="auth-form">
          <transition-slide :offset="[-16, 0]" mode="out-in">
            <component :is="Component" />
          </transition-slide>
        </router-view>
      </div>
    </a-config-provider>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

#auth-layout {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;

  .auth-header {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 0 20px 0 50px;
    box-sizing: border-box;
    backdrop-filter: blur(5px);
    z-index: 999;
    background: rgba(#ffffff, 0.2);
    //@include useTheme {
    //  background: rgba(getModeVar('cardBgColor'), 0.2);
    //}

    @media screen and (max-width: 768px) {
      height: 40px;
      padding: 0 20px;
    }

    .header-left {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      img {
        height: 50px;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;

      .lang,
      .skin {
        button {
          color: #000;
          //@include useTheme {
          //  color: getModeVar('textColor');
          //}
        }
      }
    }
  }

  .container {
    position: relative;
    width: 470px;
    margin: 0 auto;
    left: 20vw;
    padding: 10px;
    background: #ffffff;
    //@include useTheme {
    //  background: getModeVar('cardBgColor');
    //}
    //border-radius: 10px; // 圆角
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    //@include useTheme {
    //  box-shadow: 0 0 10px rgba(getModeVar('infoColor'), 0.1);
    //}

    @media screen and (max-width: 768px) {
      width: 100%;
      left: 0;
      border-radius: 0;
    }

    .auth-form {
      padding: 20px 20px 30px 20px;

      @media screen and (max-width: 768px) {
        padding: 20px;
      }
    }
  }
}

:deep(.ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap) {
  display: flex !important;
  justify-content: center !important;
}

:deep(.ant-tabs .ant-tabs-tab .ant-tabs-tab-btn) {
  font-size: 20px !important;
  @media screen and (max-width: 768px) {
    font-size: 16px !important;
  }
}
</style>

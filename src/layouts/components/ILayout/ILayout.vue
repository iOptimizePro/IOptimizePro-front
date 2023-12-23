<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { asyncRouterMap } from '@/router'
import ISide from '@/layouts/components/ISide/ISide.vue'
import IHeader from '@/layouts/components/IHeader/IHeader.vue'

const menuList = asyncRouterMap // 菜单列表
const route = useRoute() // 路由实例
const router = useRouter() // 路由实例
const selectedKeys = ref(['1']) // 侧边栏选中的key
const openDrawer = ref(false) // 移动端侧边栏
const sideWidth = ref(240) // 侧边栏宽度
const menuCollapsed = ref(false)
const init = () => {
  const path = router.currentRoute.value.path
  const item = menuList.value.find((item) => item.path === path)
  if (item) {
    selectedKeys.value = [item.path]
  }
}
onMounted(() => {
  init()
  if (window.innerWidth < 1200) {
    menuCollapsed.value = true
  }
})

/**
 * 处理页面布局
 */
function handleWindowResize() {
  const md = 768
  const lg = 1200
  const xl = 1600
  const width = window.innerWidth
  // 页面宽度小于768px时，打开移动端侧边栏
  if (width < md) {
    openDrawer.value = false
    menuCollapsed.value = true
    // 页面宽度小于1200px时，侧边栏收起, 移动端侧边栏关闭
  } else if (width > md && width < lg) {
    openDrawer.value = false
    menuCollapsed.value = true
    // 页面宽度大于1200px时，侧边栏展开
  } else if (width > lg) {
    menuCollapsed.value = false
  }
}

window.addEventListener('resize', handleWindowResize)
</script>

<template>
  <div class="basic-layout">
    <a-layout class="layout">
      <i-side
        v-model:collapsed="menuCollapsed"
        v-model:selected-keys="selectedKeys"
        :collapsible="true"
        :menu-list="menuList"
        :side-width="sideWidth"
        class="inner-side"
      />
      <a-layout class="inner-layout">
        <i-header v-model:menu-collapsed="menuCollapsed" v-model:open-drawer="openDrawer" />
        <a-layout-content>
          <slot></slot>
        </a-layout-content>
        <a-layout-footer style=""> Footer</a-layout-footer>
      </a-layout>
    </a-layout>

    <!--移动端侧边栏 a-drawer-->
    <a-drawer
      v-model:open="openDrawer"
      :body-style="{ padding: 0 }"
      :closable="false"
      :width="sideWidth"
      placement="left"
    >
      <i-side v-model:selected-keys="selectedKeys" :collapsible="false" :menu-list="menuList" :side-width="sideWidth" />
    </a-drawer>
  </div>
</template>

<style lang="scss" scoped>
.basic-layout {
  .ant-layout {
    --footer-padding: 10px;

    .ant-layout-header {
      background: #fff;
      color: #000;
    }

    .ant-layout-content {
      margin: 20px 16px;
      overflow: auto;
      max-height: calc(100vh - 70px - var(--footer-padding) * 2 - 20px - 40px);
    }

    .ant-layout-footer {
      text-align: center;
      padding: var(--footer-padding) 50px;
    }
  }

  .layout {
    min-height: 100vh;

    .inner-side {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .inner-layout {
      @media screen and (max-width: 768px) {
        margin-left: 0;
      }
    }
  }

  .mobile-drawer {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
}
</style>

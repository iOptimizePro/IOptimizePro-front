<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { asyncRouterMap } from '@/router'
import ISide from '@/layouts/components/ISide/ISide.vue'

const menuList = asyncRouterMap // 菜单列表
const route = useRoute() // 路由实例
const router = useRouter() // 路由实例
const selectedKeys = ref(['1']) // 侧边栏选中的key
const openDrawer = ref(false) // 移动端侧边栏
const sideWidth = ref(240) // 侧边栏宽度
const init = () => {
  const path = router.currentRoute.value.path
  const item = menuList.value.find((item) => item.path === path)
  if (item) {
    selectedKeys.value = [item.path]
  }
}
onMounted(() => {
  init()
})
</script>

<template>
  <div class="basic-layout">
    <a-layout class="layout">
      <i-side v-model:selected-keys="selectedKeys" :menu-list="menuList" :side-width="sideWidth" class="inner-side" />
      <a-layout class="inner-layout">
        <a-layout-header class="inner-layout-header">
          <a-button class="collapse-menu" type="text" @click="openDrawer = !openDrawer">
            <Icon icon="MenuOutlined" />
          </a-button>
          <span>
            <Icon :icon="route.meta?.icon as string" />
            {{ route.name }}
          </span>
        </a-layout-header>
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
      <i-side v-model:selected-keys="selectedKeys" :menu-list="menuList" :side-width="sideWidth" />
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
      margin-left: 240px;

      @media screen and (max-width: 768px) {
        margin-left: 0;
      }

      .inner-layout-header {
        position: relative;

        .collapse-menu {
          display: none;
          @media screen and (max-width: 768px) {
            display: inline-block;
            position: absolute;
            left: 4px;
            top: 25%;
          }
        }
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

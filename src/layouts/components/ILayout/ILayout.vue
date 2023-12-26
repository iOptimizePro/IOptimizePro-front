<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { asyncRouterMap } from '@/router'
import ISide from '@/layouts/components/ISide/ISide.vue'
import IHeader from '@/layouts/components/IHeader/IHeader.vue'
import type { IRouter } from '@/config/router.config'

const route = useRoute() // 路由实例
const router = useRouter() // 路由实例
const menuConfig = reactive({
  menuList: asyncRouterMap, // 菜单列表
  menuListArr: convertToRouterArray(asyncRouterMap.value), // 菜单列表数组
  collapsed: false, // 侧边栏收起
  selectedKeys: [] as string[], // 侧边栏选中的key
  openDrawer: false, // 移动端侧边栏
  sideWidth: 240, // 侧边栏宽度
})
const tabList = ref<IRouter[]>([])

/**
 * 将菜单列表转换为数组
 * @param routers 菜单列表
 * @returns 菜单列表数组
 */
function convertToRouterArray(routers: IRouter[]): IRouter[] {
  let result: IRouter[] = []

  routers.forEach((router) => {
    result.push(router)

    if (router.children && router.children.length > 0) {
      const convertedChildren = convertToRouterArray(router.children)
      result = result.concat(convertedChildren)
    }
  })

  return result
}

/**
 * 初始化
 */
function init() {
  const path = router.currentRoute.value.path
  const item = menuConfig.menuListArr.find((item) => item.path === path)
  if (item) {
    menuConfig.selectedKeys = [item.path]
  }
}

onMounted(() => {
  init()
  if (window.innerWidth < 1200) {
    menuConfig.collapsed = true
  }
})

/**
 * 处理tab切换
 * @param activeKey 当前选择的tab
 */
function handleTabChange(activeKey: string) {
  router.push(activeKey)
}

/**
 * 处理tab编辑
 * @param activeKey 当前选择的tab
 * @param action 操作
 */
function handleTabEdit(activeKey: string, action: 'add' | 'remove') {
  if (action !== 'remove') {
    return
  }
  let curPath = menuConfig.selectedKeys[0]
  const tabs = tabList.value
  // 关闭当前选择的tab
  if (activeKey === menuConfig.selectedKeys[0]) {
    tabs.forEach((tab, index) => {
      if (tab.path === activeKey) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          curPath = nextTab.path
        }
      }
    })
  }
  tabList.value = tabs.filter((tab) => tab.path !== activeKey)
  if (curPath !== menuConfig.selectedKeys[0]) {
    router.push(curPath)
  }
}

/**
 * 处理路由变化 向tabList中添加tab
 */
watch(
  () => route.path,
  (path) => {
    const item = menuConfig.menuListArr.find((item) => item.path === path) as IRouter
    if (item) {
      menuConfig.selectedKeys = [item.path]
    }
    const curTab = tabList.value.find((item) => item.path === path)
    if (curTab || path === undefined) {
      return
    }
    tabList.value.push(item)
  },
  { immediate: true },
)

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
    menuConfig.openDrawer = false
    menuConfig.collapsed = true
    // 页面宽度小于1200px时，侧边栏收起, 移动端侧边栏关闭
  } else if (width > md && width < lg) {
    menuConfig.openDrawer = false
    menuConfig.collapsed = true
    // 页面宽度大于1200px时，侧边栏展开
  } else if (width > lg) {
    menuConfig.collapsed = false
  }
}

window.addEventListener('resize', handleWindowResize)
</script>

<template>
  <div class="basic-layout">
    <a-layout class="layout">
      <i-side
        v-model:collapsed="menuConfig.collapsed"
        v-model:selected-keys="menuConfig.selectedKeys"
        :collapsible="true"
        :menu-list="menuConfig.menuList"
        :side-width="menuConfig.sideWidth"
        class="inner-side"
      />
      <a-layout class="inner-layout">
        <i-header v-model:menu-collapsed="menuConfig.collapsed" v-model:open-drawer="menuConfig.openDrawer" />
        <!--使用a-config-provider修改单个组件的样式 TODO-->
        <a-config-provider
          :theme="{
            components: {
              Tabs: {
                borderRadius: 10,
                colorBgContainer: '#1677ff',
                colorText: '#4096ff',
                colorPrimary: '#fff',
                fontSize: 12,
                padding: 6,
                margin: 0,
                controlHeight: 25,
                controlHeightLG: 25,
              },
            },
          }"
        >
          <!--页面切换的Tab栏-->
          <a-tabs
            v-model:active-key="menuConfig.selectedKeys[0]"
            hideAdd
            type="editable-card"
            @change="handleTabChange"
            @edit="handleTabEdit"
          >
            <template v-for="item in tabList" :key="item">
              <a-tab-pane v-if="item" :key="item.path" :closable="tabList.length > 1" :tab="item.meta.title" />
            </template>
          </a-tabs>
        </a-config-provider>
        <a-layout-content class="a-layout-content">
          <slot></slot>
        </a-layout-content>
        <a-layout-footer style=""> iOptimize 2023 Created by 智造前沿</a-layout-footer>
      </a-layout>
    </a-layout>

    <!--移动端侧边栏 a-drawer-->
    <a-drawer
      v-model:open="menuConfig.openDrawer"
      :body-style="{ padding: 0 }"
      :closable="false"
      :width="menuConfig.sideWidth"
      placement="left"
    >
      <i-side
        v-model:selected-keys="menuConfig.selectedKeys"
        :collapsible="false"
        :menu-list="menuConfig.menuList"
        :side-width="menuConfig.sideWidth"
      />
    </a-drawer>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

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
      max-height: calc(100vh - 70px - var(--footer-padding) * 2 - 20px - 30px);
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

      .a-layout-content {
        margin: 0;
        padding: 10px;
        @include useTheme {
          background: getModeVar('containerBgColor');
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

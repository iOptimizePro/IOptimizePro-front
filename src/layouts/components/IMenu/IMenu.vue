<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
const emit = defineEmits(['update:selectedKeys'])
const props = defineProps<{
  selectedKeys: string[]
  menuList: any[]
}>()
const propsSelectedKeys = computed({
  get: () => props.selectedKeys,
  set: (val) => emit('update:selectedKeys', val),
})
</script>

<template>
  <a-menu
    v-model:selectedKeys="propsSelectedKeys"
    :inline-indent="15"
    mode="inline"
    style="background: transparent; border-inline-end: none"
  >
    <!-- 或者使用 mode="inline" -->
    <template v-for="item in menuList" :key="item.path">
      <a-sub-menu v-if="'children' in item" :key="item.path">
        <template #title>
          <Icon :icon="item.meta.icon" />
          <span>{{ item.name }}</span>
        </template>
        <template v-for="subItem in item.children" :key="subItem.path">
          <a-sub-menu v-if="'children' in subItem" :key="subItem.path">
            <template #title>
              <Icon :icon="subItem.meta.icon" />
              <span>{{ subItem.name }}</span>
            </template>
            <a-menu-item v-for="subSubItem in subItem.children" :key="subSubItem.path">
              <router-link :to="subSubItem.path">
                <Icon :icon="subSubItem.meta.icon" />
                <span>{{ subSubItem.name }}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="subItem.path!">
            <router-link :to="subItem.path">
              <Icon :icon="subItem.meta.icon" />
              <span>{{ subItem.name }}</span>
            </router-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item v-else :key="item.path!">
        <router-link :to="item.path">
          <Icon :icon="item.meta.icon" />
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<style lang="scss" scoped></style>

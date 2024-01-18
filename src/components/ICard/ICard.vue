<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    // TODO 组件Ref获取异常 待修复
    // if (this.$refs.instance && Object.keys(this.$refs.instance).length > 0) {
    //   const entries = Object.entries(this.$refs.instance || {})
    //   entries.forEach(([key, value]) => {
    //     // @ts-ignore
    //     this[key] = value
    //   })
    // }
  },
  props: {
    padding: {
      type: String,
    },
  },
})
</script>

<template>
  <a-card ref="instance" v-bind="$attrs" class="i-card" :style="`padding: ${padding}`">
    <template v-for="(value, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}"></slot>
    </template>
  </a-card>
</template>

<style lang="scss"></style>

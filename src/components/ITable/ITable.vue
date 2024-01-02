<script lang="ts" setup>
defineProps<{
  columns: any[]
  dataSource: any[]
  rowSelection?: any
}>()
</script>

<template>
  <div class="table-panel">
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :row-selection="rowSelection"
      :scroll="{ x: 1200 }"
      class="table-container"
    >
      <template #title>
        <div class="table-title">
          <div class="table-title-left">
            <slot name="title-left"></slot>
          </div>
          <div class="table-title-right">
            <slot name="title-right"></slot>
          </div>
        </div>
      </template>
      <template #action>
        <slot name="action"></slot>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

.table-panel {
  width: calc(100% - 20px);
  margin: 10px;

  .table-container {
    width: 100%;

    :deep(.ant-table-title) {
      padding: 10px 0 0 0;
    }

    :deep(.ant-table-cell) {
      @include useTheme {
        background: getModeVar('cardBgColor');
      }
      //color: #1677ff;
    }

    :deep(th.ant-table-cell) {
      color: #1677ff;
      font-size: 18px;
    }

    .table-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px 10px 10px;
      border-bottom: 2px #1677ff solid;
      color: #1677ff;

      .table-title-left {
        font-size: 20px;
        font-weight: 600;
      }

      .table-title-right {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>

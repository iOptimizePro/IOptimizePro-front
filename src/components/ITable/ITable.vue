<script lang="ts" setup>
const props = defineProps({
  columns,
  dataSource,
})
</script>

<template>
  <div class="table-panel">
    <a-table :columns="columns" :data-source="dataSource" :scroll="{ x: 1200 }" class="table-container">
      <template #title>
        <div class="table-title">
          <div class="table-title-left">
            <Icon icon="ContactsOutlined" />
            任务列表
          </div>
          <div class="table-title-right">
            <a-input placeholder="搜索数据仓名称或编号">
              <template #prefix>
                <Icon icon="SearchOutlined" />
              </template>
            </a-input>
            <a-button style="margin-left: 30px" type="primary">
              <Icon icon="PlusCircleOutlined" />
              新建任务
            </a-button>
          </div>
        </div>
      </template>
      <template #action>
        <a-button type="link">
          <Icon icon="EditOutlined" />
        </a-button>
        <a-button type="link">
          <Icon icon="DeleteOutlined" />
        </a-button>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped></style>

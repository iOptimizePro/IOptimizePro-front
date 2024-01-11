<script lang="ts" setup>
import { reactive, ref } from 'vue'
import ITable from '@/components/ITable/ITable.vue'

const dataSource = ref([
  {
    key: 1,
    msgName: '任务A',
    msgTime: '2023-12-11 15:23:23',
  },
  {
    key: 2,
    msgName: '任务B',
    msgTime: '2023-12-11 15:23:23',
  },
  {
    key: 3,
    msgName: '任务C',
    msgTime: '2023-12-11 15:23:23',
  },
  {
    key: 4,
    msgName: '任务D',
    msgTime: '2023-12-11 15:23:23',
  },
  {
    key: 5,
    msgName: '任务E',
    msgTime: '2023-12-11 15:23:23',
  },
])
const columns = ref([
  // {
  //   title: '序号',
  //   dataIndex: 'key',
  // },
  {
    title: '消息名称',
    dataIndex: 'msgName',
    key: 'msgName',
  },
  {
    title: '消息时间',
    dataIndex: 'msgTime',
    key: 'msgTime',
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
])

type DataItem = {
  key: number
  msgName: string
  msgTime: string
}

const rowSelection = reactive({
  checkStrictly: false,
  selectedRowKeys: [] as (string | number)[],
  onChange: (selectedRowKeys: (string | number)[], selectedRows: DataItem[]) => {
    rowSelection.selectedRowKeys = selectedRowKeys
    console.log(rowSelection.selectedRowKeys)
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
    // console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected: boolean, selectedRows: DataItem[], changeRows: DataItem[]) => {
    // console.log(selected, selectedRows, changeRows)
  },
})
</script>

<template>
  <div class="alert-manage-panel">
    <a-space direction="vertical" size="large" style="width: 100%">
      <a-card title="消息管理">
        <p>管理接收和查看系统通知</p>
      </a-card>
      <a-card>
        <i-table :columns="columns" :data-source="dataSource" :row-selection="rowSelection">
          <template #title-left>
            <a-form layout="inline">
              <a-form-item label="类型">
                <a-select placeholder="请选择" style="width: 100px">
                  <a-select-option value="1">全部</a-select-option>
                  <a-select-option value="2">系统通知</a-select-option>
                  <a-select-option value="3">消息提醒</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="状态">
                <a-select placeholder="请选择" style="width: 100px">
                  <a-select-option value="1">全部</a-select-option>
                  <a-select-option value="2">已读</a-select-option>
                  <a-select-option value="3">未读</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item v-if="rowSelection.selectedRowKeys.length > 0">
                已选择{{ rowSelection.selectedRowKeys.length }}项
              </a-form-item>
            </a-form>
          </template>
          <template #title-right>
            <a-button style="margin-left: 30px" type="primary"> 标记为已读</a-button>
          </template>
          <template #action>
            <a-button type="link"> 查看</a-button>
            <a-button type="link"> 删除</a-button>
          </template>
        </i-table>
      </a-card>
    </a-space>
  </div>
</template>

<style lang="scss" scoped>
.alert-manage-panel {
  width: 100%;
}
</style>

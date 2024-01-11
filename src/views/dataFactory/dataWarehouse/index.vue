<script lang="ts" setup>
import { ref } from 'vue'
import ITable from '@/components/ITable/ITable.vue'

const dataSource = ref([
  {
    key: 1,
    taskNum: 'T 23121101',
    taskName: '任务A',
    createTime: '2023-12-11 15:23:23',
    updateTime: '2023-12-11 15:23:23',
    status: '进行中',
  },
  {
    key: 2,
    taskNum: 'T 23121102',
    taskName: '任务B',
    createTime: '2023-12-11 15:23:23',
    updateTime: '2023-12-11 15:23:23',
    status: '已完成',
  },
  {
    key: 3,
    taskNum: 'T 23121102',
    taskName: '任务C',
    createTime: '2023-12-11 15:23:23',
    updateTime: '2023-12-11 15:23:23',
    status: '已完成',
  },
  {
    key: 4,
    taskNum: 'T 23121102',
    taskName: '任务D',
    createTime: '2023-12-11 15:23:23',
    updateTime: '2023-12-11 15:23:23',
    status: '已完成',
  },
  {
    key: 5,
    taskNum: 'T 23121102',
    taskName: '任务E',
    createTime: '2023-12-11 15:23:23',
    updateTime: '2023-12-11 15:23:23',
    status: '已完成',
  },
])
const columns = ref([
  {
    title: '序号',
    dataIndex: 'key',
  },
  {
    title: '任务编号',
    dataIndex: 'taskNum',
    key: 'taskNum',
  },
  {
    title: '任务名称',
    dataIndex: 'taskName',
    key: 'taskName',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '最后更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '任务状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
])
</script>

<template>
  <div class="data-warehouse">
    <a-space direction="vertical" size="large" style="width: 100%">
      <a-card title="数据仓">
        <p>管理和处理数据仓</p>
      </a-card>
      <a-card>
        <i-table :columns="columns" :data-source="dataSource">
          <template #title-left>
            <Icon icon="ContactsOutlined" />
            任务列表
          </template>
          <template #title-right>
            <a-button type="primary">
              <Icon icon="PlusCircleOutlined" />
              新建任务
            </a-button>
          </template>
          <template #action>
            <a-button type="link">
              <Icon icon="EditOutlined" />
            </a-button>
            <a-button type="link">
              <Icon icon="DeleteOutlined" />
            </a-button>
          </template>
        </i-table>
      </a-card>
    </a-space>
  </div>
</template>

<style lang="scss" scoped></style>

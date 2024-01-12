<script lang="ts" setup>
import ITable from '@/components/ITable/ITable.vue'
import { ref } from 'vue'

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
import useEnterAnimation from '@/hooks/useEnterAnimation'
import { onMounted } from 'vue'

onMounted(() => {
  useEnterAnimation('.ant-space-item', { type: 'y' })
})
</script>

<template>
  <div class="task-manage-panel">
    <a-space direction="vertical" size="large" style="width: 100%">
      <a-card title="任务管理">
        <p>管理个人任务列表，一键式查看任务情况</p>
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

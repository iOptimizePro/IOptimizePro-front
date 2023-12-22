<script lang="ts" setup>
import { ref } from 'vue'

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
  </div>
</template>

<style lang="scss" scoped>
.data-warehouse {
  .table-panel {
    width: calc(100% - 50px);
    margin-top: 20px;

    .table-container {
      width: 100%;

      ::v-deep .ant-table-title {
        // ::v-deep deprecated 不建议使用
        padding: 10px 0 0 0;
      }

      ::v-deep .ant-table-cell {
        background: #ffffff;
        //color: #1677ff;
      }

      ::v-deep th.ant-table-cell {
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
}
</style>

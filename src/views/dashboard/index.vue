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
  <div class="dashboard">
    <div class="content">
      <div class="title">Welcome to iOptimizePro</div>
      <div class="card-panel">
        <a-card class="card-item" hoverable>
          <div class="card-item-title">本月新增任务</div>
          <div class="card-item-content">
            <div class="card-item-statics">786K</div>
            <div class="card-item-icon">
              <Icon icon="UserOutlined" />
            </div>
          </div>
        </a-card>
        <a-card class="card-item" hoverable>
          <div class="card-item-title">本月累计任务</div>
          <div class="card-item-content">
            <div class="card-item-statics">76</div>
            <div class="card-item-icon">
              <Icon icon="UserOutlined" />
            </div>
          </div>
        </a-card>
        <a-card class="card-item" hoverable>
          <div class="card-item-title">数据仓数量</div>
          <div class="card-item-content">
            <div class="card-item-statics">$56K</div>
            <div class="card-item-icon">
              <Icon icon="UserOutlined" />
            </div>
          </div>
        </a-card>
        <a-card class="card-item" hoverable>
          <div class="card-item-title">数据仓数量</div>
          <div class="card-item-content">
            <div class="card-item-statics">$56K</div>
            <div class="card-item-icon">
              <Icon icon="UserOutlined" />
            </div>
          </div>
        </a-card>
      </div>
      <div class="table-panel">
        <a-table :columns="columns" :data-source="dataSource" :scroll="{ x: 1200 }" class="table-container">
          <template #title>
            <div class="table-title">
              <div class="table-title-left">
                <Icon icon="ContactsOutlined" />
                任务列表
              </div>
              <div class="table-title-right">
                <a-button type="primary">
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
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  .content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    //max-width: 1200px;
    @media screen and (max-width: 768px) {
      padding: 0;
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .card-panel {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
      padding: 15px;

      @media screen and (max-width: 1600px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      .card-item {
        //min-width: 270px;
        border-radius: 20px;
        margin: 10px;
        color: #ffffff;
        $colors: (
          1: rgb(250, 125, 121),
          2: rgb(84, 172, 208),
          3: rgb(175, 80, 208),
          4: rgb(255, 204, 102),
        );
        @each $key, $value in $colors {
          &:nth-child(#{$key}) {
            background: $value;
          }
        }

        .card-item-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .card-item-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;

          .card-item-statics {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            width: 150px;
            padding: 10px;
            font-size: 24px;
            font-weight: 600;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
          }

          .card-item-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 30px;
            width: 70px;
            height: 70px;
            border-radius: 999px;
            font-size: 30px;
            font-weight: 600;
            border: 1px #ffffff solid;
          }
        }
      }
    }

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
}
</style>

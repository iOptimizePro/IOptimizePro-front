<script lang="ts" setup>
import useEnterAnimation from '@/hooks/useEnterAnimation'
import { onMounted } from 'vue'

onMounted(() => {
  useEnterAnimation('.ant-space-item', { type: 'y' })
})
</script>

<template>
  <div class="data-access">
    <a-space direction="vertical" size="large" style="width: 100%">
      <i-card title="数据接入">
        <p>接入各种数据源，实现数据导入和整合</p>
      </i-card>
      <i-card title="说明">
        <p>
          导入文件格式说明：<br />
          1.文件名中不应包含特殊字符或空格。<br />
          2.支持多种数据类型：人员信息、设备台账、故障档案、物料效据、仓储数据等。<br />
          3.支持多种数据形式：时序数据、图像数据、文本数据、数值数据等。<br />
          4.支持不同数据特性的数据：结构化数据、非结构化数据、历史数据、实时数据、报警数据等。<br />
          5.文件格式支持：csv、xlsx、json、png、jpg、txt<br />
        </p>
        <br />
        <hr color="#eee" />
        <a-space class="button-group">
          <a-button>参考示例模板</a-button>
          <a-button>查看历史导入</a-button>
        </a-space>
      </i-card>
      <i-card title="上传文件">
        <a-space direction="vertical" style="width: 100%">
          <a-upload-dragger style="width: 50%; margin: 0 auto">
            <p class="ant-upload-drag-icon">
              <Icon icon="InboxOutlined" />
            </p>
            <p class="ant-upload-text">将文件拖拽至此，或点击上传</p>
          </a-upload-dragger>
          <a-button style="float: right" type="primary">下一步</a-button>
        </a-space>
      </i-card>
    </a-space>
  </div>
</template>

<style lang="scss" scoped>
.data-access {
  .button-group {
    padding: 20px 10px 0 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>

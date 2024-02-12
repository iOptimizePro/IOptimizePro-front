<script setup lang="ts">
import IEditor from '@/components/IEditor/IEditor.vue'
import IDiffEditor from '@/components/IDiffEditor/IDiffEditor.vue'
import { ref } from 'vue'

const editorCode = ref("console.log('hello world')")

const originalCode = ref("console.log('hello world')")
const modifiedCode = ref("console.log('hello world !!!')")
</script>

<template>
  <div class="data-cleaning">
    <i-card>
      <i-editor v-model:code="editorCode" />
    </i-card>
    <br />
    <i-card>
      <i-diff-editor v-model:original-code="originalCode" v-model:modified-code="modifiedCode" />
    </i-card>
  </div>
</template>

<style scoped lang="scss"></style>

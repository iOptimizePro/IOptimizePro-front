<script lang="ts" setup>
import { onMounted } from 'vue'
import PerlinNoise from '@/components/IBackground/PerlinNoise/PerlinNoise'

const options = {
  Background: '#0a0a0a',
  Color1: '#ffffff',
  Color2: '#0799f2',
  Color3: '#45217c',
  Length: 5,
  Nums: 400,
  Size: 2,
  noiseScale: 800,
  ColorMode: 'Normal',
}
onMounted(() => {
  new PerlinNoise('.i-background', options)
})
</script>

<template>
  <div class="i-background"></div>
</template>

<style lang="scss" scoped>
.i-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #dddddd;
  z-index: -1;
}
</style>

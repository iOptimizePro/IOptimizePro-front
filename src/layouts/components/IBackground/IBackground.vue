<script lang="ts" setup></script>

<template>
  <div class="i-background">
    <img class="bg-main" src="@/assets/images/bg2.svg" />
    <img class="bg-bg" src="@/assets/images/bg2-bg.svg" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/theme.scss';

.i-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  //@include useTheme {
  //  background: getModeVar('bg1color');
  //}
  z-index: -1;
  overflow: hidden;

  .bg-main {
    position: absolute;
    left: 10%;
    bottom: 0;
    //width: 60%;
    height: 85%;
    object-fit: contain;
    object-position: left center;
    z-index: 1;
  }

  .bg-bg {
    position: absolute;
    right: 0;
    height: 100%;
  }
}
</style>

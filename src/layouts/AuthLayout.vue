<template>
  <div id="auth-layout">
    <i-background />
    <div class="container">
      <div class="auth-side">
        <div class="wrapper">
          <div class="title">{{ currentRouterComp }}</div>
        </div>
      </div>
      <router-view v-slot="{ Component }" class="auth-form">
        <transition-slide :offset="[-16, 0]" mode="out-in">
          <component :is="Component" />
        </transition-slide>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IBackground from '@/components/IBackground/IBackground.vue'
import { computed } from 'vue'
import router from '@/router'

const currentRouter = router.currentRoute
const currentRouterComp = computed(() => {
  return currentRouter.value.meta.title
})
</script>

<style lang="scss" scoped>
#auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    position: relative;
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-template-rows: 1fr;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    background: #ffffff;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto 3fr;

      width: 500px;
    }

    .auth-side {
      position: relative;
      background: url('@/assets/images/bg1.png') no-repeat center center;

      @media screen and (max-width: 768px) {
        height: 70px;
      }

      .wrapper {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        //backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
          font:
            500 45px 'Microsoft YaHei',
            sans-serif;
          color: #fff;

          @media screen and (max-width: 768px) {
            font-size: 30px;
          }
        }
      }
    }

    .auth-form {
      padding: 20px;
    }
  }
}
</style>

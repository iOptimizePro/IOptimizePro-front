<script setup lang="ts"></script>

<template>
  <div class="i-card">
    <a-card v-bind="$attrs" class="i-card__inner">
      <slot></slot>
    </a-card>
  </div>
</template>

<style scoped></style>


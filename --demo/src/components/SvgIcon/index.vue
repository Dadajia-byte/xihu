<template>
  <!-- 测试SVG图标使用 -->
  <svg :style="{ width, height }">
    <!-- xlink:href 为 svg 中的 id -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style></style>

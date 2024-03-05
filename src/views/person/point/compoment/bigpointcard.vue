<template>
  <div class="subItem">
    <pointcard></pointcard>
    <div class="line"></div>
    <pointcard></pointcard>
    <div class="line"></div>
    <pointcard></pointcard>
    <div class="line"></div>
    <pointcard></pointcard>
    <div class="line"></div>
    <pointcard></pointcard>
    <div class="line"></div>
    <pointcard></pointcard>
  </div>
</template>

<script setup lang="ts">
import pointcard from './pointcard.vue'
</script>

<style scoped>
.subItem {
  margin-left: 0.5rem;
  height: 2.375rem;
  display: flex;
  flex-wrap: wrap;
}
.line {
  margin-top: 0.5625rem;
  margin-left: 0.125rem;
  border-left: 0.025rem solid #e3e5e7;
  height: 0.875rem;
}
</style>

<template>
  <el-card class="history-card">
    <div class="title">观看历史</div>
    <cardItem></cardItem>
  </el-card>
</template>

<script setup lang="ts">
import cardItem from './component/cardItem.vue'
</script>

<style scoped>
.history-card {
  width: 150%;
  display: flex;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 10rem;
}
.title {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  margin-bottom: 0.1875rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;
}
</style>

<template>
  <el-card class="box-card">
    <div class="title1">议程订阅</div>
    <carditem></carditem>
    <div class="title2">精彩活动订阅</div>
  </el-card>
</template>

<script setup lang="ts">
import carditem from './component/carditem.vue'
</script>

<style scoped>
.box-card {
  width: 150%;
  display: flex;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 12.5rem;
}
.title1 {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  font-size: 0.375rem;
  border-left: solid .05rem #1185E4;
  padding-left: .125rem;
}
.title2 {
  margin-top: 1.25rem;
  margin-left: 0.3125rem;
  font-size: 0.375rem;
  border-left: solid .05rem #1185E4;
  padding-left: .125rem;
}
</style>

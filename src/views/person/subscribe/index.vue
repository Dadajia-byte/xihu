<template>
  <el-card class="subscribe-card">
    <div class="title1">议程订阅</div>
    <agenda-cards></agenda-cards>
    <div class="title2">精彩活动订阅</div>
    <activity-cards></activity-cards>
  </el-card>
</template>

<script setup lang="ts">
import agendaCards from './component/agendaCards.vue'
import activityCards from './component/activityCards.vue'
</script>

<style scoped>
.subscribe-card {
  width: 150%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 12.5rem;
}
.title1 {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  margin-bottom: 0.125rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;
}
.title2 {
  margin-top: 1.25rem;
  margin-left: 0.3125rem;
  margin-bottom: 0.125rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;
}
</style>

<template>
  <div class="subsItem">
    <div v-for="item in taskList" :key="item.name" class="line">
      <pointcard :data="item"></pointcard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import pointcard from './pointcard.vue'

const taskList = ref([
  {
    name: '每日签到',
    pointValue: 100,
  },
  {
    name: '观看直播',
    pointValue: 500,
  },
  {
    name: '订阅活动',
    pointValue: 300,
  },
  {
    name: '订阅会议',
    pointValue: 300,
  },
  {
    name: '邀请好友',
    pointValue: 1000,
  },
])
</script>

<style scoped>
.subsItem {
  margin-left: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}

.line {
  padding-right: 10px;
  border-right: 0.025rem solid #e3e5e7;
}
</style>

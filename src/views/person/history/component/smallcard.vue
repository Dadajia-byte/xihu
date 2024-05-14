<template>
  <div
    class="box-card"
    :style="`background: url('${getImg(historyData.img)}') no-repeat;background-size: 4rem 2.1875rem;`"
  >
    <div class="name">{{ historyData.title }}</div>
    <el-icon class="televsion"><Monitor /></el-icon>
    <div class="progress">观看至{{ historyData.progress }}%</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { getImg } from '@/utils/img'
defineProps({
  historyData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped>
.box-card {
  display: flex;
  flex-direction: column;
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  width: 4rem;
  height: 2.5rem;
  transition: transform 0.3s;
}
.box-card:hover {
  transform: scale(1.05);
}
.name {
  margin-top: 2.25rem;
  font-size: 0.1625rem;
  color: black;
}
.progress {
  margin-top: -0.1875rem;
  margin-left: 0.25rem;
  font-size: 0.1375rem;
  color: #777777;
}
.televsion {
  font-size: 0.2rem;
  margin-top: 0.075rem;
  color: #777777;
}
</style>

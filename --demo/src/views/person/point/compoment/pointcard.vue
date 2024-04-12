<template>
  <div class="box-card">
    <div class="circle">
      <div class="point">+{{ data.pointValue }}</div>
    </div>
    <div class="task">
      {{ data.name }}
    </div>
    <div class="finish" @click="goToTask(data.name)">去完成</div>
  </div>
</template>

<script setup lang="ts">
defineProps(['data'])
import usePointStore from '@/store/modules/point'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
let $router = useRouter()
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()
let pointStore = usePointStore()
const goToTask = async (data: string) => {
  if (data === '邀请好友') {
    try {
      await toClipboard('https://www.baidu.com') // 将这里的网站到时候换成西湖数字的首页网站
      ElMessage({
        type: 'success',
        message: '已复制链接到剪贴板',
        duration: 1000,
      })
      pointStore.pointName.pointname = data
      pointStore.finishPoint()
    } catch {
      ElMessage({
        type: 'error',
        message: '分享失败',
        duration: 1000,
      })
    }
  } else if (data === '订阅活动' || data === '订阅会议') {
    if (data === '订阅活动') {
      $router.push('/activity')
    } else {
      $router.push('/meeting')
    }
  }
}
</script>

<style scoped>
.box-card {
  display: flex;
  flex-direction: column;
  margin-left: 0.375rem;
  width: 1.875rem;
  height: 2.75rem;
}
.circle {
  margin-top: 0.125rem;
  margin-left: 0.25rem;
  border-radius: 50%;
  background-image: linear-gradient(to right, #4aa3eb, #79c3ff);
  width: 1.25rem;
  height: 1.25rem;
}
.point {
  margin-top: 0.5rem;
  margin-left: 0.2625rem;
  color: white;
  font-size: 0.275rem;
}
.task {
  margin-top: 0.125rem;
  margin-left: 0.25rem;
  width: 1.25rem;
  font-size: 0.2125rem;
  text-align: center;
  line-height: 0.25rem;
}
.finish {
  margin-top: 0.15rem;
  margin-left: 0.475rem;
  font-size: 0.1625rem;
  width: 0.7875rem;
  padding: 0.05rem;
  color: #abaaaa;
  border-radius: 0.375rem;
  border: 0.0125rem solid #abaaaa;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #409eff;
    color: white;
  }
}
</style>

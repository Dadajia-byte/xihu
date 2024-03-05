<template>
  <div class="box-card">
    <div class="name">教育技术产业融合创新发展论坛</div>
    <el-icon class="clock"><Clock /></el-icon>
    <div class="time">08:30-12:10</div>
    <el-icon class="location"><MapLocation /></el-icon>
    <div class="place">杭州洲际酒店·国际厅1厅</div>
    <div class="type">平行论坛</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box-card {
  background: url(../../../../assets/images/person_images/education.jpeg)
    no-repeat;
  background-size: 4rem 2.25rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  width: 4rem;
  height: 2.25rem;
  transition: transform 0.3s;
}
.box-card:hover {
  transform: scale(1.1); /* 鼠标悬浮时放大1.1倍 */
}
.name {
  margin-top: 0.125rem;
  margin-left: 0.125rem;
  font-size: 0.1625rem;
  color: white;
}
.time {
  margin-top: -0.175rem;
  margin-left: 0.4rem;
  font-size: 0.1375rem;
  color: white;
}
.clock {
  font-size: 0.225rem;
  margin-top: 1.6rem;
  margin-left: 0.125rem;
  color: white;
}
.location {
  font-size: 0.2rem;
  margin-top: -0.1875rem;
  margin-left: 2.0625rem;
  color: white;
}
.place {
  margin-top: -0.1625rem;
  margin-left: 2.3125rem;
  font-size: 0.1375rem;
  color: white;
}
.type {
  margin-top: -0.4125rem;
  margin-left: 3.0625rem;
  font-size: 0.1375rem;
  background-color: #1185e4;
  width: 0.75rem;
  padding: 0.05rem 0.05rem 0.0375rem 0.05rem;
  color: white;
  border-radius: 0.375rem;
  text-align: center;
}
</style>

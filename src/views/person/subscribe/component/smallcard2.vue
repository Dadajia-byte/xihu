<template>
  <div class="box-card">
    <div class="name">格致论道@西湖论剑</div>
    <el-icon class="clock"><Clock /></el-icon>
    <div class="time">2023-05-05 18:30-21:45</div>
    <div class="type">查看详情</div>
    <el-icon class="right"><Right /></el-icon>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box-card {
  background: url(../../../../assets/images/person_images/gezhilundao.png)
    no-repeat;
  background-size: 4rem 2.25rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  width: 4rem;
  height: 3.6875rem;
  transition: box-shadow 0.3s;
}
.box-card:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* 鼠标悬浮时显示阴影 */
}
.name {
  margin-top: 2.4375rem;
  margin-left: 0.1875rem;
  font-size: 15px;
  color: black;
}
.time {
  margin-top: -0.1875rem;
  margin-left: .425rem;
  font-size: 11px;
  color: #1185e4;
}
.clock {
  font-size: 0.2rem;
  margin-top: 0.1875rem;
  margin-left: 0.1875rem;
  color: #1185e4;
}
.type {
  margin-top: 0.25rem;
  margin-left: 2.8125rem;
  font-size: 11px;
  width: 1.025rem;
  padding: 0.0437rem 0.05rem 0.05rem 0.0875rem;
  color: #1185e4;
  border: 1px solid #1185e4;
  border-radius: 0.375rem;
}
.right {
  margin-top: -0.2437rem;
  margin-left: 3.5875rem;
  font-size: 0.175rem;
  color: #1185e4;
}
</style>

<template>
  <div class="box-card">
    <div class="name">{{ data.title }}</div>
    <div style="display: flex">
      <el-icon class="clock"><Clock /></el-icon>
      <div class="time">{{ data.time }}</div>
    </div>

    <div>
      <div class="type">
        查看详情
        <el-icon class="right"><Right /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['data'])
</script>

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
  margin-top: 0.2125rem;
  margin-left: 0.0375rem;
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.25rem;
  font-size: 11px;
  width: 0.975rem;
  color: #1185e4;
  border: 1px solid #1185e4;
  margin-left: 70%;
  border-radius: 0.375rem;
  transition: all 0.3s;

  .right {
    font-size: 0.175rem;
    color: #1185e4;
  }
  &:hover {
    scale: 1.05;
    background-color: #1185e4;
    color: white;
    .right {
      color: white;
    }
  }
}
</style>

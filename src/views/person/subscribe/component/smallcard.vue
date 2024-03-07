<template>
  <div class="box-card">
    <div class="name">教育技术产业融合创新发展论坛</div>
    <div class="time-location-box">
      <div style="display: flex;">
        <el-icon class="clock"><Clock /></el-icon>
        <div class="time">08:30-12:10</div>
      </div>
      <div class="location-box">
        <el-icon class="location"><MapLocation /></el-icon>
        <div class="place">杭州洲际酒店·国际厅1厅</div>
      </div>
    </div>
    <div class="type-box">
      <div class="type">平行论坛</div>
    </div>
    
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
.time-location-box{
  display: flex;
  flex-direction: column;
}
.time {
  margin-top: 1.6625rem;
  margin-left: .025rem;
  font-size: 0.1375rem;
  color: white;
}
.clock {
  font-size: .2rem;
  margin-top: 1.625rem;
  margin-left: .125rem;
  color: white;
}
.location {
  font-size: 0.2rem;
  margin-top: -0.2125rem;
  margin-left: 2.0625rem;
  color: white;
}
.place {
  margin-top: -0.1625rem;
  margin-left: .025rem;
  font-size: 0.1375rem;
  color: white;
}
.location-box{
  display: flex;
  justify-content: flex-end;
  margin-right: .1875rem;
}
.type {
  font-size: 0.1375rem;
  background-color: #1185e4;
  width: auto;
  padding: 0.05rem .075rem 0.0375rem 0.075rem;
  color: white;
  border-radius: 0.375rem;
}
.type-box{
  display: flex;
  justify-content: flex-end;
  margin-top: -0.4375rem;
  margin-right: .1625rem;
}
</style>

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
  background: url(../../../../assets/images/person_images/education.jpeg) no-repeat;
  background-size: 5.625rem 3.75rem;
  display: flex;
  flex-direction: column;
  width: 5.625rem;
  height: 3.75rem;
  overflow: hidden;
}

.name {

  margin-top: 0.125rem;
  margin-left: 0.125rem;
  font-size: 13px;
  color: white;
}
.time {

  margin-top: 1.875rem;
  margin-left: 0.4rem;
  font-size: 11px;
  color: white;
}
.clock {
  font-size: 0.225rem;

  margin-top: 1.85rem;
  margin-left: 0.125rem;
  color: white;
}
.location {
  font-size: 0.225rem;

  margin-top: 1.85rem;
  margin-left: 1.775rem;
  color: white;
}
.place {

  margin-top: 1.875rem;
  margin-left: 2.075rem;
  font-size: 11px;
  color: white;
}
.type{

  margin-top: 1.5rem;
  margin-left: 3.0625rem;
  font-size: 11px;
  background-color: #1185E4;
  width: .9rem;
  padding: .0625rem;
  color: white;
  border-radius: .375rem;
  text-align: center;
}
</style>
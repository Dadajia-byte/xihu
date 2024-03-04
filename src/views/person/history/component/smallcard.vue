<template>
  <div class="box-card">
    <div class="name">教育技术产业融合创新发展论坛</div>
    <el-icon class="televsion"><Monitor /></el-icon>
    <div class="progress">观看至75%</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box-card {
  background: url(../../../../assets/images/person_images/education.jpeg)
    no-repeat;
  background-size: 4rem 2.1875rem;
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
  font-size: 13px;
  color: black;
}
.progress {
  margin-top: -0.1875rem;
  margin-left: 0.25rem;
  font-size: 11px;
  color: #777777;
}
.televsion {
  font-size: 0.2rem;
  margin-top: 0.075rem;
  color: #777777;
}
</style>

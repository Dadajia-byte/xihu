<template>
  <el-card class="calendar-card">
    <el-table border style="width: 13.125rem" class="table">
    <el-table-column prop="date" label="" width="80" />
    <el-table-column prop="date" label="5月5日" />
    <el-table-column prop="name" label="5月6日" />
    <el-table-column prop="address" label="5月7日" />
    <el-table-column prop="address" label="5月8日" />
  </el-table>
  </el-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
.calendar-card {
  width: 150%;
  display: flex;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 12.5rem;
}
.time {
  color: #1185e4;
  text-align: center;
}
</style>

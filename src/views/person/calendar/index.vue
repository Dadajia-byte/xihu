<template>
  <el-card class="calendar-card">
    <el-table :data="tableData" border style="width: 13.125rem" class="table">
      <el-table-column prop="time" label="" width="80">
        <template #default="{ row }">
          <el-icon v-if="row.index === 0 && row.columnIndex === 0">
            <Calendar />
          </el-icon>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="5月5日" class="co" />
      <el-table-column prop="name" label="5月6日" />
      <el-table-column prop="address" label="5月7日" />
      <el-table-column prop="address" label="5月8日" />
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
const tableData = [
  {
    time: '08:30',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    time: '09:00',
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    time: '09:30',
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    time: '10:00',
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    time: '12:30',
  },
  {
    time: '13:30',
  },
  {
    time: '14:00',
  },
  {
    time: '15:00',
  },
  {
    time: '15:30',
  },
  {
    time: '18:00',
  },
]
</script>

<style scoped>
.calendar-card {
  width: 150%;
  display: flex;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 12.5rem;
}
.table {
  margin-left: 0.0625rem;
}
</style>

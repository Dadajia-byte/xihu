<template>
  <el-card class="calendar-card">
    <el-table
      :data="tableData"
      border
      :row-style="{ height: '200px' }"
      :cell-style="{ borderColor: '#D8D8D8', fontSize: '13px' }"
      :header-cell-style="{
        color: '#333333',
        'text-align': 'center',
        borderColor: '#D8D8D8',
      }"
      class="table"
    >
      <el-table-column prop="time" label="" width="70%" align="center" />
      <el-table-column prop="date5" label="5月5日" :cell-style="cellStyle">
        <template #default="{ row }">
          <div class="cell-wrap">{{ row.date5 }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="date6" label="5月6日" />
      <el-table-column prop="date7" label="5月7日" />
      <el-table-column prop="date8" label="5月8日" />
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
//@ts-ignore
const cellStyle = ({ _row, _column, rowIndex, columnIndex }) => {
  //@ts-ignore
  if (rowIndex !== 0 && columnIndex !== 0) {
    return 'font-size: 14px' // 设置除了表头和首列以外的文字大小
  }
}

const tableData = [
  {
    time: '08:30',
    date5: '08:30-12:10\n教育技术产业融合创新发展论坛',
    data6: 'Tom',
    data7: 'No. 189, Grove St, Los Angeles',
    data8: 'No. 189, Grove St, Los Angeles',
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
  height: 31.25rem;
}
.table {
  margin-left: 0.0625rem;
  width: 13.125rem;
  white-space: pre-line;
  color: #333333;
  border: 0.0125rem solid #d8d8d8;
}
.cell-wrap {
  white-space: pre-wrap;
}
</style>

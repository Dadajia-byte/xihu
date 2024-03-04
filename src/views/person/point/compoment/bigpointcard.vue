<template>
    <div class="subItem">
      <pointcard></pointcard>
      <div class="line"></div>
      <pointcard></pointcard>
      <div class="line"></div>
      <pointcard></pointcard>
      <div class="line"></div>
      <pointcard></pointcard>
      <div class="line"></div>
      <pointcard></pointcard>
      <div class="more">查看更多</div>
      <el-icon class="down"><ArrowDown /></el-icon>
    </div>
  </template>
  
  <script setup lang="ts">
  import pointcard from './pointcard.vue'
  </script>
  
  <style scoped>
  .subItem {
    margin-left: .625rem;
    height: 3rem;
    display: flex;
  }
  .line{
    margin-top: .5625rem;
    margin-left: -4.1875rem;
    border-left: .025rem solid #E3E5E7;
    height: .875rem;
  }
  .more{
    margin-top: 2.875rem;
    margin-left: -10.5375rem;
    font-size: .175rem;
    color: #1185e4;
  }
  .down{
    margin-top: 2.875rem;
    font-size: .2rem;
    color: #1185e4;
  }
  </style>
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
    </div>
  </template>
  
  <script setup lang="ts">
  import pointcard from './pointcard.vue'
  </script>
  
  <style scoped>
  .subItem {
    margin-left: .5rem;
    height: 2.375rem;
    display: flex;
    flex-wrap: wrap;
  }
  .line{
    margin-top: .5625rem;
    margin-left: .125rem;
    border-left: .025rem solid #E3E5E7;
    height: .875rem;
  }
  </style>
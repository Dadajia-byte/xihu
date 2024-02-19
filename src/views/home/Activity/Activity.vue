<template>
  <div>
    <span class="divider">精彩活动</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.divider {
  display: flex;
  width: 280px;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin: 40px auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 3px solid #fff;
    margin: 0 10px;
  }
}
</style>

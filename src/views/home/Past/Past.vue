<template>
  <div>
    <span class="divider">过去大会</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.divider {
  display: flex;
  width: 280px;
  align-items: center;
  text-align: center;
  color: #1185e4;
  font-size: 30px;
  margin: 40px auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 3px solid #1185e4;
    margin: 0 10px;
  }
}
</style>

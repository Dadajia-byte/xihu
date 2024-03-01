<template>
  <div>
    <span class="divider">过去大会</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.divider {
  display: flex;
  width: 4rem;
  align-items: center;
  text-align: center;
  color: #1185e4;
  font-size: 0.4286rem;
  margin: 0.5714rem auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 0.0429rem solid #1185e4;
    margin: 0 0.1429rem;
  }
}
</style>

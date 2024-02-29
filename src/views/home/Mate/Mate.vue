<template>
  <div>
    <span class="divider">合作伙伴</span>
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
  font-size: .4286rem;
  margin: .5714rem auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: .0429rem solid #1185e4;
    margin: 0 .1429rem;
  }
}
</style>

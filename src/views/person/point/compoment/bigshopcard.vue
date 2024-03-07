<template>
  <div class="subItem">
    <shopcard></shopcard>
    <shopcard></shopcard>
    <shopcard></shopcard>
    <shopcard></shopcard>
    <shopcard></shopcard>
  </div>
</template>

<script setup lang="ts">
import shopcard from './shopcard.vue'
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.0625rem;
}
</style>

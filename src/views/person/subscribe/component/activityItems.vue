<template>
  <div class="subItem">
    <activitycard></activitycard>
    <activitycard></activitycard>
    <activitycard></activitycard>
  </div>
</template>

<script setup lang="ts">
import activitycard from './activitycard.vue'
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

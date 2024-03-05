<template>
  <div class="subItem">
    <smallcard></smallcard>
    <smallcard></smallcard>
    <smallcard></smallcard>
    <smallcard></smallcard>
  </div>
</template>

<script setup lang="ts">
import smallcard from './smallcard.vue'
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

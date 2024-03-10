<template>
  <div class="subItem">
    <meetingcard></meetingcard>
    <meetingcard></meetingcard>
    <meetingcard></meetingcard>
    <meetingcard></meetingcard>
    <meetingcard></meetingcard>
    <meetingcard></meetingcard>
    <meetingcard></meetingcard>
    <meetingcard></meetingcard>
  </div>
</template>

<script setup lang="ts">
import meetingcard from './meetingcard.vue'
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

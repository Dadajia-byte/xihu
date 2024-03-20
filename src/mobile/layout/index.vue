<template>
  <div class="layout">
    <Main></Main>
    <BotBar class="botBar"></BotBar>
  </div>
</template>

<script setup lang="ts">
import BotBar from './botBar/index.vue'
import Main from './main/index.vue'
</script>

<style scoped>
.layout {
  height: 1000vh;
  background-color: #f5f9fc;
  .botBar {
    position: fixed;
    bottom: 0;
    z-index: 10000;
  }
}
</style>

<template>
  <div class="layout">
    <Main class="main"></Main>
    <BotBar class="botBar"></BotBar>
  </div>
</template>

<script setup lang="ts">
import BotBar from './botBar/index.vue'
import Main from './main/index.vue'
</script>

<style scoped lang="scss">
.layout {
  background-color: #f5f9fc;
  .main {
    padding-bottom: 10vh;
  }
  .botBar {
    position: fixed;
    bottom: 0;
    z-index: 10000;
  }
}
</style>

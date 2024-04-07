<template>
  <div class="exhibitor-page">
    <Screen></Screen>
    <iframe
      src="https://roma.720yun.com/vr/ce1c0d20bffcf1f9"
      frameborder="no"
      width="100%"
      height="1000"
    ></iframe>

    <Exhibitions></Exhibitions>
  </div>
</template>

<script setup lang="ts">
import Screen from './components/Screen.vue'
import Exhibitions from './components/Exhibitions.vue'
</script>

<style scoped lang="scss">
.exhibitor-page {
}
</style>

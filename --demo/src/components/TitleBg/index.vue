<template>
  <div class="theTitle">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '我是标题',
  },
})
</script>

<style scoped>
.theTitle {
  background: linear-gradient(to bottom, #fe4e00 50%, #0000 50%) center center /
    100vw 100vh fixed;
  /* height: 100vh; */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 0.0125rem #fe4e00;
}
</style>

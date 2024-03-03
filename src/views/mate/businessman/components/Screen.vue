<template>
  <div class="screen-box" ref="vantaRef">
    <h1 class="title_1">
      <span class="wow fadeInLeft">虚拟数字展馆</span>
      <span class="wow fadeInDown">&</span>
      <span class="wow fadeInRight">AR展厅</span>
    </h1>
    <h1 class="title_2 wow fadeInUp">
      <span v-for="item in curStrs">{{ item }}</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import clouds from 'vanta/dist/vanta.clouds.min'
import { onMounted, onUnmounted, ref } from 'vue'
// @ts-ignore
import WOW from 'wow.js'
import { useCoding } from '@/utils/useCoding'

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}
const vantaEffect = ref()
const vantaRef = ref()
const { curStrs, startCoding, destroyCoding } =
  useCoding('展商风采——带您云游数字展馆')

const initVanta = () => {
  vantaEffect.value = clouds({
    el: vantaRef.value,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    skyColor: 0x4ba8d9,
    cloudColor: 0xaabfe3,
    sunGlareColor: 0x2a2a26,
    speed: 1.4,
  })
}

onMounted(() => {
  initVanta()
  initWOW()
  startCoding()
})

onUnmounted(() => {
  if (vantaEffect.value) {
    vantaEffect.value.destroy()
  }
})
</script>

<style scoped lang="scss">
.screen-box {
  width: 100%;
  height: calc(100vh - $layout-header-height);
  min-height: 10rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15% 20%;
  gap: 0.6667rem;

  .title_1 {
    font-size: 1.1rem;
    display: flex;
    gap: 0.3333rem;
  }

  .title_2 {
    font-size: 0.5rem;
  }
}
</style>

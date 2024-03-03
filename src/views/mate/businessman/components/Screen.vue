<template>
  <div class="screen-box" ref="vantaRef">
    <h1 class="title_1">
      <span class="wow fadeInLeft">展商合作</span>
      <video src="https://cnstatic01.e.vhall.com/upload/saas/webinars/record-cover/20230422/1476a6e029c984632988dcc8882848ce.jpg?mode=1&have-wap-image=750"></video>

    </h1>
    <h1 class="title_2 wow fadeInUp">
      <span v-for="item in curStrs">{{ item }}</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import * as three from 'three'
//@ts-ignore
import rings from 'vanta/dist/vanta.rings.min'
import { onMounted, onUnmounted, ref } from 'vue'
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
  useCoding('展商风采——助力数字安全')

const initVanta = () => {
  vantaEffect.value = rings({
    el: vantaRef.value,
    THREE: three,
    mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundAlpha:1,
  backgroundColor:0x202428,
  color:0x88ff00
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

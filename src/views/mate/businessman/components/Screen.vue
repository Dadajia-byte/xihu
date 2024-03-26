<template>
  <div class="screen-box" ref="vantaRef">
    <div class="title_1">
      <div class="wow fadeInLeft">展商合作</div>
    </div>
    <video ref="videoPlayer" class="video-js"></video>
    <div class="title_2 wow fadeInUp">
      <span v-for="item in curStrs">{{ item }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as three from 'three'
//@ts-ignore
import rings from 'vanta/dist/vanta.rings.min'
import { onMounted, onUnmounted, ref } from 'vue'
import WOW from 'wow.js'
import videojs from 'video.js'

const videoPlayer = ref()
const myPlayer = ref()

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
const { curStrs, startCoding } = useCoding('展商风采——助力数字安全')

const initVanta = () => {
  vantaEffect.value = rings({
    el: vantaRef.value,
    THREE: three,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 1,
    backgroundColor: 0x202428,
    color: 0x88ff00,
  })
}

onMounted(() => {
  initVanta()
  initWOW()
  startCoding()
  myPlayer.value = videojs(
    videoPlayer.value,
    {
      controls: true,
      poster:
        'https://cnstatic01.e.vhall.com/upload/saas/webinars/record-cover/20230422/1476a6e029c984632988dcc8882848ce.jpg?mode=1&have-wap-image=750',
      source: [
        {
          src: '', // 缺少视频链接
          type: 'video/mp4',
        },
      ],
      controlBar: {
        remainingTimeDisplay: {
          displayNegative: false,
        },
      },
      playbackRates: [0.5, 1, 1.5, 2],
    },
    () => {
      myPlayer.value.log('play.....')
    },
  )
})

onUnmounted(() => {
  /* if (vantaEffect.value) {
    vantaEffect.value.destroy()
  } */
  if (myPlayer.value) {
    myPlayer.value.dispose()
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
  padding: 3% 20%;
  .title_1 {
    font-size: 1.1rem;
    margin: 0.625rem auto;
  }

  .title_2 {
    font-size: 0.4rem;
  }
  .video-js {
    width: 12.5rem;
    height: 7.5rem;
    margin-top: 0.25rem;
    margin-bottom: 0.625rem;
  }
}
</style>

<template>
  <div class="screen-box" ref="vantaRef">
<<<<<<< HEAD
    <h1 class="title_1">
      <span class="wow fadeInLeft">虚拟数字展馆</span>
      <span class="wow fadeInDown">&</span>
      <span class="wow fadeInRight">AR展厅</span>
    </h1>
    <h1 class="title_2 wow fadeInUp">
      <span v-for="item in curStrs">{{ item }}</span>
    </h1>
=======
    <div class="title_1">
      <div class="wow fadeInLeft">展商合作</div>
    </div>
    <video ref="videoPlayer" class="video-js"></video>
    <div class="title_2 wow fadeInUp">
      <span v-for="item in curStrs">{{ item }}</span>
    </div>
>>>>>>> 296e24bd4209c01c2d7296a25be3ba6252f8b87c
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
// @ts-ignore
import clouds from 'vanta/dist/vanta.clouds.min'
import { onMounted, onUnmounted, ref } from 'vue'
// @ts-ignore
=======
import * as three from 'three'
//@ts-ignore
import rings from 'vanta/dist/vanta.rings.min'
import { onMounted, onUnmounted, ref } from 'vue'
>>>>>>> 296e24bd4209c01c2d7296a25be3ba6252f8b87c
import WOW from 'wow.js'
import videjs from 'video.js'

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
const { curStrs, startCoding, destroyCoding } =
<<<<<<< HEAD
  useCoding('展商风采——带您云游数字展馆')

const initVanta = () => {
  vantaEffect.value = clouds({
    el: vantaRef.value,
=======
  useCoding('展商风采——助力数字安全')

const initVanta = () => {
  vantaEffect.value = rings({
    el: vantaRef.value,
    THREE: three,
>>>>>>> 296e24bd4209c01c2d7296a25be3ba6252f8b87c
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
<<<<<<< HEAD
    skyColor: 0x4ba8d9,
    cloudColor: 0xaabfe3,
    sunGlareColor: 0x2a2a26,
    speed: 1.4,
=======
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 1,
    backgroundColor: 0x202428,
    color: 0x88ff00,
>>>>>>> 296e24bd4209c01c2d7296a25be3ba6252f8b87c
  })
}

onMounted(() => {
  initVanta()
  initWOW()
  startCoding()
<<<<<<< HEAD
=======
  myPlayer.value = videjs(
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
>>>>>>> 296e24bd4209c01c2d7296a25be3ba6252f8b87c
})

onUnmounted(() => {
  if (vantaEffect.value) {
    vantaEffect.value.destroy()
  }
<<<<<<< HEAD
=======
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
>>>>>>> 296e24bd4209c01c2d7296a25be3ba6252f8b87c
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
<<<<<<< HEAD
  padding: 15% 20%;
  gap: 0.6667rem;

  .title_1 {
    font-size: 1.1rem;
    display: flex;
    gap: 0.3333rem;
  }

  .title_2 {
    font-size: 0.5rem;
=======
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
>>>>>>> 296e24bd4209c01c2d7296a25be3ba6252f8b87c
  }
}
</style>

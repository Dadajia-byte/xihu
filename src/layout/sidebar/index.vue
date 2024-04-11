<template>
  <div class="container">
    <div class="poster" @click="poster">
      <svgIcon name="share" style="width: 0.45rem; height: 0.45rem"></svgIcon>
      <div class="content">海报分享</div>
    </div>

    <div class="clockIn" @click="clockIn">
      <svgIcon name="shot" style="width: 0.45rem; height: 0.45rem"></svgIcon>

      <div class="content">打卡分享</div>
    </div>
    <div class="communication" @click="AiReport">
      <svgIcon name="ai2" style="width: 0.45rem; height: 0.45rem"></svgIcon>

      <div class="content">AI体验</div>
    </div>
    <div class="buy" @click="buyTicket">
      <svgIcon name="buy" style="width: 0.45rem; height: 0.45rem"></svgIcon>

      <div class="content">立即购票</div>
    </div>

    <transition name="fade">
      <div class="backTop" @click="backTop" ref="bt" v-if="isShow">
        <svgIcon name="toTop" style="width: 0.35rem; height: 0.35rem"></svgIcon>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import judgeLog from '@/utils/judgeLog'
import { useRouter } from 'vue-router'
let $router = useRouter()

const isShow = ref(false)

const backTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const poster = () => {
  let res = judgeLog()
  if (res) {
    $router.push('/poster')
  }
}

const clockIn = () => {
  let res = judgeLog()
  if (res) {
    $router.push('/shot')
  }
}

const AiReport = () => {
  let res = judgeLog()
  if (res) {
    $router.push('/AIreport')
  }
}
const buyTicket = () => {
  // let res = judgeLog()
  // if (res) {
  $router.push('/onlinebuy')
  // }
}
onMounted(() => {
  window.onscroll = function () {
    let high = document.documentElement.scrollTop || document.body.scrollTop // 兼容
    if (high >= 900) {
      isShow.value = true
    } else {
      isShow.value = false
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.5s;

  .clockIn,
  .backTop,
  .about,
  .communication,
  .buy,
  .poster {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 0.875rem;
    height: 0.875rem;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0.0625rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    margin: 0.1rem;

    &:hover {
      background-color: #f2f6fc;
      scale: 1.05;
    }
  }

  .backTop {
    scale: 0.8;

    .trangle {
      background-color: #409eff;
      width: 0.4375rem;
      height: 0.3125rem;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }
  }

  .clockIn,
  .communication,
  .poster,
  .buy {
    div {
      padding-top: 0.05rem;
      font-size: 0.15rem;
      @include linear-txt;
    }
  }

  .about {
    scale: 0.8;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0 !important;
}
</style>

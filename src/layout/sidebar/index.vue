<template>
  <div class="container">
    <div class="poster" @click="poster">
      <el-icon size="0.35rem" color="#409eff"><Share /></el-icon>
      <div>海报分享</div>
    </div>

    <div class="clockIn" @click="clockIn">
      <el-icon size="0.35rem" color="#0b81f0"><Camera /></el-icon>
      <div>打卡分享</div>
    </div>
    <div class="communication" @click="AiReport">
      <el-icon size="0.35rem" color="#0b81f0"><ChatLineRound /></el-icon>
      <div>AI交流</div>
    </div>
    <div class="about">
      <el-icon size="0.45rem" color="#0b81f0"><MoreFilled /></el-icon>
    </div>
    <transition name="fade">
      <div class="backTop" @click="backTop" ref="bt" v-if="isShow">
        <div class="trangle"></div>
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
  judgeLog()
}

const AiReport = () => {
  let res = judgeLog()
  if (res) {
    $router.push('/AIreport')
  }
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.5s;
  .clockIn,
  .backTop,
  .about,
  .communication,
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
  .poster {
    div {
      padding-top: 0.05rem;
      font-size: 0.15rem;
      color: #409eff;
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

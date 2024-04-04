<template>
  <div class="container">
    <div
      class="home"
      @touchstart="handleClick('/home', 0)"
      :style="{ color: isActive[0] ? '#2378bd' : '#bfbfbf' }"
    >
      <el-icon><HomeFilled /></el-icon>
      <div>首页</div>
    </div>
    <div
      class="activity"
      @touchstart="handleClick('/activity', 1)"
      :style="{ color: isActive[1] ? '#2378bd' : '#bfbfbf' }"
    >
      <el-icon><List /></el-icon>
      <div>精彩活动</div>
    </div>
    <div class="meeting" @touchstart="handleClick('/meeting', 5)">
      <div class="round">大会议程</div>
    </div>
    <div
      class="mate"
      @touchstart="handleClick('/mate', 2)"
      :style="{ color: isActive[2] ? '#2378bd' : '#bfbfbf' }"
    >
      <el-icon><ChromeFilled /></el-icon>
      <div>展商风采</div>
    </div>
    <div
      class="me"
      @touchstart="handleClick('/me', 3)"
      :style="{ color: isActive[3] ? '#2378bd' : '#bfbfbf' }"
    >
      <el-icon><UserFilled /></el-icon>
      <div>我的</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const isActive = ref([true, false, false, false])

const $router = useRouter()
const handleClick = (route: string, num: number) => {
  if (num != 5) {
    isActive.value.forEach((_item, index: number) => {
      isActive.value[index] = false
    })
    isActive.value[num] = true
  }
  $router.push(route)
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 8vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .home,
  .activity,
  .mate,
  .me {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 13%;
    height: 75%;
    color: #bfbfbf;
    font-size: 3.2vw;
    transition: all 0.4s;
    div {
      padding-top: 0.2vh;
    }
  }
  .meeting {
    width: 20%;
    height: 100%;
    position: relative;
    .round {
      position: absolute;
      width: 17vw;
      height: 17vw;
      left: 50%;
      top: -25%;
      transform: translateX(-50%);
      background: linear-gradient(to bottom, #1f7ecf, #29ccdc);
      border-radius: 50%;
      color: white;
      font-size: 3.3vw;
      text-align: center;
      font-weight: 700;
      line-height: 17vw;
      box-shadow: 0 0.8vw 2vw 0.8vw rgba(41, 188, 221, 0.3);
      z-index: 0;
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
        width: 115%;
        height: 115%;
        border-radius: 50%;
        border: #dadde4 solid 0.15vw;
        z-index: -1;
      }
    }
  }
}

.el-icon {
  font-size: 8vw;
}
</style>

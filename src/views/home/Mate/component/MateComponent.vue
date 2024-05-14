<template>
  <div
    class="mate-container wow"
    :class="animateClass(index)"
    data-wow-duration="1s"
    data-wow-delay="0.7s"
    v-for="(mateData, index) in mateDatas"
    :key="index"
  >
    <el-card :body-style="{ padding: '0px' }">
      <div
        class="content-wrapper"
        ref="matewrapper"
        :style="{ height: expandedIndex === index ? '100%' : '3.309rem' }"
      >
        <div class="title">{{ mateData.title }}</div>
        <div class="logo-wrapper">
          <div class="logo-container">
            <div
              class="logo"
              v-for="(logo, index) in mateData.logoData"
              :key="index"
            >
              <div class="img">
                <img v-lazy="logo.logoUrl" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fold"
        @click="handleFold(index)"
        v-show="mateData.logoData.length > 5"
      >
        {{ expandedIndex === index ? '点击收起' : '查看更多' }}
        <el-icon v-show="expandedIndex === index ? false : true">
          <ArrowDown />
        </el-icon>
        <el-icon v-show="expandedIndex === index ? true : false">
          <ArrowUp />
        </el-icon>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
import WOW from 'wow.js'

defineProps(['mateDatas'])

const animateClass = (index: number) => ({
  bounceInLeft: index % 2 === 0,
  bounceInRight: index % 2 !== 0,
})
const expandedIndex = ref(-1) // -1 表示没有展开的卡片
const handleFold = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? -1 : index
}

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}
onMounted(() => {
  initWOW()
})
</script>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 3.309rem;
  overflow: hidden;
  transition: height 0.3s ease;

  .title {
    width: 3.5812rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.fold {
  text-align: center;
  font-size: 0.2625rem;
  margin: 0.2625rem 0;
  color: #1e8ce6;
  cursor: pointer;
}

.logo-container {
  width: 17.1rem;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.309rem;
    width: calc(100% / 5);

    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-height: 80%;
        max-width: 80%;
      }
    }
  }
}

.mate-container {
  .el-card {
    font-size: 0.45rem;
    margin: 0 auto 0.525rem;
    width: 20.6812rem;
  }
}
</style>

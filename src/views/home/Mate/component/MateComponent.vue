<template>
  <div
    class="mate-container wow"
    :class="animateClass(index)"
    data-wow-duration="1.5s"
    data-wow-delay="0.5s"
    v-for="(mateData, index) in mateDatas"
    :key="index"
  >
    <el-card :body-style="{ padding: '0px' }">
      <div
        class="content-wrapper"
        ref="matewrapper"
        :style="{ height: expandedIndex === index ? '100%' : '2.206rem' }"
      >
        <div class="title">{{ mateData.title }}</div>
        <div class="logo-wrapper">
          <div class="logo-container">
            <div
              class="logo"
              v-for="(logo, index) in mateData.logoData"
              :key="index"
            >
              <div
                class="img"
                :style="`background:url(${logo.logoUrl}) no-repeat center ;backgroundSize :cover;`"
                alt=""
              ></div>
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
import { defineProps, ref, onMounted, computed } from 'vue'
import WOW from 'wow.js'

defineProps({
  mateDatas: {
    type: Object,
    default: () => {},
  },
})

const animateClass = (index) => ({
  fadeInLeft: index % 2 === 0,
  fadeInRight: index % 2 !== 0,
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
  height: 2.206rem;
  overflow: hidden;
  .title {
    width: 2.3875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.fold {
  text-align: center;
  font-size: 0.175rem;
  margin: 0.175rem 0;
  color: #1e8ce6;
  cursor: pointer;
}

.logo-container {
  width: 11.4rem;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.206rem;
    width: calc(100% / 5);
    .img {
      height: 100%;
      width: 100%;
    }
  }
}

.mate-container {
  .el-card {
    font-size: 0.3rem;
    margin: 0 auto 0.35rem;
    width: 13.7875rem;
  }
}
</style>

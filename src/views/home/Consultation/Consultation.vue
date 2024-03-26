<template>
  <div class="main">
    <span class="divider wow fadeInUp">新闻资讯</span>
    <el-carousel
      :interval="100000"
      height="8.1937rem"
      type="card"
      class="wow slideInLeft"
      data-wow-duration="1s"
      data-wow-delay="1s"
    >
      <el-carousel-item v-for="(item, index) in newsList" :key="index">
        <el-card body-style="padding:0;     ">
          <div
            class="newsImg"
            :style="`background:url(${item.imageUrl}) no-repeat center/cover ;`"
          ></div>
          <div class="title">{{ item.title }}</div>
          <div class="content">
            <span>{{ item.content }}</span>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WOW from 'wow.js'
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
const newsList = ref([
  {
    imageUrl:
      'https://img2023.gcsis.cn/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg',
    title: '大家都关心的嘉宾PPT下载指南来啦!',
    content:
      '指路贴来啦!大家都关心的嘉宾PPT下载指南在这里!一图解锁西湖论剑官网&小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨!',
  },
  {
    imageUrl:
      'https://img2023.gcsis.cn/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg',
    title: '大家都关心的嘉宾PPT下载指南来啦!',
    content:
      '指路贴来啦!大家都关心的嘉宾PPT下载指南在这里!一图解锁西湖论剑官网&小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨!',
  },
  {
    imageUrl:
      'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/15d0f956397444c3ad5d8c2c14b2f800.jpg',
    title: '2023西湖论剑·数字安全大会举办',
    content:
      '央广网杭州5月8日消息(记者 姜頔)自山下而仰山巅谓之高远，自山前而窥山后谓之深远，自近山而望远山谓之平远。5月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会在杭州成功举办。',
  },
  {
    imageUrl: '',
    title: '',
    content: '',
  },
])
</script>

<style scoped lang="scss">
.main {
  flex-direction: column;

  .newsImg {
    height: 5.0125rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .title {
    padding: 0 0.1875rem;
    height: 1.1438rem;
    line-height: 1.1438rem;
    text-align: start;
    font-size: 0.4125rem;
    font-weight: bold;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0.1875rem;
      bottom: -0.0375rem;
      width: 0.9375rem;
      height: 0.0563rem;
      background-color: #1185e4;
    }
  }
  .content {
    font-size: 0.25rem;
    padding: 0.3655rem 0.1875rem;
    line-height: 0.4688rem;
    height: 2.2687rem;
    text-align: start;
  }
  .divider {
    display: flex;
    width: 4rem;
    align-items: center;
    color: #1185e4;
    font-size: 0.4286rem;
    margin: 0.5714rem auto;
    font-weight: 700;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 0.0429rem solid #1185e4;
      margin: 0 0.1429rem;
    }
  }

  .el-carousel {
    width: 22.8938rem;
    margin: 0 auto;
  }

  .el-card {
    height: 8.1937rem;
    border-radius: 0.3125rem;
  }
  .el-carousel__item {
    margin: 0 auto;
    height: 8.1937rem;
    background: transparent;
  }
}
</style>

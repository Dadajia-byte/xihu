<template>
  <div class="main">
    <div class="bg"></div>
    <span class="divider wow fadeInUp">
      <div class="content1">
        <span style="font-size: 0.8125rem" class="head">N</span>
        <div class="content2">ews 新闻资讯</div>
      </div>
    </span>
    <el-carousel
      :interval="100000"
      height="6.7956rem"
      type="card"
      class="wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="1s"
      indicator-position="none"
    >
      <el-carousel-item v-for="(item, index) in newsList" :key="index">
        <el-card body-style="padding:0;     ">
          <div
            class="newsImg"
            :style="`background:url(${getImg(item.imageUrl)}) no-repeat center/cover ;`"
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
import { getImg } from '@/utils/img'

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
    imageUrl: 'home_news/2.jpg',
    title: '2023西湖论剑·数字安全大会在杭举行',
    content:
      '人民网杭州5月7日电 (张帆)今天，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会(原西湖论剑·网络安全大会)在杭州举行。大会围绕“数字安全赋能数字中国”开展百余场专题报告..',
  },
  {
    imageUrl: 'home_news/1.png',
    title: '大家都关心的嘉宾PPT下载指南来啦!',
    content:
      '指路贴来啦!大家都关心的嘉宾PPT下载指南在这里!一图解锁西湖论剑官网&小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨!',
  },
  {
    imageUrl: 'home_news/4.jpg',
    title: '2023西湖论剑·数字安全大会举办',
    content:
      '央广网杭州5月8日消息(记者 姜頔)自山下而仰山巅谓之高远，自山前而窥山后谓之深远，自近山而望远山谓之平远。5月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会在杭州成功举办。',
  },
  {
    imageUrl: 'home_news/3.png',
    title: '西湖论剑暨安恒信息年度新品发布会在杭州举行',
    content:
      '人民网杭州4月19日电 （叶宾得）今天，西湖论剑暨安恒信息首次年度新品发布会在杭州举行，发布会以“新·见未来 实·现梦想”为主题，介绍安恒“MSS+数据安全”两大战略新进展、发布新产品...',
  },
])
</script>

<style scoped lang="scss">
.main {
  flex-direction: column;
  position: relative;

  .bg {
    position: absolute;
    width: 12.5rem;
    height: 25rem;
    top: -1.25rem;
    right: 0;
    background: url('bg_images/homebg1.png') no-repeat center/cover;
  }
  .newsImg {
    height: 4.1604rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .title {
    padding: 0 0.1556rem;
    height: 0.9494rem;
    line-height: 0.9494rem;
    text-align: start;
    font-size: 0.3424rem;
    font-weight: bold;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0.1556rem;
      bottom: -0.0311rem;
      width: 0.7781rem;
      height: 0.0467rem;
      background-color: #1185e4;
    }
  }

  .content {
    font-size: 0.2075rem;
    padding: 0.3034rem 0.1556rem;
    line-height: 0.3891rem;
    height: 1.883rem;
    text-align: start;
  }

  .divider {
    overflow: hidden;
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 0.5786rem;
    margin: 0.5714rem auto;
    font-weight: 700;
    font-family: sybold;
    position: relative;
    .content1 {
      position: absolute;
      display: flex;
      align-items: end;
      height: 0.8125rem;
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
      .content2 {
        @include linear-txt;
        line-height: 0.875rem;
      }
    }

    .head {
      position: relative;
      color: #457fca;
      padding-bottom: 0.1125rem;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.125rem;
        height: 0.125rem;
        width: 0.75rem;
        border-radius: 0.25rem;
        background: linear-gradient(
          to bottom right,
          $theme-color-blue,
          $theme-color-green
        );
      }
    }
  }

  .el-carousel {
    width: 19.0019rem;
    margin: 0 auto;
  }

  .el-card {
    height: 6.8008rem;
    border-radius: 0.0719rem;
  }

  .el-carousel__item {
    margin: 0 auto;
    height: 6.8008rem;
    background: transparent;
  }

  // 轮播图acive相关样式
  .is-active:hover .title::after {
    width: 1.875rem; // 假定悬停时宽度为 100%
    transition: width 0.5s ease-in-out; // 平滑的宽度变化过渡效果
  }
}
</style>

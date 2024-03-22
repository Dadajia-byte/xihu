<template>
  <div class="container">
    <div class="tag">
      精彩活动
      <div class="right">更多+</div>
    </div>
    <div class="activity">
      <swiper
        :modules="modules"
        pagination
        :slides-per-view="2"
        space-between="10vw"
      >
        <swiper-slide v-for="item in cardItem" :key="item.name">
          <div class="top"></div>
          <div class="bottom">{{ item.name }}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/scss/pagination'
const modules = [Autoplay, Pagination]

const cardItem = [
  {
    name: '格致论道',
    // img: '',
  },
  {
    name: '西湖论剑安全特训营',
  },
  {
    name: '新品发布',
  },
  {
    name: '第二直播间',
  },
  {
    name: '掌上论剑',
  },
  {
    name: '西湖论剑十周年回顾',
  },
]
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  width: 100vw;
  height: 28vh;
  padding-top: 3vh;
  .tag {
    margin-left: 5vw;
    position: relative;
    font-size: 5vw;
    padding-left: 2vw;
    line-height: 6vw;
    color: #353535;
    display: flex;
    justify-content: space-between;
    &::before {
      content: '';
      height: 100%;
      width: 0.6vw;
      position: absolute;
      left: 0;
      background: linear-gradient(to top, #2a76c3, #3ec9d2);
    }
    .right {
      margin-right: 5vw;
      color: #23aaf2;
      font-size: 2.8vw;
    }
  }
  .activity {
    margin-top: 2vh;
    .swiper {
      width: 90%;
      height: 19vh;
      .swiper-slide {
        height: 80%;
        background-color: black;
        .top {
          width: 100%;
          height: 75%;
        }
        .bottom {
          width: 100%;
          height: 25%;
          background-color: #edf5f8;
          font-size: 2.7vw;
          display: flex;
          align-items: center;
          text-indent: 2em;
        }
      }
    }
  }
}
</style>

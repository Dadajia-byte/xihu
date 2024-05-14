<template>
  <div class="container">
    <section class="sec1">
      <el-carousel trigger="click" indicator-position="none">
        <el-carousel-item
          :style="`background: url(${getImg('bg_images/home1.png')}) no-repeat
              center/contain;`"
        ></el-carousel-item>
      </el-carousel>
    </section>
    <section class="sec2">
      <div class="tag">直播回放</div>
      <div class="stream">
        <swiper
          :modules="modules"
          :slides-per-view="1.3"
          space-between="10vw"
          navigation
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="item in cardList" :key="item.title">
            <div
              class="cardItem"
              :style="`background:url(${getImg(item.imgUrl)}) no-repeat center/cover`"
            >
              <div class="top">
                <div class="title">{{ item.title }}</div>
                <div class="watch">
                  <el-icon style="padding-right: 0.1vw; font-size: 3.8vw">
                    <VideoPlay />
                  </el-icon>
                  观看回放
                </div>
              </div>
              <div class="bottom">
                <div class="pos">
                  <el-icon><LocationInformation /></el-icon>
                  {{ item.pos }}
                </div>
                <div class="time">{{ item.time }}</div>
                <div class="sub">订阅+</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getImg } from '@/utils/img'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/scss/pagination'

const cardList = ref([
  {
    title: '格致论道@西湖论剑',
    pos: '杭州市xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    time: '18:00-21:00',
    imgUrl: 'home_activity/1.png',
  },
  {
    title: '95后极客青年Talk',
    pos: '线上直播',
    time: '10:00-10:30',
    imgUrl: 'mobile/history2.png',
  },
  {
    title: '当科幻照进现实我们会更安全吗？',
    pos: '线上直播',
    time: '13:00-13:30',
    imgUrl: 'mobile/history3.png',
  },
])
const modules = [Autoplay, Pagination]
</script>

<style scoped lang="scss">
.container {
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  .sec1 {
    height: 58%;
    .el-carousel {
      height: 100%;
    }
  }
  .sec2 {
    margin-top: 1vh;
    height: 35%;
    .tag {
      margin-left: 5vw;
      position: relative;
      font-size: 5vw;
      padding-left: 2vw;
      line-height: 6vw;
      color: #353535;
      &::before {
        content: '';
        height: 100%;
        width: 0.6vw;
        position: absolute;
        left: 0;
        background: linear-gradient(to top, #2a76c3, #3ec9d2);
      }
    }
    .stream {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      margin-top: 2vh;

      color: white;
      .swiper {
        height: 100%;
        .swiper-slide {
          background-color: red; // 添加背景图片后这里删除
          height: 80%;
          .cardItem {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top {
              display: flex;
              justify-content: space-around;
              font-size: 3vw;
              margin-top: 1vh;
              .title {
                width: 50%;
              }
              .watch {
                color: white;
                font-size: 2.7vw;
                width: 25%;
                justify-content: center;
                height: 4.2vw;
                display: flex;
                align-items: center;
                border-radius: 2.1vw;
                background-color: #34d6db;
              }
            }
            .bottom {
              font-size: 2.7vw;
              display: flex;
              justify-content: space-around;
              margin-bottom: 1vh;
              align-items: center;
              .pos {
                display: flex;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 30%;
              }
              .sub {
                width: 15%;
                height: 4.2vw;
                border-radius: 2.1vw;
                border: 0.5vw solid white;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>

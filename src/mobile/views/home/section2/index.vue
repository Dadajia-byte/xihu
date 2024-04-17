<template>
  <div class="container">
    <div class="tag">大会亮点</div>
    <div class="num">
      <div class="num_item">
        <div class="num_item_num">500+</div>
        <div class="num_item_text">主题演讲</div>
      </div>
      <div class="num_item">
        <div class="num_item_num">550+</div>
        <div class="num_item_text">合作伙伴</div>
      </div>
      <div class="num_item">
        <div class="num_item_num">10000+</div>
        <div class="num_item_text">与会嘉宾</div>
      </div>
      <div class="num_item">
        <div class="num_item_num">10万+</div>
        <div class="num_item_text">行业从业者</div>
      </div>
      <div class="num_item">
        <div class="num_item_num">2500万+</div>
        <div class="num_item_text">直播观看</div>
      </div>
    </div>
    <div class="car">
      <swiper
        :modules="modules"
        pagination
        :slides-per-view="1"
        space-between="10vw"
      >
        <swiper-slide v-for="item in box" :key="item.content">
          <div
            class="box"
            :style="`background:url(${getImg(item.img)}) no-repeat center/cover`"
          >
            <div class="box_content">{{ item.content }}</div>
            <div class="box_more">查看详情</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { getImg } from '@/utils/img'
import 'swiper/scss/pagination'
const box = [
  {
    content: '议题更前沿',
    img: 'meetingabout/1.jpg',
  },
  {
    content: '线上更精彩',
    img: 'meetingabout/2.jpg',
  },
  {
    content: '成功更显著',
    img: 'meetingabout/3.jpg',
  },
  {
    content: '国际化更深入',
    img: 'meetingabout/4.jpg',
  },
]
const modules = [Autoplay, Pagination]
</script>

<style scoped lang="scss">
.container {
  height: 34vh;
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
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
  .num {
    display: flex;
    margin-top: 2vh;
    justify-content: space-around;
    .num_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .num_item_num {
        font-size: 4vw;
        background: linear-gradient(to top, #2a76c3, #3ec9d2);
        /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
        -webkit-background-clip: text;
        /*将设置的背景颜色限制在文字中*/
        -webkit-text-fill-color: transparent;
        /*给文字设置成透明*/
        font-weight: 400;
      }
      .num_item_text {
        margin-top: 1vw;
        font-size: 2.5vw;
        font-weight: 200;
      }
    }
  }
  .car {
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    .swiper {
      width: 93vw;
      height: 40vw;
      .swiper-slide {
        width: 85%;
        height: 85%;
        margin: 0 auto;
        background: linear-gradient(to right, #2a76c3, #3ec9d2); //加上图片去掉
        .box {
          width: 70%;

          height: 100%;
          clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
          // background-color: ; // 加上图片去掉
          color: white;
          .box_content {
            font-size: 3.4vw;
            position: relative;
            top: 25%;
            left: 10%;
          }
          .box_more {
            width: 16vw;
            height: 5vw;
            border-radius: 5vw;
            display: flex;
            justify-content: center;
            align-items: center;
            border: white solid 0.1vw;
            font-size: 2.5vw;
            font-weight: 300;
            position: relative;
            top: 38%;
            left: 13%;
          }
        }
      }
    }
  }
}
</style>

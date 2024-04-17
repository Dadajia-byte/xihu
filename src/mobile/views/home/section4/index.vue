<template>
  <div class="container">
    <div class="tag">
      <div class="left">
        重磅嘉宾
        <div class="gray_sm">嘉宾排名不分先后</div>
      </div>
      <div class="right">更多+</div>
    </div>
    <div class="master">
      <swiper :modules="modules" :slides-per-view="3.5" space-between="10vw">
        <swiper-slide v-for="item in masterItem" :key="item.name">
          <div class="top">
            <div
              class="image"
              :style="`background:url(${getImg(item.img)}) no-repeat center/cover`"
            ></div>
            <div class="bofang" v-show="item.isStream"></div>
          </div>
          <div class="bottom">
            <div class="name">{{ item.name }}</div>
            <div class="des">{{ item.description }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Scrollbar } from 'swiper/modules'
import 'swiper/scss/pagination'
import { getImg } from '@/utils/img'

const modules = [Autoplay, Scrollbar]
const masterItem = [
  // {
  //   name: '张宇',
  //   description: '中国发展研究基金会副理事长、国务院发展研究中心副主任',
  //   isStream: true,
  //   img: 'home_guest_images/guest8.png',
  // },
  {
    name: '沈昌祥',
    description: '中国工程院院士',
    isStream: true,
    img: 'home_guest_images/guest8.png',
  },
  {
    name: '邬贺铨',
    description: '中国工程院院士',
    isStream: true,
    img: 'home_guest_images/guest9.png',
  },
  {
    name: '方滨兴',
    description: '中国工程院院士',
    isStream: true,
    img: 'home_guest_images/guest3.png',
  },
  {
    name: '郝志强',
    description: '工业和信息化部教育与考试中心主任、书记',
    isStream: true,
    img: 'home_guest_images/guest5.png',
  },
  {
    name: '何皓仁',
    description: '中国信通院安全研究所车联网安全中心主任',
    isStream: true,
    img: 'home_guest_images/guest2.png',
  },
  {
    name: '左晓栋',
    description: '中国科学技术大学网络空间安全学院教授',
    isSream: true,
    img: 'home_guest_images/guest7.png',
  },
  {
    name: '谭晓生',
    description: '北京赛博英杰科技有限公司董事长',
    isStream: true,
    img: 'home_guest_images/guest6.png',
  },
  {
    name: '范渊',
    description: '安恒信息董事长',
    isStream: true,
    img: 'home_guest_images/guest1.png',
  },
]
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 32vh;
  padding-top: 3vh;
  .tag {
    display: flex;
    justify-content: space-between;
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
    .left {
      display: flex;
      flex-direction: row;
      .gray_sm {
        display: flex;
        line-height: 3.5vw;
        align-items: end;
        margin-left: 2vw;
        color: #c5c9cc;
        font-size: 2.2vw;
      }
    }
    .right {
      margin-right: 5vw;
      color: #23aaf2;
      font-size: 2.8vw;
    }
  }
  .master {
    height: 20vh;
    width: 95%;
    margin: 0 auto;
    margin-top: 3vh;
    .swiper {
      .swiper-slide {
        .top {
          display: flex;
          justify-content: center;
          .image {
            width: 22vw;
            height: 22vw;
            border-radius: 11vw;
            background-color: #2a76c3; // 加上背景图片后删除
          }
          .bofang {
            position: absolute;
            width: 6vw;
            height: 6vw;
            top: 50%;
            border-radius: 3vw;
            background-color: #27d6de;
            left: 65%;
            &::before {
              content: '';
              position: absolute;
              width: 2.5vw;
              height: 3vw;
              clip-path: polygon(0 0, 100% 50%, 0 100%);
              background-color: white;
              left: 50%;
              top: 52%;
              transform: translateX(-40%) translateY(-50%);
            }
          }
        }
        .bottom {
          margin-top: 1vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          .name {
            font-size: 3.2vw;
            font-weight: 700;
          }
          .des {
            width: 85%;
            margin-top: 1vw;
            font-size: 2.5vw;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            /* 其他浏览器的多行文本截断设置 */
            /* 使用最大高度和行高来控制 */
            max-height: 5vw; /* 假设一行高度为 2.5vw，所以两行的高度为 5vw */
          }
        }
      }
    }
  }
}
</style>

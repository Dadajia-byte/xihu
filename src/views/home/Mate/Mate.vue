<template>
  <div class="mate">
    <span class="divider wow fadeInUp">
      <div class="content">
        <span style="font-size: 0.8125rem" class="head">C</span>
        <div class="content2">ooperative Mate 合作伙伴</div>
      </div>
    </span>
    <div class="mate-container">
      <div class="type">
        <div
          class="type-item"
          v-for="(item, index) in mateDatas"
          :key="index"
          @click="setActive(index)"
          :class="activeIndex === index ? 'active' : ''"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="logo-container">
        <transition name="fade" mode="out-in">
          <div class="swiper-container" :key="activeIndex">
            <swiper
              :modules="modules"
              :slides-per-view="5"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
              effect="fade"
              :fadeEffect="{ crossFade: true }"
            >
              <swiper-slide
                v-for="(logo, index) in mateDatas[activeIndex].logoData"
                :key="index"
                style=""
              >
                <div class="img">
                  <img :src="`${getImg(logo.logoUrl)}`" alt="" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getImg } from '@/utils/img'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import WOW from 'wow.js'
import 'swiper/scss/pagination'

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
const modules = [Autoplay, Pagination]
const activeIndex = ref(0)
const setActive = (index: number) => {
  activeIndex.value = index
}
const mateDatas = ref([
  {
    title: '战略合作媒体',
    logoData: [
      {
        logoUrl: 'mate_images/xinhua.png',
        companyUrl: '',
      },
    ],
  },
  {
    title: '新闻媒体',
    logoData: [
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/5dd30797a95541528532b0abf7d3cdba.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/5c64dfd9685d4ea0b48a4df497a28669.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/e0ac725f69aa45229e72e8c451393147.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/1ef7fe346f28471a89176ab96cc0f15d.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/03bf8c57aff1466ebf866454df40a42d.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/0347a02665f84bb58b637fc403b5a047.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/77fc901c76c947db8c9e352f2e0bc374.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/11ab86f796b3494098c73e2515bc64e1.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/f03f89c469da43d3a8290d26582f1fdc.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/6e9a1e0aa2254b918c24816d67e3adc1.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/b9706366768d40afb9c5d3352dbbb3cd.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/c9337b3e90e044dba26621055079f877.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/19cf02f5c00e446ba609d7ef66628b10.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/0744a131e3314cbc812996c8b1b4f5c4.png',
        companyUrl: '',
      },
    ],
  },
  {
    title: '生态合作媒体',
    logoData: [
      {
        logoUrl: 'mate_images/ecology/anbotong.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/anheng.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/baode.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/cosic.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/huizhi.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/leyan.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/lianruan.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/lihua.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/qiyang.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/seagate.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/shangyuan.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/suma.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/wahaha.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/wangsu.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/wuzhou.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/xiaodao.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/xinhan.png',
        companyUrl: '',
      },
      {
        logoUrl: 'mate_images/ecology/zhonger.png',
        companyUrl: '',
      },
    ],
  },
])
</script>

<style scoped lang="scss">
.mate {
  position: relative;
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
  .content {
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
//transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.mate-container {
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0.0125rem 0.0125rem 0.125rem 0.0125rem rgba(0, 0, 0, 0.05);
  display: flex;
  .type {
    color: #fff;
    background: url('/src/assets/images/bg_images/homemateBG.png') no-repeat
      center/cover;
    font-size: 0.3125rem;
    width: 3.5812rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .active {
      font-size: 0.375rem;
    }
    .type-item {
      cursor: pointer;
      transition: font-size 0.3s ease-in-out;
    }
  }

  .logo-container {
    padding: 0.25rem 0;
    width: 17.1rem;
    .img {
      height: 3.25rem;
      // box-shadow: .0125rem .0125rem .125rem .0125rem rgba(0, 0, 0, 0.05);

      width: 3.42rem;
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
</style>

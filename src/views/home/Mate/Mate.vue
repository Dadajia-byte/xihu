<template>
  <div>
    <span class="divider">
      <div class="content"><span style="font-size:  .8125rem;" class="head">C</span>ooperative Partner 合作伙伴</div>
    </span>
    <div class="mate-container">

      <div class="type">
        <div class="type-item" v-for="(item, index) in mateDatas" :key="index" @click="setActive(index)" :class="activeIndex === index ? 'active':''">{{ item.title }}</div>
      </div>
      <div class="logo-container">
        <transition name="fade" mode="out-in">
        <div class="swiper-container" :key="activeIndex">
          <swiper :modules="modules"  :slides-per-view="5" :autoplay="{ delay: 2000, disableOnInteraction: false }" effect="fade" :fadeEffect="{ crossFade: true }">
          <swiper-slide v-for="(logo,index) in mateDatas[activeIndex].logoData" :key="index" style="">
            <div class="img">
                <img :src="`${logo.logoUrl}`" alt="">
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
import { ref,onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination} from 'swiper/modules'
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
        logoUrl:
          '/src/assets/images/mate_images/xinhua.png',
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
        logoUrl:
          '/src/assets/images/mate_images/ecology/anbotong.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/anheng.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/baode.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/cosic.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/huizhi.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/leyan.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/lianruan.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/lihua.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/qiyang.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/seagate.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/shangyuan.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/suma.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/wahaha.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/wangsu.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/wuzhou.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/xiaodao.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/xinhan.png',
        companyUrl: '',
      },
      {
        logoUrl:
          '/src/assets/images/mate_images/ecology/zhonger.png',
        companyUrl: '',
      },
    ],
  },
])
</script>

<style scoped lang="scss">
.divider {
  height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: end;
  color: #1185e4;
  font-size: .5786rem;
  margin: .5714rem auto;
  font-weight: 700;
  font-family: sybold;
  position: relative;

  .content {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
  }

  .head {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.125rem;
      height: .125rem;
      width: .75rem;
      border-radius: .25rem;
      background: linear-gradient(to bottom right, $theme-color-blue, $theme-color-green);
    }
  }

}
//transition
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.mate-container {
  height: 3.75rem;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: .25rem;

  .type {
    font-size: .25rem;
    width: 3.5812rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .active{
      font-size: .3125rem;
    }
    .type-item{
      cursor: pointer;
      transition: font-size .3s ease-in-out;

    }
  }

  .logo-container {
    width: 17.1rem;


    .img {
      height: 3.25rem;

    width: 3.42rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      max-height: 80%;
      max-width: 80%;
    } 
  }
}
}
</style>

<template>
  <div>
    <span class="divider wow fadeInUp">
      <div class="content">
        <span style="font-size: 0.8125rem" class="head">H</span>
        <div class="content2">igh Lights 大会亮点</div>
      </div>
    </span>

    <div
      class="highlight-contanier wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.1s"
    >
      <el-row justify="space-around" style="margin-top: 0.1429rem">
        <el-col :span="4">
          <ul>
            <li class="li1">
              <div class="number">{{ num1 }}</div>
              +
            </li>
            <li class="li2">参会嘉宾</li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul>
            <li class="li1">
              <div class="number">{{ num2 }}</div>
              万+
            </li>
            <li class="li2">直播观看</li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul>
            <li class="li1">
              <div class="number">{{ num3 }}</div>
              +
            </li>
            <li class="li2">主题演讲</li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul>
            <li class="li1">
              <div class="number">{{ num4 }}</div>
              +
            </li>
            <li class="li2">合作伙伴</li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul>
            <li class="li1">
              <div class="number">10</div>
              万+
            </li>
            <li class="li2">行业从业者</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div
      class="characteristic-container wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.1s"
    >
      <div class="character-wrapper">
        <ul>
          <li v-for="(item, index) in characterList" :key="index">
            <div
              class="bg"
              :style="{
                backgroundImage: 'url(' + item.imgUrl + ')',
                opacity: item.opacity,
              }"
            ></div>
          </li>
        </ul>
        <div
          class="character"
          v-for="(item, index) in characterList"
          :key="index"
          @click="setCharacterActive(index)"
          :class="activeIndex === index ? 'active' : ''"
        >
          <div class="icon">
            <svgIcon
              :name="item.icon"
              color="#ffffff"
              style="width: 0.9375rem; height: 0.9375rem"
            ></svgIcon>
          </div>
          <div class="desc">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
        <div class="bg1"></div>
        <div class="bg2"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WOW from 'wow.js'

let num1 = ref(1)
let finalNum1 = ref(10000)
let num2 = ref(1)
let finalNum2 = ref(2500)
let num3 = ref(1)
let finalNum3 = ref(500)
let num4 = ref(1)
let finalNum4 = ref(550)

import incraeseNum from '@/utils/incraeseNum'
const characterList = ref([
  {
    title: '议题更前沿',
    content:
      '大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。',
    imgUrl:
      'https://img2022.gcsis.cn/storage/media/1158/LUQLhqVmmnJh7pkTMIAaReQkH25feJMvVIzVIBmn.jpg',
    icon: 'qianyan',
    opacity: '1',
  },
  {
    title: '线上更精彩',
    content: '“掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。',
    imgUrl:
      'https://mediabluk.cnr.cn/img/cnr/CNRCDP/2023/0508/a1e09fbb7dcd1683529975154718503010.jpg?auth=5adc574309cd32abc650218d89ce95e0',
    icon: 'online1',
    opacity: '0',
  },
  {
    title: '成果更显著',
    content:
      '将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。',
    imgUrl:
      'https://www.dbappsecurity.com.cn/uploadfile/2019/12/09/20191209101959jBSDNb.jpg',
    icon: 'result',
    opacity: '0',
  },
  {
    title: '国际化更深入',
    content:
      '峰会将通过引入国际组织、设置国际话题等，从全球角度研判数字化进程和趋势。',
    imgUrl:
      'https://th.bing.com/th/id/R.f8a3a8c6c0861f4b80f1bc45c1092cbc?rik=K41O%2fyDLB6aysg&riu=http%3a%2f%2fxj.news.cn%2f2023-05%2f09%2f1129600010_16835994524141n.jpg&ehk=vqYd7i4BLYx9Sj6yQM4R1oEAWhQfDxHt4HbMC%2f2Rg08%3d&risl=&pid=ImgRaw&r=0',
    icon: 'global1',
    opacity: '0',
  },
])
const activeIndex = ref(0)
const setCharacterActive = (index: number) => {
  activeIndex.value = index
  characterList.value.forEach((item: any) => {
    item.opacity = '0'
  })
  characterList.value[index].opacity = '1'
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
  incraeseNum((num) => (num1.value = num), finalNum1.value, 5000)
  incraeseNum((num) => (num2.value = num), finalNum2.value, 2500)
  incraeseNum((num) => (num3.value = num), finalNum3.value, 2000)
  incraeseNum((num) => (num4.value = num), finalNum4.value, 2000)
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';

.highlight-contanier {
  margin-bottom: 0.85rem;

  .el-col {
    text-align: center;

    .li1 {
      font-size: 0.3571rem;
      font-weight: 400;
      @include linear-txt;
    }

    .number {
      display: inline-block;
      font-size: 0.875rem;
    }
  }

  .li2 {
    font-size: 0.2286rem;
    line-height: 0.4286rem;
    color: black;
  }
}

.characteristic-container {
  width: 100%;
  height: 8.4375rem;
  margin-bottom: 0.375rem;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 0px 0.125rem 0px rgba(0, 0, 0, 0.1);

  .bg1 {
    position: absolute;

    height: 1.625rem;
    width: 1.625rem;
    z-index: 5;
    top: 0.25rem;
    right: -2.375rem;
    background: url('/src/assets/images/bg_images/highlight_bg1.png') no-repeat
      center/contain;
    animation: rotate 10s linear infinite;
    -webkit-animation: rotate 10s linear infinite;

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  .bg2 {
    position: absolute;
    height: 3.75rem;
    width: 3.75rem;
    z-index: 5;
    top: 2.5rem;
    right: -5rem;
    transform: rotate(90deg);
    background: url('/src/assets/images/bg_images/highlight_bg2.png') no-repeat
      center/contain;
    animation: rotate 10s linear infinite;
    -webkit-animation: rotate 10s linear infinite;

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  .character-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    right: 3.5rem;
    width: 7.475rem;
    right: 3.5rem;
    width: 7.475rem;
    height: 7.8125rem;
    z-index: 1;

    .bg {
      position: absolute;
      left: -13.625rem;
      left: -13.625rem;
      top: 0;
      width: 14.811rem;
      height: 8.4375rem;
      z-index: 2;
      background-size: cover;
      background-position: center;
      transition: opacity 0.3s ease-in-out;
    }

    .character {
      cursor: pointer;
      position: relative;
      background-color: #f1f2f3;
      width: 7.475rem;

      height: 1.6906rem;
      padding: 0.125rem 0.25rem 0.125rem 0.0625rem;
      display: flex;
      transition: all 0.3s ease-in-out;

      .icon {
        display: flex;
        padding-top: 0.0625rem;
        justify-content: center;
        align-items: center;
        flex: 2;
        text-align: center;
        width: 1.25rem;
        height: 1.25rem;
        line-height: 1.25rem;
      }

      .desc {
        flex: 8;

        .title {
          font-weight: 600;
          font-size: 0.375rem;
          line-height: 0.675rem;
          margin-bottom: 0.0625rem;
        }

        .content {
          font-size: 0.175rem;
          line-height: 0.25rem;
        }
      }
    }
  }

  .active {
    background-image: linear-gradient(to right, #457fca, #48c6ef);
    color: #ffffff;
    z-index: 3;
  }
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
</style>

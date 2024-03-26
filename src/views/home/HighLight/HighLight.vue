<template>
  <div>
    <div class="divider wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
      <span style="font-family: Source Han Sans CN">大会亮点</span>
      <span class="divider-tip" style="font-family: Source Han Sans CN">
        Conference Highlights
      </span>
    </div>

    <div class="highlight-contanier wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
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
    <div class="characteristic-container">
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
        <div class="character" v-for="(item, index) in characterList" :key="index" @click="setCharacterActive(index)" :class="activeIndex === index ? 'active':''"> 
          <div class="icon">
            <svgIcon :name="item.icon" color="#ffffff" style="width: .875rem;height:.875rem">
 </svgIcon></div>
          <div class="desc">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
          </div>

        </div>

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
    content: '大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。',
    imgUrl: 'https://img2022.gcsis.cn/storage/media/1158/LUQLhqVmmnJh7pkTMIAaReQkH25feJMvVIzVIBmn.jpg',
    icon:'agenda',
    opacity:'1',
  },
  {
    title: '线上更精彩',
    content: '“掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。',
    imgUrl: 'https://mediabluk.cnr.cn/img/cnr/CNRCDP/2023/0508/a1e09fbb7dcd1683529975154718503010.jpg?auth=5adc574309cd32abc650218d89ce95e0',
    icon:'online',
    opacity:'0',

  },
  {
    title: '成果更显著',
    content: '将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。',
    imgUrl: 'https://www.dbappsecurity.com.cn/uploadfile/2019/12/09/20191209101959jBSDNb.jpg',
    icon:'find',
    opacity:'0',

  },
  {
    title: '国际化更深入',
    content: '峰会将通过引入国际组织、设置国际话题等，从全球角度研判数字化进程和趋势。',
    imgUrl: 'https://th.bing.com/th/id/R.f8a3a8c6c0861f4b80f1bc45c1092cbc?rik=K41O%2fyDLB6aysg&riu=http%3a%2f%2fxj.news.cn%2f2023-05%2f09%2f1129600010_16835994524141n.jpg&ehk=vqYd7i4BLYx9Sj6yQM4R1oEAWhQfDxHt4HbMC%2f2Rg08%3d&risl=&pid=ImgRaw&r=0',
    icon:'global',
    opacity:'0',

  },
])
const activeIndex = ref(0)
const setCharacterActive = (index: number) => {
  activeIndex.value = index
  characterList.value.forEach((item:any) => {
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
  margin: 0 auto;
  width: 17.925rem;
  height: 7.8125rem;
  margin-bottom: .375rem;
  position: relative;
  background-color: #ffffff;
 
  .character-wrapper {
    
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right: 0;
    width: 6.85rem;
    padding: .5rem 0; 
    z-index: 1;
    .bg{
    position: absolute;
    left: -10.95rem;
    top: 0;
    width:12.325rem;
    height: 7.8125rem;
    z-index: 2;
    background-size: cover;
    background-position: center;
    transition: opacity 0.3s ease-in-out;
  }
    .character {
      cursor: pointer;
      position: relative;
      background-color: #F1F2F3;
      border-radius: 0.1875rem;
      width: 6.85rem;
      height: 1.5156rem;
      margin-bottom: .1875rem;
      padding: .125rem .25rem;
      display: flex;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex:2;
        text-align: center;
        width: 1.25rem;
        height: 1.25rem;
        line-height: 1.25rem;
      }

      .desc{
        flex: 8;
        .title {
        font-weight: 600;
        font-size: .25rem;
        line-height: .45rem;

      }

      .content {

        font-size: .175rem;
        line-height: .3125rem;
      }

      }
      
    }
  }
  .active{
      background-image: linear-gradient(to bottom right, $theme-color-blue, $theme-color-green);
      color: #ffffff;
      z-index: 3;
    }
}


.divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #1185e4;
  font-size: 0.4286rem;
  margin: 0.5714rem auto;
  font-weight: 700;

  .divider-tip {
    margin-top: 0.125rem;
    font-size: 0.175rem;
    font-weight: 500;
  }
}
</style>
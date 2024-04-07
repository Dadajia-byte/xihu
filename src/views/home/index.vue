<template>
  <div class="home">
    <!-- 轮播图 -->
    <div style="height: 12.7357rem">
      <el-carousel :interval="5000" arrow="never" style="height: 12.7357rem">
        <el-carousel-item style="height: 12.7357rem">
          <!-- <img src="/src/assets/images/bg_images/home1.png" alt="" /> -->
          <div
            style="
              background: url('/src/assets/images/bg_images/home1.png')
                no-repeat center/cover;
              height: 100%;
              width: 100%;
            "
          ></div>
        </el-carousel-item>
      </el-carousel>
      <!-- <el-card class="box-card">
        <el-card class="container-card">
          <el-row>
            <el-col :span="3" style="height: .8571rem">
              <ul class="highlight">
                <li>大会亮点</li>
                <li>HIGHLIGHTS</li>
              </ul>
            </el-col>
            <el-col
              :span="21"
              style="position: relative; top: -0.2857rem; left: .2857rem"
            >
              <div class="highlight-bar"></div>
            </el-col>
          </el-row>
          <el-row justify="space-around" style="margin-top: .1429rem">
            <el-col :span="4">
              <ul>
                <li class="li1">{{ num1 }}+</li>
                <li class="li2">参会嘉宾</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">{{ num2 }}万+</li>
                <li class="li2">直播观看</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">{{ num3 }}+</li>
                <li class="li2">主题演讲</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">{{ num4 }}+</li>
                <li class="li2">合作伙伴</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">10万+</li>
                <li class="li2">行业从业者</li>
              </ul>
            </el-col>
          </el-row>
        </el-card>
      </el-card> -->
    </div>
    <DateAgenda></DateAgenda>
    <HighLight></HighLight>
    <Activity></Activity>
    <Consultation></Consultation>
    <Master></Master>
    <Mate></Mate>
    <Past></Past>
  </div>
</template>

<script setup lang="ts">
import DateAgenda from './DateAgenda/DateAgenda.vue'
import Consultation from './Consultation/Consultation.vue'
import Activity from './Activity/Activity.vue'
import Master from './Master/Master.vue'
import Mate from './Mate/Mate.vue'
import Past from './Past/Past.vue'
import HighLight from './HighLight/HighLight.vue'
import { ref, onMounted } from 'vue'
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
onMounted(() => {
  incraeseNum((num) => (num1.value = num), finalNum1.value, 5000)
  incraeseNum((num) => (num2.value = num), finalNum2.value, 2500)
  incraeseNum((num) => (num3.value = num), finalNum3.value, 2000)
  incraeseNum((num) => (num4.value = num), finalNum4.value, 2000)
  initWOW()
})

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}
</script>

<style lang="scss" scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.box-card {
  position: relative;
  width: 14.8143rem;
  height: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  top: -3.1429rem;
  background-color: rgba($color: #ffffff, $alpha: 0.3);
  border-radius: .1429rem;
  box-shadow: 0 .0429rem .0857rem 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-card {
  width: 14.5286rem;
  height: 2.4286rem;
  border-radius: .1857rem;
  font-size: .2rem;

  .highlight {
    text-align: left;
    border-left: .0286rem solid #1185e4;

    li {
      margin: .0714rem .1429rem;

      &:nth-child(1) {
        font-size: .2571rem;
        font-weight: 700;
        color: black;
      }

      &:nth-child(2) {
        font-size: .2429rem;
        color: #1185e4;
        font-style: italic;
        font-weight: 350;
      }
    }
  }

  .highlight-bar {
    position: relative;
    width: 100%; // 使容器宽度充满父元素
    height: .5714rem; // 容器高度
    background-color: #1185e4;

    // 使用伪元素创建三角形
    &::before {
      content: '';
      position: absolute;
      left: .0143rem;
      top: 0;
      width: 0;
      height: 0;
      border-top: .5714rem solid #1185e4; // 三角形高度和颜色
      border-left: .3571rem solid transparent; // 三角形宽度
      transform: translateX(-100%); // 将三角形完全移动到容器的左边界
    }
  }

  .el-col {
    text-align: center;

    .li1 {
      font-size: .3571rem;
      font-weight: 700;
    }

    &:nth-child(1) {
      .li1 {
        color: #1185e4; // 第一个 el-col 的 li1 颜色
      }
    }

    &:nth-child(2) {
      .li1 {
        color: #70ed05; // 第二个 el-col 的 li1 颜色
      }
    }

    &:nth-child(3) {
      .li1 {
        color: #ed5311; // 第三个 el-col 的 li1 颜色
      }
    }

    &:nth-child(4) {
      .li1 {
        color: #e713f0; // 第四个 el-col 的 li1 颜色
      }
    }

    &:nth-child(5) {
      .li1 {
        color: #6217ed; // 第五个 el-col 的 li1 颜色
      }
    }
  }

  .li2 {
    font-size: .2286rem;
    line-height: .4286rem;
    color: black;
  }
}

// 动画
// 梯形动画
@keyframes growBar {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

// 渐入渐出动画
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-0.2857rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

highlight-bar .highlight-bar {
  animation: growBar 1s ease forwards;
}

.highlight li {
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.5s;
}

.el-col {
  opacity: 0;
  animation: fadeIn 1s ease forwards;

  &:nth-child(1) {
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    animation-delay: 0.7s;
  }

  &:nth-child(3) {
    animation-delay: 0.9s;
  }

  &:nth-child(4) {
    animation-delay: 1.1s;
  }

  &:nth-child(5) {
    animation-delay: 1.3s;
  }
}
</style>

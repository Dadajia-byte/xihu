<template>
  <div
    class="master wow fadeInUp"
    data-wow-duration="1.5s"
    data-wow-delay="0.1s"
  >
    <div class="bg"></div>
    <span class="divider wow fadeInUp">
      <div class="content">
        <span style="font-size: 0.8125rem" class="head">E</span>
        <div class="content2">xpert 大咖云集</div>
      </div>
    </span>
    <div
      class="carousel-container wow bounceInUp"
      data-wow-duration="1s"
      data-wow-delay="1s"
    >
      <div class="master-container" ref="cardlist">
        <div class="card-container" v-for="(card, index) in cards" :key="index">
          <div class="card">
            <img v-lazy="getImg(card.url)" alt="" />
          </div>
          <span class="name">{{ card.name }}</span>
          <span class="description">{{ card.description }}</span>
        </div>
      </div>
      <el-icon
        class="left"
        ref="left"
        size="25px"
        color="#1185E4"
        @click="handleLeftClick"
      >
        <ArrowLeftBold />
      </el-icon>
      <el-icon
        class="right"
        ref="right"
        size="25px"
        color="#1185E4"
        @click="handleRightClick"
      >
        <ArrowRightBold />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

const cards = [
  {
    url: 'guest_images/guest1.png',
    name: '范渊',
    description: '安恒信息董事长',
  },
  {
    url: 'guest_images/guest2.png',
    name: '柯皓仁',
    description: '中国信通院安全研究所车联网安全中心主任',
  },
  {
    url: 'guest_images/guest3.png',
    name: '方滨兴',
    description: '中国工程院院士',
  },
  {
    url: 'guest_images/guest4.png',
    name: '刘世锦',
    description: '国务院发展研究中心原副主任、中国发展研究基金会副理事长',
  },
  {
    url: 'guest_images/guest5.png',
    name: '郝志强',
    description: '工业和信息化部教育与考试中心主任、书记',
  },
  {
    url: 'guest_images/guest6.png',
    name: '谭晓生',
    description: '北京赛博英杰科技有限公司董事长',
  },
  {
    url: 'guest_images/guest7.png',
    name: '左晓栋',
    description:
      '中国科学技术大学网络空间安全学院教授、科技人文高等研究院副院长',
  },
]

const left = ref()
const right = ref()

let cardlist = ref()
let offset = 0
let slideIncrement = 0
let slideDecrement = cards.length - 1

const handleRightClick = () => {
  // 这是控制右箭头按钮是否禁用的标志
  right.value.disabled = true
  // 获取单个卡片的宽度
  offset = cardlist.value.children[0].offsetWidth
  // 应用于transform属性的过渡
  cardlist.value.style.transition = 'transform ease-in-out 500ms'
  // 使用transform移动
  cardlist.value.style.transform = `translateX(${-offset}px)`
  setTimeout(() => {
    //去除transition
    cardlist.value.style.transition = 'none'
    //把头移到尾
    cardlist.value.children[slideIncrement].style.order = cards.length - 1
    //重置位置
    cardlist.value.style.transform = 'translateX(0)'
    //slide计数加一
    slideIncrement++
    //去掉的slide位置
    slideDecrement = slideIncrement - 1
    if (slideIncrement === cards.length) {
      slideIncrement = 0
      // 重置order
      Array.from(cardlist.value.children).forEach((element: any, _index) => {
        element.style.order = 'initial'
      })
    }
    right.value.disabled = false
  }, 500)
}

const handleLeftClick = () => {
  left.value.disabled = true
  offset = cardlist.value.children[0].offsetWidth

  if (slideDecrement < 0) {
    // 重置order
    Array.from(cardlist.value.children).forEach((element: any) => {
      element.style.order = 'initial'
    })
    //重置slideDecrement
    slideDecrement = cards.length - 1
  }

  //移回前一个slide
  cardlist.value.children[slideDecrement].style.order = -1
  //立即移动到前一个slide的位置，没有动画
  cardlist.value.style.transform = `translateX(${-offset}px)`

  setTimeout(() => {
    //触发动画
    cardlist.value.style.transition = 'transform ease-in-out 500ms'
    cardlist.value.style.transform = `translateX(0rem)`
  }, 1)

  setTimeout(() => {
    // 去除transition
    cardlist.value.style.transition = 'none'
    //尾部下标前移
    slideDecrement--
    console.log(slideDecrement)
    slideIncrement = slideDecrement + 1

    left.value.disabled = false
  }, 500)
}
</script>

<style scoped lang="scss">
// .master{
//   position: relative;
//   .bg{
//     position: absolute;
//     height: 12.5rem;
//     width: 12.5rem;
//     right: -3.75rem;
//     bottom: 0;
//     z-index: 0;
//     background: url(bg_images/homebg3.png) no-repeat center/contain;
//   }
// }

.carousel-container {
  height: 6.6131rem; // 637.504 * 0.83
  width: 18.8472rem; // 1816.504 * 0.83
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;

  .master-container {
    position: absolute;
    height: 6.6131rem; // 637.504 * 0.83
    width: 18.0836rem; // 1743 * 0.83
    display: flex;
    justify-content: flex-start;
    align-content: center;

    .card-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-content: center;
      text-align: center;
      padding: 0 0.4669rem; // 45 * 0.83

      .card {
        height: 4.1707rem; // 402 * 0.83
        width: 3.5946rem; // 346.496 * 0.83
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          transition: transform 0.5s ease-in-out;
        }

        &:hover img {
          transform: scale(1.1);
        }
      }

      .name {
        margin: 0.1867rem 0; // 18 * 0.83
        font-size: 0.3735rem; // 36 * 0.83
        text-align: center;
      }

      .description {
        font-size: 0.249rem; // 24 * 0.83
        line-height: 0.3125rem;
        color: #abaaaa;
      }
    }
  }
}

.el-icon {
  position: absolute;
  top: 33%;
  transform: translateY(-33%);
  height: 0.5914rem; // 57 * 0.83
  width: 0.5914rem; // 57 * 0.83
  line-height: 0.5914rem; // 57 * 0.83
  font-size: 0.5914rem; // 57 * 0.83
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}

.left {
  left: -0.0519rem; // -5 * 0.83
}

.right {
  right: -0.0519rem; // -5 * 0.83
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

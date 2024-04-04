<template>
  <div
    class="master wow fadeInUp"
    data-wow-duration="1.5s"
    data-wow-delay="0.1s"
  >
    <span class="divider">大咖云集</span>
    <div
      class="carousel-container wow bounceInUp"
      data-wow-duration="1s"
      data-wow-delay="1s"
    >
      <div class="master-container" ref="cardlist">
        <div class="card-container" v-for="(card, index) in cards" :key="index">
          <div class="card">
            <img :src="card.url" alt="" />
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
    url: 'https://img2023.gcsis.cn/2023/4/7c46ac80f91542b4a0f6ce2b593f3f19.png',
    name: '1',
    description: '中国信通院安全研究所车联网安全中心主任',
  },
  {
    url: 'https://img2023.gcsis.cn/2023/4/aa1635e18de24d88b86753e1ca39a05e.png',
    name: '2',
    description: '安恒信息副董事长',
  },
  {
    url: 'https://img2023.gcsis.cn/2023/4/1a80708d46f64e079919a2c93a6aa7c4.png',
    name: '3',
    description: '安恒信息副董事长',
  },
  {
    url: 'https://img2023.gcsis.cn/2023/4976ced942c44672b457895baa4e33e8.png',
    name: '4',
    description: '安恒信息副董事长',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
    name: '5',
    description: '安恒信息副董事长',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
    name: '6',
    description: '安恒信息副董事长',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
    name: '7',
    description: '安恒信息副董事长',
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
  display: flex;
  width: 320px;
  align-items: center;
  text-align: center;
  color: #1185e4;
  font-size: 34.288px;
  margin: 45.712px auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 3.432px solid #1185e4;
    margin: 0 11.432px;
  }
}
</style>

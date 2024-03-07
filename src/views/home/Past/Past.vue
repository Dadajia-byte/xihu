<template>
  <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
    <span class="divider">往届大会</span>
    <div class="carousel-container">
      <div class="master-container" ref="cardlist">
        <div class="card-container" v-for="(card, index) in cards" :key="index">
          <div class="card">
            <img :src="card.url" alt="" />
          </div>
        </div>
      </div>
      <el-icon
        class="left"
        ref="left"
        size="0.3125rem"
        color="#1185E4"
        @click="handleLeftClick"
      >
        <Back />
      </el-icon>
      <el-icon
        class="right"
        ref="right"
        size="0.3125rem"
        color="#1185E4"
        @click="handleRightClick"
      >
        <Right />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
    url: 'https://picsum.photos/id/1033/50/60',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
  },
  {
    url: 'https://picsum.photos/id/1033/50/60',
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
      Array.from(cardlist.value.children).forEach((element, index) => {
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
    Array.from(cardlist.value.children).forEach((element, index) => {
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
    cardlist.value.style.transform = `translateX(0px)`
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
  height: 2.9125rem;
  width: 16.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;

  .master-container {
    height: 2.9125rem;
    width: 15.675rem;
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
      padding: 0 0.2625rem;

      .card {
        height: 2.9125rem;
        width: 4.7rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}

.el-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 0.425rem;
  width: 0.425rem;
  line-height: 0.425rem;
  font-size: 0.425rem;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}

.left {
  left: -0.0625rem;
}
.right {
  right: -0.0625rem;
}

.divider {
  display: flex;
  width: 4rem;
  align-items: center;
  text-align: center;
  color: #1185e4;
  font-size: 0.4286rem;
  margin: 0.5714rem auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 0.0429rem solid #1185e4;
    margin: 0 0.1429rem;
  }
}
</style>

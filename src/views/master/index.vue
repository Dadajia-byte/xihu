<template>
  <div>
    <div class="marster">
      <div class="header">
        <div class="title">大咖云集</div>
        <div class="engtitle">SPEAKERS</div>
      </div>

      <div class="professonal">
        <div class="professonal-title">
          <div class="title">专家委员会</div>
          <div class="tips">专家排名不分先后</div>
        </div>

        <div class="professonal-list">
          <div class="carousel-container wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
            <div class="master-container" ref="cardlist">
              <div class="card-container" v-for="(card, index) in cards" :key="index">
                <div class="card">
                  <img :src="card.url" alt="" />
                </div>
                <span class="name">{{ card.name }}</span>
                <span class="description">{{ card.description }}</span>
              </div>
            </div>
            <el-icon class="left" ref="left" size="0.3125rem" color="#1185E4" @click="handleLeftClick">
              <ArrowLeftBold />
            </el-icon>
            <el-icon class="right" ref="right" size="0.3125rem" color="#1185E4" @click="handleRightClick">
              <ArrowRightBold />
            </el-icon>
          </div>
        </div>
      </div>
      <div class="guest">
        <div class="guest-title">
          <div class="title">演唱嘉宾</div>
          <div class="tips">嘉宾排名不分先后</div>
        </div>
        <div class="filter"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const left = ref()
const right = ref()
const cards = [
  {
    url: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/8dadced7bad74bd7b7e692957bc6f1d2.jpg',
    name: '1',
    description: '中国信通院安全研究所车联网安全中心主任',
  },
  {
    url: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/2f791d88ef5c42669d61dfb560ab484e.jpg',
    name: '2',
    description: '安恒信息副董事长',
  },
  {
    url: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/54400aca0eea438f822ebf3a059e43db.jpg',
    name: '3',
    description: '安恒信息副董事长',
  },
  {
    url: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/82f148791fda423aac58841930ca293c.jpg',
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
      Array.from(cardlist.value.children).forEach((element:any, index:number) => {
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
<script lang="ts">
export default {
  name: 'master',
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 4.8rem;
  padding-left: 1.325rem;
  padding-top: 1.75rem;
  background-color: green;

  .title {
    font-size: 0.525rem;
    font-weight: bold;
    line-height: 0.5rem;
    color: #fff;
  }

  .engtitle {
    font-size: 0.2rem;
    line-height: 0.7375rem;
    color: #fff;
  }
}


  .professonal-title,.guest-title{
    padding-top: 0.45rem;
    padding-left: 1.5875rem;
    color: #1185e4;
    display: flex;

    .title {
      font-size: 0.525rem;
      font-weight: bold;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -0.25rem;
        width: 0.0875rem;
        height: 0.525rem;
        background-color: #1185e4;
      }
    }

    .tips {
      margin-left: 0.25rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 0.175rem;
    }
  }


.carousel-container {
  
  height: 4.9688rem;
  width: 22.7063rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1.2625rem auto;
  overflow: hidden;
  .master-container {
    position: absolute;
    height: 4.9688rem;
    width: 21.7875rem;
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
      padding: 0 0.5625rem;

      .card {
        height: 3.2484rem;
        width: 3.2484rem;
        overflow: hidden;
        clip-path: circle();
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
        margin: 0.225rem 0;
        font-size: 0.45rem;
        text-align: center;
      }
      .description {
        font-size: 0.3rem;
        color: #abaaaa;
      }
    }
  }
}

.el-icon {
  position: absolute;
  top: 20%;
  transform: translateY(-20%);
  height: 0.7125rem;
  width: 0.7125rem;
  line-height: 0.7125rem;
  font-size: 0.7125rem;
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
</style>

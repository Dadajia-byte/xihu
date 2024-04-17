<template>
  <div>
    <div class="marster">
      <!-- 头部banner -->
      <div class="header">
        <div class="title">大咖云集</div>
        <div class="engtitle">SPEAKERS</div>
      </div>

      <!-- 专家委员会 -->
      <div class="professonal">
        <div class="professonal-title wow slideInLeft">
          <div class="title">专家委员会</div>
          <div class="tips">专家排名不分先后</div>
        </div>

        <div class="professonal-list">
          <div
            class="carousel-container wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div class="master-container" ref="cardlist">
              <div
                class="card-container"
                v-for="(card, index) in cards"
                :key="index"
              >
                <div class="card">
                  <img :src="`${getImg(card.url)}`" alt="" />
                </div>
                <span class="name">{{ card.name }}</span>
                <span class="description">{{ card.description }}</span>
              </div>
            </div>
            <el-icon
              class="left"
              ref="left"
              size="0.3125rem"
              color="#1185E4"
              @click="handleLeftClick"
            >
              <ArrowLeftBold />
            </el-icon>
            <el-icon
              class="right"
              ref="right"
              size="0.3125rem"
              color="#1185E4"
              @click="handleRightClick"
            >
              <ArrowRightBold />
            </el-icon>
          </div>
        </div>
      </div>

      <!-- 嘉宾部分 -->
      <div class="guest">
        <div class="guest-title wow slideInRight">
          <div class="title">演讲嘉宾</div>
          <div class="tips">嘉宾排名不分先后</div>
        </div>
        <div class="guest-container">
          <div class="filter">
            <div class="filter-container">
              <div
                class="filter-item wow fadeInUp"
                v-for="(item, index) in dateList"
                :key="index"
                @click="setDateActive(index)"
                :class="index === activeIndex ? 'active' : ''"
              >
                {{ item.date }}
              </div>
            </div>
            <div class="search">
              <el-input
                @input="searchGuest()"
                v-model="searchText"
                style="
                  width: 3.5rem;
                  font-size: 0.25rem;
                  line-height: 0.625rem;
                  border-radius: 0.625rem;
                "
                placeholder="请输入嘉宾姓名"
                :prefix-icon="Search"
              />
            </div>
          </div>
          <div class="guest">
            <div
              class="guest-item wow fadeInUp"
              v-for="(item, index) in masterStore.masterData"
              :key="index"
            >
              <div class="img-wrapper">
                <div
                  class="img"
                  :style="{
                    backgroundImage: 'url(' + item.avatar + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }"
                ></div>
              </div>
              <div class="name">{{ item.guestname }}</div>

              <div class="description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImg } from '@/utils/img'
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import useMasterStore from '@/store/modules/master'
import WOW from 'wow.js'
// import {throttle} from 'lodash'

// import { master } from '@/api/master/type'

const masterStore = useMasterStore()
const activeIndex = ref(0)
const searchText = ref('')
const left = ref()
const right = ref()
const cards = [
  {
    url: 'master/1.png',
    name: '左晓栋',
    description:
      '中国科学技术大学网络空间安全学院教授、科技人文高等研究院副院长',
  },
  {
    url: 'master/2.jpg',
    name: '崔光耀',
    description: '《中国信息安全》杂志原主编',
  },
  {
    url: 'master/3.jpg',
    name: '顾炳中',
    description: '中国计算机用户协会理事长',
  },
  {
    url: 'master/4.jpg',
    name: '李新友',
    description: '国家信息中心研究员',
  },
  {
    url: 'master/5.jpg',
    name: '曲胜',
    description: '中国能源研究会能源网络安全技术研究中心常务副主任',
  },
  {
    url: 'master/6.jpg',
    name: '王秉政',
    description: '全国信安标委成员',
  },
  {
    url: 'master/7.jpg',
    name: '许玉娜',
    description: '中国网络安全产业联盟副秘书长',
  },
  {
    url: 'master/8.jpg',
    name: '严明',
    description: '国计算机学会计算机安全专委会荣誉主任',
  },
  {
    url: 'master/9.jpg',
    name: '姚力',
    description: 'CNCERT 博士',
  },
  {
    url: 'master/10.jpg',
    name: '叶红',
    description: '中国信息协会信息安全专业委员会主任',
  },
]
const dateList = ref([
  { date: '全部' },
  { date: '5月5日' },
  { date: '5月6日' },
  { date: '5月7日' },
  { date: '5月8日' },
])
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
      Array.from(cardlist.value.children).forEach((element: any) => {
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

const searchGuest = async () => {
  masterStore.getMasterData.guestname = searchText.value
  await masterStore.getMasterInfo()
}

const guestInit = async () => {
  masterStore.getMasterData.isExpert = '0'
  masterStore.getMasterData.date = ''
  masterStore.getMasterData.guestname = ''
  await masterStore.getMasterInfo()
}
const setDateActive = async (index: number) => {
  activeIndex.value = index
  masterStore.getMasterData.isExpert = '0'
  masterStore.getMasterData.date =
    dateList.value[index].date === '全部' ? '' : dateList.value[index].date
  await masterStore.getMasterInfo()
  // console.log(masterStore.masterData)
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

onMounted(async () => {
  initWOW()
  await guestInit()
})
</script>
<script lang="ts">
export default {
  name: 'master',
}
</script>
<style lang="scss" scoped>
@import '../../styles/mixin.scss';

.header {
  width: 100%;
  height: 7.025rem;
  padding-left: 1.325rem;
  padding-top: 2.375rem;
  background: url('/src/assets/images/bg_images/guest.png') no-repeat
    center/cover;

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

.professonal-title,
.guest-title {
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
        font-size: 0.3125rem;
        text-align: center;
      }

      .description {
        font-size: 0.2rem;
        line-height: 0.25rem;
        color: #abaaaa;
      }
    }
  }
}

.el-icon {
  position: absolute;
  top: 33%;
  transform: translateY(-33%);
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

.guest-container {
  padding-left: 1.5875rem;
  padding-top: 0.825rem;
  width: 22.7063rem;

  .filter {
    display: flex;

    .filter-container {
      display: flex;

      height: 0.625rem;
      flex: 6;

      .filter-item {
        display: flex;
        justify-content: center;
        margin-right: 0.375rem;
        width: 2.225rem;
        border-radius: 0.625rem;
        line-height: 0.625rem;
        font-size: 0.25rem;
        border: 0.0125rem solid #e6e6e6;
        box-shadow: 0 0.03125rem 0.0625rem rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: color 0.2s ease-in-out;
      }

      .active {
        background: linear-gradient(
          to bottom right,
          $theme-color-blue,
          $theme-color-green
        );
        color: #fff;
        font-weight: bold;
      }
    }

    .search {
      flex: 4;
      height: 0.625rem;
      display: flex;
      justify-content: end;
    }
  }

  .guest {
    display: flex;
    flex-wrap: wrap;
    width: 22.7063rem;

    .guest-item {
      width: 2.75rem;
      margin-top: 0.625rem;
      margin-right: 1.0343rem;

      .img-wrapper {
        width: 2.225rem;
        height: 2.225rem;
        overflow: hidden;
        clip-path: circle();
        margin: 0 auto;
        .img {
          width: 2.225rem;
          height: 2.225rem;
          cursor: pointer;
          transition: transform 0.5s ease-in-out;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .name {
        margin-top: 0.25rem;
        margin-bottom: 0.125rem;
        display: flex;
        justify-content: center;
        font-size: 0.3125rem;
      }

      .description {
        font-size: 0.2031rem;
        display: flex;
        justify-content: center;
        color: #abaaaa;
        line-height: 0.3125rem;
      }

      &:hover {
      }
    }
  }
}

.el-input__wrapper {
  border-radius: 0.625rem;
}
</style>

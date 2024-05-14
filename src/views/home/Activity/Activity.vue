<template>
  <div class="main">
    <div class="activity">
      <span class="divider wow fadeInUp">
        <div class="content">
          <span style="font-size: 0.8125rem" class="head">E</span>
          <div class="content2">xciting Activities 精彩活动</div>
        </div>
      </span>
      <div class="whole-content">
        <div class="activity-content">
          <ul>
            <li v-for="(item, index) in activityList" :key="index">
              <div
                class="bg wow fadeInUp"
                :style="`
                  background-image: url( '${getImg(item.backgroundUrl)} ');
                  opacity: ${item.opacity};
                `"
              ></div>
            </li>
          </ul>

          <div class="activity-navigation wow fadeInUp">
            <div class="decoration">
              <span style="font-size: 0.45rem; margin-bottom: 0.125rem">
                精彩活动
              </span>
              <span>Exciting Activities</span>
            </div>
            <div class="navigation">
              <div
                class="navigation-item"
                v-for="(item, index) in activityList"
                :key="index"
                @click="handleSelect(index)"
                :class="index === activeIndex ? 'active' : ''"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <el-carousel
            :autoplay="false"
            height="6.7625rem"
            indicator-position="none"
            arrow="never"
            ref="carouselList"
          >
            <el-carousel-item
              v-for="(item, index) in activityList"
              :key="index"
              :name="item.title"
            >
              <div
                class="carousel-item wow slideInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div class="name">
                  {{ item.name }}
                </div>
                <div class="title">
                  {{ item.title }}
                </div>

                <div class="content">
                  {{ item.content }}
                </div>
                <div class="more">了解详情</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WOW from 'wow.js'
import { onMounted, ref, nextTick } from 'vue'
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

const activityList = ref([
  {
    name: '格致论道',
    title: '让“圈外人”关注网络安全，让“冷”科普做到“热”传播',
    content:
      '5月5日 18:30 “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
    backgroundUrl: 'home_activity/1.png',
    opacity: '1',
  },
  {
    name: '西湖论剑安全特训营',
    title: '数字安全人才助推器',
    content:
      '5月4-6日 西湖论剑安全特训营是国内领先的数字安全人才交流、孵化及实训平台，致力于成为数字时代的“数字安全人才助推器”。以体系化课程、实战化导向为显著特色，服务于数字化转型背景下的政府、企事业单位，为其培养数字安全的管理者、实战人才提供有力支撑，为国家数字安全人才发展持续输出强有力的“燃料”。',
    backgroundUrl: 'home_activity/2.png',
    opacity: '0',
  },
  {
    name: '新品发布',
    title: '',
    content: '',
    backgroundUrl: 'home_activity/3.png',
    opacity: '0',
  },
  {
    name: '第二直播间',
    title: '创新内容形式,立体化开展宣传',
    content:
      '一次掌上场景搭建下的即时性交流；身临其境的参与感，精彩看点的抢先看；行业专家、观点嘉宾在线解读核心观点；更有大会成果密集输出，限定款宠粉福利',
    backgroundUrl: 'home_activity/4.png',
    opacity: '0',
  },
  {
    name: '掌上论剑',
    title: '线下“精致”、线上“亮眼”',
    content:
      '以西湖论剑官网为载体，精心策划“掌上论剑”系列活动，推出“点亮网安，守护城市”、“ 守护每一份网安愿景”等互动活动，《今夜不破防》、《十日谈》、《新时代安全观对话》等亮点节目，打造一档精彩、有趣的掌上论剑特色节目。',
    backgroundUrl: 'home_activity/4.png',
    opacity: '0',
  },
  {
    name: '西湖论剑十周年回顾',
    title: '十年磨一剑',
    content:
      '2022年第十届西湖论剑·网络安全大会，十年磨一剑，向世界递出一张具有全球影响力、全国引领力、浙江辨识度的网络安全大会金名片。',
    backgroundUrl: 'home_activity/6.png',
    opacity: '0',
  },
])

const activeIndex = ref(0)
const carouselList = ref()

const handleSelect = async (index: number) => {
  carouselList.value.setActiveItem(index)

  activeIndex.value = index

  for (let i = 0; i < activityList.value.length; i++) {
    activityList.value[i].opacity = '0'
  }
  activityList.value[index].opacity = '1'
  await nextTick()
}
</script>

<style scoped lang="scss">
.main {
  position: relative;
  z-index: 1;
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

.activity {
  .activity-content {
    position: relative;
    padding: 0.6rem;
    height: 9.725rem;

    .activity-navigation {
      position: relative;
      display: flex;
      height: 1.475rem;
      width: 20.6812rem;
      margin: 0 auto;
      z-index: 1;
      background: #fff;

      .decoration {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        color: #fff;
        padding-left: 1.2rem;
        background: linear-gradient(
          to bottom right,
          $theme-color-blue,
          $theme-color-green
        );
        clip-path: polygon(100% 0, 80% 100%, 0 100%, 0 0);
      }

      .navigation {
        flex: 7;
        display: flex;
        justify-content: space-between;
        padding: 0 0.375rem;

        .navigation-item {
          cursor: pointer;
          color: #999;
          font-size: 0.2125rem;
          line-height: 1.475rem;
        }

        .active {
          @include linear-txt;
          transition: font-size 0.2s ease-in-out;
          font-size: 0.275rem;
          font-weight: bold;
        }
      }
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: opacity 0.5s ease-in-out;
      z-index: 0;
    }

    .el-carousel-item {
      width: 20.6812rem;
      height: 15.7625rem;
    }

    .carousel-item {
      margin: 0 auto;
      padding-top: 1.25rem;
      width: 20.6812rem;
      height: 5.7625rem;
      color: #fff;
      font-size: #fff;

      .name {
        font-size: 0.3rem;
        padding-bottom: 0.4625rem;
      }

      .title {
        padding-bottom: 0.5375rem;
        font-size: 0.45rem;
      }

      .content {
        padding-bottom: 1.15rem;
        font-size: 0.2rem;
        line-height: 0.6rem;
      }

      .more {
        position: relative;
        z-index: 1;
        height: 0.475rem;
        width: 2.425rem;
        text-align: center;
        line-height: 0.475rem;
        background: linear-gradient(
          to bottom right,
          $theme-color-blue,
          $theme-color-green
        );
        cursor: pointer;
        border-radius: 0.475rem;
        transition: background 1s ease-in-out;

        &:hover {
          background: linear-gradient(
            to bottom left,
            $theme-color-blue,
            $theme-color-green
          );
        }
      }
    }
  }
}
</style>

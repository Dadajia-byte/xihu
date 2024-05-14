<template>
  <div class="container">
    <div class="activity_card" v-for="(item, index) in lists" :key="index">
      <div
        class="image"
        :style="`background:url(${getImg(item.imgUrl)}) no-repeat center/cover`"
      ></div>
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getImg } from '@/utils/img'
const lists = ref([
  {
    imgUrl: 'home_activity/1.png',
    title: '格致论道',
    content:
      '5月5日 18:30“格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
  },
  {
    imgUrl: 'home_activity/2.png',
    title: '西湖论剑安全特训营',
    content:
      '5月4-6日 西湖论剑安全特训营是国内领先的数字安全人才交流、孵化及实训平台，致力于成为数字时代的“数字安全人才助推器”以体系化课程、实战化导向为显著特色，服务于数字化转型背景下的政府、企事业单位，为其培养数字安全的管理者、实战人才提供有力支撑，为国家数字安全人才发展持续输出强有力的“燃料”。',
  },
  {
    imgUrl: 'home_activity/3.png',
    title: '新品发布',
    content: '',
  },
  {
    imgUrl: 'home_activity/4.png',
    title: '第二直播间',
    content:
      '一次掌上场景搭建下的即时性交流，身临其境的参与感，精彩看点的抢先看;行业专家、观点嘉宾在线解读核心观点;更有大会成果密集输出，限定款宠粉福利。',
  },
  {
    imgUrl: 'home_activity/4.png',
    title: '掌上论剑',
    content:
      '以西湖论剑官网为载体，精心策划“掌上论剑”系列活动，推出“点亮网安，守护城市”、“守护每一份网安愿景”等互动活动，《今夜不破防》、《十日谈》、《新时代安全观对话》等亮点节目，打造一档精彩、有趣的掌上论剑特色节目。',
  },
  {
    imgUrl: 'home_activity/6.png',
    title: '西湖论剑十周年回顾',
    content:
      '2022年第十届西湖论剑·网络安全大会，十年磨一剑，向世界递出一张具有全球影响力、全国引领力、浙江辨识度的网络安全大会金名片。',
  },
])
</script>

<style scoped lang="scss">
.container {
  background-color: #f8f8fa;
  .activity_card {
    display: flex;
    flex-direction: column;
    .image {
      width: 90%;
      margin: 5vw auto;
      margin-bottom: 0;
      height: 35vw;
      background-color: blue;
    }
    .title {
      margin: 2vw auto;
      width: 88%;
      font-size: 4vw;
      font-weight: 700;
      color: #2b2b2d;
    }
    .content {
      margin: 0 auto;
      width: 88%;
      font-size: 2.9vw;
      line-height: 4.5vw;
      letter-spacing: 0.1vw;
      color: #5d5d5f;
    }
  }
}
</style>

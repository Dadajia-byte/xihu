<template>
  <div>
    <div class="header">
      <div class="title">大会介绍</div>
      <div class="engtitle">CONFERENCE INTRODUCTION</div>
    </div>
    <div class="video-container">
      <div class="video wow slideInLeft">
        <video ref="videoPlayer" class="video-js"></video>
      </div>
      <div class="video-description wow slideInRight">
        <div class="description-title">西湖论剑·网络安全大会</div>
        <div class="content">
          <span>
            {{ descriptionContent }}
          </span>
        </div>
      </div>
    </div>
    <HighLight></HighLight>
    <Past></Past>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import videojs from 'video.js'
import HighLight from './components/HighLight.vue'
import Past from '@/views/home/Past/Past.vue'
import WOW from 'wow.js'
const descriptionContent = ref(
  '西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”。历届大会期间，国家部委、省市领导，院士、知名专家和优秀企业代表齐聚杭州，共商数字时代的安全之道。2023年是全面贯彻落实党的二十大精神的开局之年，为深入学习贯彻党的二十大精神，推动落实《数字中国建设整体布局规划》尤其是筑牢数字安全屏障的要求，推进数字安全人才培养、科技创新、产业融合发展，以保障数字政务、数字经济、数字社会等数字化生态安全发展。在迎来大会十一年之际，由“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。',
)
const videoPlayer = ref()
const myPlayer = ref()
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
  myPlayer.value = videojs(
    videoPlayer.value,
    {
      poster:
        'https://cnstatic01.e.vhall.com/upload/saas/webinars/record-cover/20230422/1476a6e029c984632988dcc8882848ce.jpg?mode=1&have-wap-image=750',
      controls: true,
      sources: [
        {
          src: '', //缺少视频链接
          type: 'video/mp4',
        },
      ],
      controlBar: {
        remainingTimeDisplay: {
          displayNegative: false,
        },
      },
      playbackRates: [0.5, 1, 1.5, 2],
    },
    () => {
      myPlayer.value.log('play.....')
    },
  )
})

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
  initWOW()
})
</script>

<script lang="ts">
export default {
  name: 'introduction',
}
</script>

<style lang="scss" scoped>
.header {
  color: #fff;
  height: 7.025rem;
  background: url('/src/assets/images/bg_images/meetingabout.png') no-repeat
    center/cover;
  .title {
    font-size: 0.525rem;
    font-weight: bold;
    padding-left: 1.5875rem;
    padding-top: 2.7rem;
  }
  .engtitle {
    font-size: 0.2rem;
    padding-top: 0.25rem;
    padding-left: 1.5875rem;
  }
}

.video-container {
  width: 16.3625rem;
  height: 8.425rem;
  margin: 0.9625rem auto;
  position: relative;
  margin-bottom: 1.7rem;
  .video {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    .video-js {
      width: 9.0375rem;
      height: 5.3375rem;
    }
  }

  .video-description {
    background: linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.5)
      ),
      url(https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    width: 8.05rem;
    height: 6.775rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    box-shadow: 0.2125rem 0.2125rem 0.2125rem #d5d5d5;

    .description-title {
      font-size: 0.45rem;
      padding-left: 0.75rem;
      padding-top: 0.525rem;
      padding-bottom: 0.525rem;
      color: #1185e4;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        height: 0.45rem;
        width: 0.0625rem;
        left: 0.525rem;
        background-color: #1185e4;
      }
    }

    .content {
      margin-left: 1.15rem;
      font-size: 0.2rem;
      height: 4.0125rem;
      width: 6.2rem;
      line-height: 0.4rem;
    }
  }
}
</style>

<template>
  <div>
    <div class="header">
      <div class="title">媒体合作</div>
      <div class="title-eng">PARTNER</div>
    </div>
    <div class="video">
      <video ref="videoPlayer" class="video-js"></video>
    </div>
    <div class="logo-container">
      <div
        class="logo"
        v-for="(item, index) in logoList"
        :key="index"
        :style="`background:url(${item.logoUrl}) no-repeat center ;backgroundSize :cover`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import videojs from 'video.js'
const videoPlayer = ref()
const myPlayer = ref()
const logoList = ref([
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/5dd30797a95541528532b0abf7d3cdba.png',
  },
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
  },
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
  },
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
  },
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
  },
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
  },
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
  },
  {
    logoUrl:
      'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
  },
])

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
})
</script>

<script lang="ts">
export default {
  name: 'media',
}
</script>

<style lang="scss" scoped>
.header {
  height: 5.6rem;
  padding-top: 1.7375rem;
  padding-left: 1.3375rem;
  background-color: green;
  .title {
    font-weight: bold;
    font-size: 0.525rem;
    line-height: 0.5rem;
  }
  .title-eng {
    line-height: 0.7375rem;
    font-size: 0.2rem;
  }
}

.video {
  margin: -1.775rem auto 1.9rem auto;
  display: flex;
  justify-content: center;
  .video-js {
    width: 12.6875rem;
    height: 7.0125rem;
  }
}

$logosize: calc(15.525rem / 5);
.logo-container {
  margin: 0 auto;
  width: 15.525rem;
  display: flex;
  flex-wrap: wrap;
  .logo {
    height: $logosize;
    width: $logosize;

    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    box-sizing: border-box;
    position: relative;
    background-position: center center;
    .shadow {
      width: 100%;
      height: 100%;
    }

    &:nth-child(9n + 6) {
      margin-left: calc($logosize / 2);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 5px;
      left: 5px;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      z-index: -1;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

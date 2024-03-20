<template>
    <div class="container">
        <div class="tip">左右滑动可查看更多展商</div>
        <div id="carousel-container">
            <div class="carousel">
                <div class="carousel-item">1</div>
                <div class="carousel-item">2</div>
                <div class="carousel-item">3</div>
                <!-- 添加更多轮播项 -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import videojs from 'video.js';
const videoPlayer = ref()
const myPlayer = ref()
const mateItem  = [
    {
        name:'安恒信息',
        content:'自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
        poster:'xxx',
        video:'xxx',
    },
]

/* onMounted(()=>{
    myPlayer.value = videojs(
    videoPlayer.value,
    {
      poster:'',
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
}) */


</script>

<style scoped lang="scss">
.container {
    height: 100vh;
    background-color: blue; // 后期加入背景图片，去掉这个属性
    // background: url();
    background-size: cover;
    overflow: hidden;
    .tip {
        font-size: 3.5vw;
        color: white;
        width: fit-content;
        margin: 7vh auto;
        
    }
    
}

#carousel-container {
  overflow: hidden;
  perspective: 1000px; /* 为了3D效果 */
}


.carousel {
  display: flex;
  align-items: center;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 60vw; /* 确保视图中可以显示1.5个对象 */
  margin-right: 5vw; /* 每个对象之间的距离 */
  transform: scale(0.8); /* 默认缩放，不在中间的项目会小一点 */
  transition: transform 0.5s ease;
}

.carousel-item.active {
  transform: scale(1); /* 在中间的项目放大显示 */
}
</style>
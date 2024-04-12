<template>
  <div class="container">
    <!-- <div class="tip">左右滑动可查看更多展商</div>
    <swiper
      :slides-per-view="1.2"
      :centeredSlides="true"
      :loop="true"
      :initial-slide="1"
      :effect="'coverflow'"
      :coverflow-effect="coverflowEffect"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, index) in mateItem"
        :key="index"
        class="mySwiperSlide"
      >
        <div class="top">
          <div class="top_content">
            <div class="img"></div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
        <div class="bot">
          <div class="bot_content">
            <div class="content">{{ item.content }}</div>
            <video></video>
          </div>
        </div>
      </swiper-slide>
    </swiper> -->
    <iframe
      src="https://roma.720yun.com/vr/ce1c0d20bffcf1f9"
      frameborder="no"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { EffectCoverflow, Navigation, A11y, Autoplay } from 'swiper/modules'
// const modules = [EffectCoverflow, Navigation, A11y, Autoplay]

// const mateItem = [
//   {
//     name: '安恒信息',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息1',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息2',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息3',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息4',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息5',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息6',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息7',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
//   {
//     name: '安恒信息8',
//     content:
//       '自成立以来一直专注于网络安全，数据安全，应用安全，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全治理，安全运维，安全运营，安全',
//     poster: 'xxx',
//     video: 'xxx',
//   },
// ]

// let coverflowEffect = {
//   rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
//   stretch: -75, //每个slide之间的拉伸值，越大slide靠得越紧。
//   depth: 400, //slide的位置深度。值越大z轴距离越远，看起来越小。
//   modifier: 1.2, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
//   slideShadows: false, //开启slide阴影。默认 true。
// }
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  // 后期加入背景图片，去掉这个属性
  // background: url();
  background-size: cover;
  overflow: hidden;

  .tip {
    font-size: 3vw;
    color: white;
    width: fit-content;
    margin: 5vh auto;
  }

  .mySwiper {
    height: 75vh;
    font-size: 3.2vw;

    .mySwiperSlide {
      .top {
        height: 40%;
        width: 100%;
        background: linear-gradient(to bottom right, #0101fb, #39c8cd);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        .img {
          width: 23vw;
          height: 23vw;
          background-color: white;
          margin-bottom: 5vw;
        }

        .name {
          text-align: center;
        }
      }

      .bot {
        height: 60%;
        width: 100%;
        background-color: white;
        overflow: hidden;

        .bot_content {
          width: 80%;
          height: 80%;
          margin: 0 auto;
          margin-top: 15%;
          font-size: 3.5vw;
          line-height: 1.5;

          .content {
            /* 隐藏超出部分 */
            -webkit-line-clamp: 3;
            /* 设置最大行数（WebKit）*/
            -ms-line-clamp: 3;
            /* 设置最大行数（Edge）*/
            -webkit-box-orient: vertical;
            /* 设置为垂直方向（WebKit）*/
            -ms-box-orient: vertical;
            /* 设置为垂直方向（Edge）*/
            display: -webkit-box;
            /* 设置为弹性盒子（WebKit）*/
            display: -ms-box;
            /* 设置为弹性盒子（Edge）*/
            overflow: hidden;
            letter-spacing: 0.9vw;
          }

          video {
            display: block;
            margin: auto;
            margin-top: 5vw;
            background-color: black;
            width: 95%;
            height: 60%;
          }
        }
      }
    }
  }
}
</style>

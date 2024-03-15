<template>
  <div class="exhibitions-box">
    <div class="container">
      <div class="box-item box-l">
        <h1 class="wow fadeInLeft">虚拟数字展厅</h1>
      </div>
      <div class="box-item box-r">
        <h1 class="wow fadeInRight">AR展厅</h1>
      </div>
    </div>
    <!-- 核心 -->
    <img src="../../../../../public/logo/logo1.png" class="logo" />
    <!-- 装饰 -->
    <div class="outline">
      <div
        class="e"
        :class="'e_' + (index + 1)"
        :key="item"
        @click="handleGoAr"
        :style="{ animationDelay: (index + 1) * 0.3 + 's' }"
        v-for="(item, index) in exhibitors"
      >
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="inline">
      <div
        class="e"
        v-for="(item, index) in inlineE"
        :key="item"
        :class="'e_' + (index + 1)"
        @click="handleGoWeb"
        :style="{ animationDelay: (index + 1) * 0.3 + 's' }"
      >
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="decoration-cir cir-r"></div>
    <div class="decoration-cir cir-l"></div>
  </div>
</template>

<script setup lang="ts">
import WOW from 'wow.js'
import { onMounted } from 'vue'

const exhibitors = [
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
]

const inlineE = [
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png',
  'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
]

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}

const handleGoAr = () => {
  window.open('/lay/ar-e')
}

const handleGoWeb = () => {
  window.open(
    'https://ve.mvpmeta.com/new/preview/#/?id=16159&secret=MTYxNTk=&ratio=256',
  )
}

onMounted(() => {
  initWOW()
})
</script>

<style scoped lang="scss">
.exhibitions-box {
  width: 100%;
  min-height: 10rem;
  height: calc(100vh - $layout-header-height);
  position: relative;
  overflow: hidden;

  @keyframes Float {
    0% {
      margin-top: 0rem;
    }

    50% {
      margin-top: 0.2rem;
    }

    100% {
      margin-top: 0rem;
    }
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 0.3s;
    width: 260px;
    height: 58px;
  }

  .logo:hover {
    width: 290px;
    height: 68px;
  }

  .outline {
    position: absolute;
    width: 15rem;
    height: 15rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    border: 0.0333rem solid $theme-color-green;
    border-radius: 50%;

    .e {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      position: absolute;
      border: 0.0167rem solid rgba(240, 240, 240, 0.655);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 0 0 0.1667rem 0px rgba(197, 197, 197, 0.1);
      cursor: pointer !important;
      z-index: 3000;
      animation: Float 3s infinite;

      img {
        width: 90%;
        height: 90%;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
      }

      img:hover {
        width: 100%;
        height: 100%;
      }
    }

    .e_1 {
      left: 10%;
      top: 10%;
    }

    .e_2 {
      left: 0;
      top: 25%;
    }

    .e_3 {
      left: -5%;
      top: 45%;
    }

    .e_4 {
      left: 0%;
      top: 65%;
    }

    .e_5 {
      right: -5%;
      top: 55%;
    }

    .e_6 {
      right: -3%;
      top: 32%;
    }

    .e_7 {
      right: 7%;
      top: 13%;
    }
  }

  .inline {
    position: absolute;
    width: 8rem;
    height: 8rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    border: 0.0333rem solid rgb(177, 192, 202);
    border-radius: 50%;
    z-index: 1000;

    .e {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      position: absolute;
      border: 0.0167rem solid rgba(240, 240, 240, 0.655);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 0 0 0.1667rem 0px rgba(197, 197, 197, 0.1);
      cursor: pointer !important;
      animation: Float 3s infinite;
      z-index: 3000;

      img {
        width: 90%;
        height: 90%;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
      }

      img:hover {
        width: 100%;
        height: 100%;
      }
    }

    .e_1 {
      top: 0%;
      left: 10%;
    }

    .e_2 {
      top: 50%;
      left: -10%;
    }

    .e_3 {
      top: 70%;
      right: 5%;
    }
  }

  .box-item {
    flex: 1;
    height: 100%;
    display: flex;
    padding: 5%;

    h1 {
      font-size: 0.8rem;
      @include linear-txt;
    }
  }

  .line {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: $theme-color-green;
    left: 0;
    top: 0;
    clip-path: polygon(
      calc(100% - 0.5rem) 0%,
      0% calc(100% - 0.5rem),
      0.5rem 100%,
      100% 0.5rem
    );

    .line-top {
      width: 50%;
      height: 100%;
      background-color: $theme-color-green;
    }
  }

  .box-l {
    flex-direction: column;
  }

  .box-r {
    flex-direction: column-reverse;

    h1 {
      text-align: end;
    }
  }

  .decoration-cir {
    position: absolute;
    width: 3.3333rem;
    height: 3.3333rem;
    z-index: 100;
  }

  .cir-r {
    top: 0;
    right: 0;
    background: radial-gradient(
      $theme-color-green 0.2667rem,
      $theme-color-blue
    );
    border-radius: 0 0 0 3.3333rem;
  }

  .cir-l {
    bottom: 0;
    left: 0;
    background: radial-gradient(
      $theme-color-blue 0.4667rem,
      $theme-color-green
    );
    border-radius: 0 3.3333rem 0 0;
  }
}
</style>

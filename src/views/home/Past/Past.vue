<template>
  <div>
    <span class="divider wow fadeInUp">
      <div class="content">
        <span style="font-size: 0.8125rem" class="head">W</span>
        <div class="content2">onderful Moment 精彩瞬间</div>
      </div>
    </span>
    <div class="past">
      <div class="past_container">
        <div class="part1 wow fadeInUp">
          <div
            class="img1"
            :style="`background-image: url(${getImg('pastagenda_images/pastagenda6.jpg')});`"
          ></div>
          <div
            class="img2"
            :style="`background-image: url(${getImg('pastagenda_images/pastagenda3.jpg')});`"
          ></div>
        </div>
        <div class="part2 wow fadeInUp">
          <div
            class="img3"
            :style="`background-image: url(${getImg('pastagenda_images/pastagenda2.jpg')});`"
          ></div>
        </div>
        <div class="part1 wow fadeInUp">
          <div
            class="img1"
            :style="`background-image: url(${getImg('pastagenda_images/pastagenda1.jpeg')});`"
          ></div>
          <div
            class="img2"
            :style="`background-image: url(${getImg('pastagenda_images/pastagenda4.jpg')});`"
          ></div>
        </div>
        <div class="part2 wow fadeInUp">
          <div
            class="img3"
            :style="`background-image: url(${getImg('pastagenda_images/pastagenda5.jpg')});`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { getImg } from '@/utils/img'
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
</script>

<style scoped lang="scss">
.past {
  width: 100%;
  height: 7.6375rem;
  overflow: hidden;
  position: relative;
}

.past_container {
  position: absolute;
  left: -1.3125rem;
  top: 0;
  height: 6.5125rem;
  display: flex;

  .part1 {
    margin-right: 0.1875rem;
    width: 5.6875rem;

    .img1 {
      height: 3.725rem;
      margin-bottom: 0.1875rem;
      background-color: #1185e4;
    }

    .img2 {
      height: 3.725rem;
      background-color: #1185e4;
    }
  }

  .part2 {
    margin-right: 0.1875rem;
    width: 11.8688rem;
    height: 7.6375rem;

    .img3 {
      background-color: #1185e4;
      height: 7.6375rem;
    }
  }

  .img1,
  .img2,
  .img3 {
    cursor: pointer;
    position: relative;
    background: no-repeat center/cover;

    &:hover::after {
      content: '查看更多 →';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: transparent;
      color: white;
    }

    &:hover::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(72, 198, 239, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover::before {
      opacity: 1;
    }
  }
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
</style>

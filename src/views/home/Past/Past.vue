<template>
  <div>
    <span class="divider wow fadeInUp">往届大会</span>
    <div class="past">
      <div class="past_container">
        <div class="part1 wow fadeInUp">
          <div class="img1"></div>
          <div class="img2"></div>
        </div>
        <div class="part2 wow fadeInUp">
          <div class="img3" style=""></div>
        </div>
        <div class="part1 wow fadeInUp">
          <div class="img1"></div>
          <div class="img2"></div>
        </div>
        <div class="part2 wow fadeInUp">
          <div class="img3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
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
  height: 6.5125rem;
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
    width: 5.0625rem;

    .img1 {
      height: 3.375rem;
      margin-bottom: 0.1875rem;
      background-color: #1185e4;
    }

    .img2 {
      height: 3.375rem;
      background-color: #1185e4;
    }
  }

  .part2 {
    margin-right: 0.1875rem;
    width: 11.8688rem;
    height: 6.5125rem;

    .img3 {
      background-color: #1185e4;
      height: 6.5125rem;
    }
  }

  .img1,
  .img2,
  .img3 {
    cursor: pointer;
    position: relative;
    // background: no-repeat center/cover;

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
      background: rgba(255, 255, 255, 0.5);
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
  display: flex;
  width: 4rem;
  align-items: center;
  text-align: center;
  color: #1185e4;
  font-size: 0.4286rem;
  margin: 0.5714rem auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 0.0429rem solid #1185e4;
    margin: 0 0.1429rem;
  }
}
</style>

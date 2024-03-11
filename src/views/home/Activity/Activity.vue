<template>
  <div>
    <div
      class="activity wow animate__rotateInDownRight"
      data-wow-duration="1.3s"
      data-wow-delay="0.5s"
    >
      <span class="divider">精彩活动</span>
      <div class="whole-content">
        <img src="" alt="" />
        <div class="activity-content">
          <div class="title">
            让“圈外人”关注网络安全，让“冷”科普做到“热”传播
          </div>
          <div class="content">
            5月5日 18:30
            “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。
          </div>
          <div class="more">了解详情>></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WOW from 'wow.js'
import { onMounted } from 'vue'
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
.divider {
  display: flex;
  width: 4rem;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 0.4286rem;
  margin: 0.5714rem auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 0.0429rem solid #fff;
    margin: 0 0.1429rem;
  }
}

.activity {
  overflow: hidden; // 解决外边距合并
  width: 20.5714rem;
  height: 8.5714rem;
  margin: 1.4286rem auto;
  background-color: #090a36;

  .whole-content {
    display: flex;
    justify-content: space-around;

    img {
      width: 9.7714rem;
      height: 6.3143rem;
      padding: 0.1429rem;
    }

    .activity-content {
      width: 9.7714rem;
      padding: 0.1429rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .title {
        width: 9.2857rem;
        font-weight: 700;
        font-size: 0.3571rem;
      }

      .content {
        width: 7.1429rem;
        padding-left: 0.1429rem;
        font-size: 0.2857rem;
        line-height: 0.5rem;
        text-align: left;
      }

      .more {
        font-size: 0.2143rem;
        font-weight: 700;

        cursor: pointer;

        &:hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>

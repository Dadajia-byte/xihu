<template>
  <div class="activity-page">
    <div class="a-bg" ref="vantaRef">
      <h2>精彩活动</h2>
    </div>
    <div class="lists">
      <List></List>
    </div>
    <!-- <div class="clock-in">
            <div class="ci-title">活动打卡</div>
            <div class="cin">
                <div class="in-l" @click="router.push({ name: 'clock-in' })">面部贴图打卡区</div>
                <div class="in-r" @click="router.push({ name: 'clock-in-hand' })">手部贴图打卡区</div>
            </div>
        </div> -->
  </div>
</template>

<script setup lang="ts">
import List from '../activities/List.vue'
import { onMounted } from 'vue'
import useActivityStore from '@/store/modules/activity'
let activityStore = useActivityStore()
onMounted(() => {
  activityStore.filterItem.pageSize = 4
  activityStore.getActivty()
})
</script>

<style scoped lang="scss">
.activity-page {
  width: 100%;

  .a-bg {
    height: 7.5rem;
    position: relative;
    background: url(https://www.gcsis.cn/img/activity_banner.jpg) no-repeat;

    h2 {
      color: white;
      position: absolute;
      top: 20%;
      font-size: 0.5rem;
      left: 5%;
    }
  }

  .lists {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-3.75rem);
  }

  .clock-in {
    width: 100%;
    margin-bottom: 1.6667rem;

    .ci-title {
      width: 100%;
      font-size: 0.4rem;
      @include linear-txt;
      text-align: center;
    }

    .cin {
      margin-top: 0.8333rem;
      display: flex;
      flex-direction: column;
      gap: 0.6667rem;
      width: 100%;
      position: relative;

      div {
        padding: 0.5rem 1rem;
        font-size: 0.34rem;
        width: 30%;
        border-radius: 0.2333rem 0;
        cursor: pointer;
      }

      .in-l {
        background: linear-gradient(
          to right,
          $theme-color-blue,
          $theme-color-green
        );
        color: white;
        position: relative;
        left: 10%;
      }

      .in-r {
        border: 0.0333rem solid $theme-color-green;
        @include linear-txt;
        position: absolute;
        right: 10%;
      }
    }
  }
}
</style>

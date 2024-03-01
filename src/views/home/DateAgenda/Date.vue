// 这里先不用吧
<template>
  <div>
    <div class="ca-header header">
      <div class="circle wow fadeIn" data-wow-delay="0.2s"></div>
      <div class="fir ca-header-item wow fadeInLeft" data-wow-delay="0s">
        <p class="title">大会议程</p>
        <p class="title-en">Conference Agenda</p>
      </div>
      <div
        class="ca-header-item ca-header-item-day wow fadeInDown"
        data-wow-delay="0.2s"
      >
        <el-icon>
          <Calendar />
        </el-icon>
        <span>5月5日</span>
      </div>
      <div
        class="ca-header-item ca-header-item-day wow fadeInDown"
        data-wow-delay="0.4s"
      >
        <el-icon>
          <Calendar />
        </el-icon>
        <span>5月6日</span>
      </div>
      <div
        class="ca-header-item ca-header-item-day wow fadeInDown"
        data-wow-delay="0.6s"
      >
        <el-icon>
          <Calendar />
        </el-icon>
        <span>5月7日</span>
      </div>
      <div
        class="ca-header-item ca-header-item-day wow fadeInDown"
        data-wow-delay="0.8s"
      >
        <el-icon>
          <Calendar />
        </el-icon>
        <span>5月8日</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ca-header {
  width: 80%;
  display: flex;
  box-shadow: 0 0 0.1875rem 0 rgba(0, 0, 0, 0.1);
  padding-right: 53.336px;
  position: relative;
  background-color: white;

  .circle {
    position: absolute;
    left: 100%;
    bottom: 100%;
    transform: translate(calc(157.336px / -2), calc(157.336px / 2));
    height: 157.336px;
    width: 157.336px;
    border-radius: 50%;
    z-index: -1;
    background: linear-gradient($theme-color-green, $theme-color-blue);
  }

  .title {
    font-size: 30.664px;
    color: white;
    font-weight: 300;
  }

  .title-en {
    color: white;
    font-size: 11.736px;
  }

  .fir {
    flex: 1.3 !important;
    position: relative;
    scale: 1.2;
    left: 13.336px;
    clip-path: polygon(0 0, 100%, 70% 100%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100%, 70% 100%, 0 100%);
    background-image: linear-gradient(
      to right,
      $theme-color-blue,
      $theme-color-green
    );

    p {
      position: relative;
      right: 21.336px;
    }
  }

  .ca-header-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 26.664px 0.264px;
    gap: 0.125rem;
    align-items: center;
  }

  .ca-header-item-day {
    flex-direction: row;
    justify-content: flex-end;
    color: grey;
    align-items: center;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="main">
    <span class="divider">新闻资讯</span>

    <el-carousel :interval="4000" type="card" height="9.1714rem" style="width: 17.1429rem; margin: 0 auto">
      <el-carousel-item>
        <el-card>
          <img src="" alt="" />
          <div></div>
          <div></div>
          <div></div>
          <div class="description">
            指路贴来啦!大家都关心的嘉宾PPT下载指南在这里!一图解锁西湖论剑官网&小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨!
          </div>
        </el-card>
      </el-carousel-item>
      <el-carousel-item v-for="item in 5">
        <el-card>{{ item }}</el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
  flex-direction: column;

  .divider {
    display: flex;
    width: 4rem;
    align-items: center;
    color: #1185e4;
    font-size: .4286rem;
    margin: .5714rem auto;
    font-weight: 700;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: .0429rem solid #1185e4;
      margin: 0 .1429rem;
    }
  }

  .el-card {
    width: 8.5714rem;
    height: 9.1714rem;

    .el-carousel__item {
      margin: auto;

      .description {
        width: 100%;
        height: 209.069px;
      }
    }
  }
}
</style>

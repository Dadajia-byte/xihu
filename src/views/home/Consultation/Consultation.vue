<template>
  <div class="main">
    <span class="divider">新闻资讯</span>

    <el-carousel :interval="4000" type="card" height="642px" style="width: 1200px;margin: 0 auto;">
      <el-carousel-item>
        <el-card>
          <img src="" alt="">
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
    width: 280px;
    align-items: center;
    color: #1185e4;
    font-size: 30px;
    margin: 40px auto;
    font-weight: 700;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 3px solid #1185e4;
      margin: 0 10px;
    }
  }

  .el-card {
    width: 600px;
    height: 642px;

    .el-carousel__item {
      margin: auto;

      .description {
        width: 100%;
        height: 2.9867rem;
      }
    }
  }
}
</style>

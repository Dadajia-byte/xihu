<template>
  <el-card class="point-card">
    <div class="title">我的积分</div>
    <el-icon class="coin"><Coin /></el-icon>
    <div class="number">500</div>
    <div class="line"></div>
    <el-icon class="medal"><Trophy /></el-icon>
    <div class="subtitle1">积分奖励</div>
    <bigpointcard></bigpointcard>
    <div class="line"></div>
    <el-icon class="good"><Goods /></el-icon>
    <div class="subtitle2">积分商城</div>
    <shopcard></shopcard>
  </el-card>
</template>

<script setup lang="ts">
import bigpointcard from './compoment/bigpointcard.vue';
import shopcard from './compoment/shopcard.vue';
</script>

<style scoped>
.point-card {
  width: 150%;
  display: flex;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 15rem;
}
.title {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  margin-bottom: .125rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;
}
.coin{
  margin-top: .0625rem;
  margin-left: .4375rem;
  font-size: .4375rem;
  color: #777777;
}
.number{
  margin-top: -0.475rem;
  margin-left: .9375rem;
  font-size: .4375rem;
  font-weight: bold;
}
.line{
  margin-top: .2625rem;
  margin-left: .3125rem;
  border: .0125rem solid #E3E5E7;
  width: 12.5rem;
}
.medal{
  margin-top: .25rem;
  margin-left: .3125rem;
  font-size: .4rem;
  color: #F8CD00;
}
.subtitle1{
  margin-top: -0.4125rem;
  margin-left: .825rem;
  font-size: .35rem;
}
.subtitle2{
  margin-top: -0.4125rem;
  margin-left: .825rem;
  font-size: .35rem;
}
.good{
  margin-top: .25rem;
  margin-left: .3125rem;
  font-size: .4rem;
  color: #EE8B06;
}
</style>

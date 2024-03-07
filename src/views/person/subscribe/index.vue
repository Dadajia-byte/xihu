<template>
  <el-card class="subscribe-card">
    <div class="title1">议程订阅</div>
    <carditem></carditem>
    <!-- <div class="more">
      查看更多
    </div> -->
    <div class="title2">精彩活动订阅</div>
    <carditem2></carditem2>
  </el-card>
</template>

<script setup lang="ts">
import carditem from './component/carditem.vue'
import carditem2 from './component/carditem2.vue'
</script>

<style scoped>
.subscribe-card {
  width: 150%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 12.5rem;
}
.title1 {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  margin-bottom: 0.125rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;
}
.more{
  margin-top: 1rem;
  margin-left: 6.25rem;
  font-size: 11px;
  width: 0.975rem;
  padding: 0.0437rem 0.05rem 0.05rem 0.05rem;
  color: #1185e4;
  border: 1px solid #1185e4;
  border-radius: 0.375rem;
  text-align: center;
}
.title2 {
  margin-top: 1.25rem;
  margin-left: 0.3125rem;
  margin-bottom: 0.125rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;
}
</style>

<template>
  <el-card class="subscribe-card">
    <div class="title1">议程订阅</div>

    <!-- 议程订阅模块实现展开（1000px是动态高度，350px是初始固定高度）start -->
    <meetingItems
      class="meeting"
      :style="{
        maxHeight: isExpand
          ? `${meetingStore.meetingNum * 2.4375}rem`
          : '4.875rem',
      }"
      ref="meeting"
    ></meetingItems>
    <el-icon
      class="arrowdown"
      v-show="!isExpand && meetingStore.meetingNum > 6"
      @click="expand"
    >
      <ArrowDown />
    </el-icon>

    <el-icon
      class="arrowup"
      v-show="isExpand && meetingStore.meetingNum > 6"
      @click="collapse"
    >
      <ArrowUp />
    </el-icon>
    <!-- 议程订阅模块实现展开（1000px是动态高度，350px是初始固定高度）end -->

    <div class="content-wrapper">
      <div class="title2">精彩活动订阅</div>
      <activityItems ref="activity"></activityItems>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import meetingItems from './component/meetingItems.vue'
import activityItems from './component/activityItems.vue'

import useMeetingStore from '@/store/modules/meeting'
let meetingStore = useMeetingStore()

import { ref } from 'vue'
let isExpand = ref(false)

const expand = () => {
  isExpand.value = true
}
const collapse = () => {
  isExpand.value = false
}
</script>

<style scoped>
.subscribe-card {
  width: 150%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  min-height: 12rem;
  transition: max-height 0.3s ease;
}
.title1,
.title2 {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  margin-bottom: 0.125rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;

  & .title2 {
    margin-top: 0.625rem;
  }
}
.meeting {
  overflow: hidden;
  transition: max-height 0.8s ease;
}
.arrowdown,
.arrowup {
  margin-top: 0.375rem;
  margin-left: 6.25rem;
  padding: 0.0375rem;
  font-size: 0.5625rem;
  border: 1.6px solid #1185e4;
  color: #1185e4;
  height: 0.325rem;
  width: 0.325rem;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
</style>

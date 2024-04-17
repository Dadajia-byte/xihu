<template>
  <div class="subItem">
    <smallcard
      v-for="(historyData, index) in historyList"
      :key="index"
      :historyData="historyData"
    ></smallcard>
  </div>
</template>

<script setup lang="ts">
import smallcard from './smallcard.vue'
import { ref } from 'vue'

const historyList = ref([
  {
    title: '信创软件供应链安全论坛',
    progress: '75',
    img: 'person_images/history1.jpeg',
  },
  {
    title: '生态合作伙伴分论坛',
    progress: '23',
    img: 'person_images/history2.jpg',
  },
  // {
  //   title: '',
  //   progress: '',
  //   img:'',

  // },
  // {
  //   title: '',
  //   progress: '',
  //   img:'',

  // },
])
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

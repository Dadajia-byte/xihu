<template>
  <div class="container">
    <div v-for="(item, index) in items" :key="index" :class="`item${index}`">
      <component :is="item.icon" class="myIcon"></component>
      {{ item.ct }}
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    ct: '关于大会',
    icon: 'DataLine',
  },
  {
    ct: '媒体中心',
    icon: 'Film',
  },
  {
    ct: '成果发布',
    icon: 'CirclePlus',
  },
  {
    ct: '参会指南',
    icon: 'Compass',
  },
]
</script>

<style scoped lang="scss">
.container {
  padding-top: 1.5vh;
  background-color: white;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  div[class^='item'] {
    width: 45%;
    height: 10vw;
    font-size: 3.5vw;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #6b799a, #aab9cf);
    border-radius: 2vw;
    &:nth-child(1) {
      background: linear-gradient(to bottom, #0e56c1, #98b5fe);
    }

    &:nth-child(2) {
      background: linear-gradient(to bottom, #0b9e9c, #39d1d7);
    }

    .myIcon {
      width: 6vw;
      height: 6vw;
      padding-right: 1vw;
      color: white;
    }
  }
}
</style>

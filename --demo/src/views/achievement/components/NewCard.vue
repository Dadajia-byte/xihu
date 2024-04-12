<template>
  <div class="new-card">
    <div
      class="img"
      :style="{
        backgroundImage: `url(${props.bgUrl})`,
      }"
    ></div>
    <h4 class="title">{{ title }}</h4>
    <p class="content">{{ content }}</p>
    <button class="btn">立即试用</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  bgUrl: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss">
.new-card {
  width: 6rem;
  height: 6.6667rem;
  border: 0.0167rem solid rgba(224, 224, 224, 0.611);
  border-radius: 0.1667rem;
  box-shadow: 0 0 0.3333rem 0px rgb(222, 222, 222);
  padding: 0.3667rem;
  background-color: white;

  .img {
    width: 100%;
    height: 50%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .title {
    padding: 0.25rem 0;
    font-size: 0.3rem;
  }

  .content {
    color: grey;
    line-height: 1.7;
    font-size: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .btn {
    background-color: white;
    font-size: 0.2rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0.1667rem;
    border: 0.0167rem solid rgba(210, 210, 210, 0.85);
    color: grey;
    padding: 0.0867rem 0.1867rem;
    margin-top: 0.5rem;
  }
}
</style>

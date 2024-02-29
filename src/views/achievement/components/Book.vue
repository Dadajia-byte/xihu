<template>
  <div class="book">
    <img :src="bkData.bgUrl" alt="" />
    <div class="content">
      <h4>{{ bkData.title }}</h4>
      <p>{{ bkData.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  bkData: {
    type: Object,
    default: () => { },
  },
})
</script>

<style scoped lang="scss">
.book {
  width: 100%;
  height: 5rem;
  background-image: url(https://www.gcsis.cn/img/cg5.jpg);
  background-size: cover;
  border: 0.0167rem solid rgba(239, 239, 239, 0.5);
  box-shadow: 0 0 0.2167rem 0px rgba(228, 228, 228, 0.823);
  border-radius: 0.1667rem;
  padding: 0.3333rem 20%;
  display: flex;

  img {
    height: 90%;
  }

  .content {
    h4 {
      margin-bottom: 0.3333rem;
      font-size: 0.35rem;
      text-align: center;
      @include linear-txt;
    }

    p {
      font-size: 0.22rem;
      color: grey;
      line-height: 1.7;
      text-indent: 2em;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

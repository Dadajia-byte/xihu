<template>
  <div class="card-item-box">
    <div class="card-left c-i">
      <p class="en">{{ cardData.enTitle }}</p>
      <p class="ch">{{ cardData.chTitle }}</p>
      <p class="content">{{ cardData.content }}</p>
      <div class="down">立即下载</div>
    </div>
    <div class="card-right c-i">
      <img :src="cardData.bgUrl" class="images" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  cardData: {
    type: Object,
    default: () => {},
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.card-item-box {
  width: 70%;
  height: 8.5714rem;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 0.3333rem;

  .card-right {
    display: flex;
    justify-content: center;
    align-items: center;

    .images {
      height: 85%;
    }
  }

  .c-i {
    flex: 1;
    padding: 0.4286rem;

    img {
      height: 100%;
      border-radius: 0.2333rem;
    }

    .en {
      color: #bbb;
      font-size: 0.3714rem;
      line-height: 1.1;
    }

    .ch {
      margin-top: 0.2857rem;
      @include linear-txt;
      font-size: 0.4rem;
      text-align: center;
    }

    .content {
      background-color: #f7f7f7;
      line-height: 2;
      padding: 0.2143rem 0rem 0.2143rem 0.2143rem;
      margin-top: 0.5429rem;
      color: grey;
      font-size: 0.2286rem;
    }

    .down {
      margin-top: 0.2857rem;
      width: fit-content;
      background: linear-gradient(
        to left,
        $theme-color-green,
        $theme-color-blue
      );
      color: white;
      cursor: pointer;
      padding: 0.1167rem 0.1667rem;
      font-size: 0.2167rem;
      border-radius: 0.0833rem;
    }
  }
}
</style>

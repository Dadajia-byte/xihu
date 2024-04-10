<template>
  <div>
    <div class="ticket">
      <div class="header">
        <div class="title">线上购票</div>
      </div>
      <div class="ticket_container">
        <div class="ticket_item">
          <div class="top">当前选择</div>
          <div class="type">学生票</div>
          <div class="price">¥180</div>
          <div class="buy">立即购票</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.ticket {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;

    .title {
      font-size: .675rem;
      font-weight: bold;
      @include linear-txt;
    }
  }

  .ticket_container {
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .ticket_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 6.25rem;
      height: 6.25rem;

      .top{
        background-color: skyblue;
      }
      .type {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        color: #FF1B88;
        font-size: .45rem;
      }

      .price {
        color: #002691;
        display: flex;
        justify-content: center;
        font-size: .675rem;
        font-weight: bold;
      }
      .buy{
        margin: 0 auto;
        height:.625rem;
        width: 1.25rem;
        border-radius: .625rem;
      }
    }
  }
}
</style>
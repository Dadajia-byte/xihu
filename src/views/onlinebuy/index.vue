<template>
  <div>
    <div class="ticket">
      <div class="header">
        <div class="title">线上购票</div>
      </div>
      <div class="ticket_container">
        <div class="ticket_item" v-for="(item, index) in ticket" :key="index">
          <div class="top" v-show="index === activeIndex">当前选择</div>
          <div class="type">{{ item.type }}</div>
          <div class="price">{{ item.price }}</div>
          <div class="desc"></div>
          <div class="buy" @click="setActive(index)" :class="activeIndex === index ? 'active' : ''">立即购票</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref(0)
const setActive = (index: number) => {
  activeIndex.value = index
}
const ticket = ref([{
  type: '学生票',
  price: '¥180',
  desc: '',
},
{
  type: '学生票',
  price: '¥180',
  desc: '',
},
{
  type: '学生票',
  price: '¥180',
  desc: '',
},

])
</script>

<style lang="scss" scoped>
.ticket {
  background: url('/src/assets/images/bg_images/imgwall.png') no-repeat
    center/cover;
    padding-bottom: 1rem;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;

    .title {
      font-size: 0.675rem;
      font-weight: bold;
      @include linear-txt;
    }
  }

  .ticket_container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: .625rem;

    .ticket_item {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 6.25rem;
      margin-right: .3125rem;
      position: relative;

      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        top: -0.625rem;
        color: #fff;
        background: #48c6ef;
        
        font-size: .3125rem;
        height: .625rem;
      }

      .type {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        color: #ff1b88;
        font-size: 0.45rem;
      }

      .price {
        color: #002691;
        display: flex;
        justify-content: center;
        font-size: 0.675rem;
        font-weight: bold;
      
      }

      .buy {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .3125rem;
        margin: 0 auto;
        height: .625rem;
        width: 2.5rem;

        margin-top: .3125rem;
        margin-bottom: .3125rem;

        border: 1px solid #ff1b88;
        border-radius: 0.625rem;


      }

      .active {
        background-color: #ff1b88;
        box-shadow: 0px 0px 10px 0px #abaaab;
        color: #fff;
      }
    }
  }
}
</style>

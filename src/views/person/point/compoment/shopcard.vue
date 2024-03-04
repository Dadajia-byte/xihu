<template>
    <div class="box-card">
      <div class="name">2021年成都大运会赛事门票</div>
      <div class="price">25000积分</div>
      <div class="type">立即兑换</div>
      <div class="sub-box"></div>
    </div>
</template>
  
<script setup lang="ts"></script>
  
<style scoped>
.box-card {
    background: url(../../../../assets/images/person_images/dayunhui.png)
      no-repeat;
    background-size: 5.27rem 2.875rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.1875rem;
    margin-left: 0.3125rem;
    width: 5.25rem;
    height: 4rem;
}
.sub-box{
    margin-top: 0.1875rem;
    margin-left: 0.3125rem;
    width: 5.25rem;
    height: 2.5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.name {
    margin-top: 2.9375rem;
    margin-left: .1875rem;
    font-size: 18px;
    color: black;
}
.price {
    margin-top: .375rem;
    margin-left: .1875rem;
    font-size: 23px;
    color: #1185e4;
}
.type {
    margin-top: 0.25rem;
    margin-left: 2.8125rem;
    font-size: 11px;
    width: 1.025rem;
    padding: 0.0437rem 0.05rem 0.05rem 0.0875rem;
    color: #1185e4;
    border: 1px solid #1185e4;
    border-radius: 0.375rem;
}
</style>
  
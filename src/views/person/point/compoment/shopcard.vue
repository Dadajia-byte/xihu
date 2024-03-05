<template>
  <div class="box-card">
    <div class="sub-box">
      <div class="name">2021年成都大运会赛事门票</div>
      <div class="price">25000积分</div>
      <div class="type">立即兑换</div>
    </div>
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
  margin-left: 0.775rem;
  width: 5.25rem;
  height: 4.375rem;
  transition: transform 0.3s;
}
.box-card:hover {
  transform: scale(1.05);
}
.sub-box {
  margin-top: 2.85rem;
  margin-left: 0.0187rem;
  width: 5.2375rem;
  height: 1.25rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.name {
  margin-top: 0.125rem;
  margin-left: 0.1875rem;
  font-size: 0.2375rem;
  color: black;
}
.price {
  margin-top: 0.375rem;
  margin-left: 0.1875rem;
  font-size: 0.3125rem;
  color: #1185e4;
}
.type {
  margin-top: -0.25rem;
  margin-left: 3.9375rem;
  font-size: 0.1875rem;
  width: 1.0625rem;
  padding: 0.05rem;
  color: #1185e4;
  border: 0.0125rem solid #1185e4;
  border-radius: 0.375rem;
  text-align: center;
}
</style>

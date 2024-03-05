<template>
    <div class="box-card">
        <div class="circle">
            <div class="point">+100</div>
        </div>
        <div class="task">观看直播<br>(5分钟以上)</div>
        <div class="finish">去完成</div>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .box-card {
    display: flex;
    flex-direction: column;
    margin-left: .375rem;
    width: 1.875rem;
    height: 2.75rem;
    overflow: hidden;
  }
  .circle {
    margin-top: .125rem;
    margin-left: .25rem;
    border-radius: 50%; 
    background-image: linear-gradient(to right, #4AA3EB, #79C3FF);
    width: 1.25rem;
    height: 1.25rem; 
  }
  .point{
    margin-top: .5rem;
    margin-left: .2625rem;
    color: white;
    font-size: .275rem;
  }
  .task{
    margin-top: .125rem;
    margin-left: .25rem;
    width: 1.25rem;
    font-size: .2125rem;
    text-align: center;
    line-height: .25rem;
  }
  .finish{
    margin-top: .15rem;
    margin-left: .475rem;  
    font-size: .1625rem;
    width: .7875rem;
    padding: .05rem;
    color: #ABAAAA;
    border-radius: 0.375rem;
    border: .0125rem solid #ABAAAA;
    text-align: center;
  }
</style>
  
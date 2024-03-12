<template>
  <div>
    <div class="marster">
      <div class="header">
        <div class="title">大咖云集</div>
        <div class="engtitle">SPEAKERS</div>
      </div>

      <div class="professonal">
        <div class="professonal-title">
          <div class="title">专家委员会</div>
          <div class="tips">排名不分先后</div>
        </div>
      </div>
      <div class="guest"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'master',
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 4.8rem;
  padding-left: 1.325rem;
  padding-top: 1.75rem;
  background-color: green;

  .title {
    font-size: 0.525rem;
    font-weight: bold;
    line-height: 0.5rem;
    color: #fff;
  }

  .engtitle {
    font-size: 0.2rem;
    line-height: 0.7375rem;
    color: #fff;
  }
}

.professonal {

  .professonal-title {
    padding-top: .45rem;
    padding-left: 1.5875rem;
    color: #1185e4;
    display: flex;

    .title {
      font-size: 0.525rem;
      font-weight: bold;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -0.25rem;
        width: .0875rem;
        height: 0.525rem;
        background-color: #1185e4;
      }
    }

    .tips {
      margin-left: .25rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 0.175rem;
    }


  }
}
</style>

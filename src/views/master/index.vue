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
  height: 7.3rem;
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
  padding: 0 0.45rem;

  .professonal-title {
    color: #1185e4;
    position: relative;
    .title {
      font-size: 0.525rem;
      font-weight: bold;
    }
    .tips {
      font-size: 0.175rem;
    }
    &::before {
      content: '';
      position: absolute;

      width: 0.0625rem;
      height: 0.525rem;
    }
  }
}
</style>

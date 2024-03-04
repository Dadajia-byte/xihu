<template>
  <div>
    <div class="banner">
      <div class="title">参会指南</div>
      <div class="en">GUIDE</div>
    </div>
    <div class="content">
      <section class="section1">
        <div class="tag">大会场馆</div>
        <div class="scene-plan">
          <div :class="{scene:true,chosed:truePic}" @click="truePic=true">大会场景图</div>
          <div :class="{plan:true,chosed:!truePic}" @click="truePic=false;">大会平面图</div>
        </div>
        <div class="map">
          <img v-show="truePic" src="https://img2023.gcsis.cn/2023/4/42089a0585c7403191042decc029556f.jpeg" >
          <img v-show="!truePic" src="https://img2023.gcsis.cn/2023/5/ddd7d65178194490ae1f576865602b50.jpg" >
        </div>
      </section>
      <section class="section2">
        <div class="tag">大会交通</div>
        <div class="transport">
          <div class="routeMap"></div>
          <div class="route">
            <div class="route1">
              <div class="trangle">
                <span>1</span>
              </div>
              <div class="pos">杭州萧山国际机场——杭州洲际酒店</div>
              <div class="way">搭乘地铁7号线（吴山广场方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。</div>
              <div class="spend">路程25公里 时间约50分钟 车费60元左右。</div>
            </div>
            <div class="route2">
              <div class="trangle">
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let truePic = ref(true)
</script>
<script lang="ts">
export default {
  name: 'guide',
}


</script>
<style lang="scss" scoped>

body {
  background-color: #999999;
}
.banner {
  width: 100%;
  overflow: hidden;
  height: 7.5rem;
  background: blue;// 缺少背景图片
  .title {
    
    font-size: .625rem;
    margin-top: 2.75rem;
    font-weight: 600;
    margin-left: 2.25rem;
  }
  .en {
    font-weight: 300;
    font-size: .4rem;
    margin-top: .25rem;
    margin-left: 2.875rem;
  }
  
}
.content {
  .tag {
    padding-left: .1875rem;
    font-size: .475rem;
    @include linear-txt;
    line-height: .625rem;
    height: .625rem;
    border-left: .0375rem solid $theme-color-blue;
    margin-left: 2.25rem;
    margin-bottom: .25rem;

  }

  section[class^=section] {
    margin: 1.25rem;
  }

  .section1 {

    .scene-plan {
    display: flex;
    justify-content: center;

    .scene,
    .plan {
      margin: .125rem .25rem;
      color: #999999;
      transition: all .3s;
      cursor: pointer;
    }

    .chosed {
      @include linear-txt;
      scale: 1.2;
    }
  }

  .map {
    display: flex;
    justify-content: center;
    margin: .25rem 0;
    img {
    width: 15.5125rem;
    height: 8.85rem;
    }
  }
  }

  .section2 {
    .transport {
      display: flex;
      justify-content: center;

      .routeMap {
        margin: .25rem .375rem;
      }

      .route {
        .route1,
        .route2 {
          overflow: hidden;
          position: relative;
          width: 7.5rem;
          height: 4rem;
          margin: .375rem .5rem;
          background: white;
          box-shadow: 0 .0375rem .075rem rgba($color: #000000, $alpha: 0.15);
          text-align: center;
        .trangle {
          position: absolute;
          width: 1rem;
          height: .9375rem;
          background: linear-gradient(to top left, $theme-color-blue, $theme-color-green);
          clip-path: polygon(0 0,100% 0, 0 100%);
          color: white;
          font-weight: 400;
          span {
            position: absolute;
            top: 15%;
            left: 20%;
          }

          
        }
        .pos {
            font-size: .325rem;
            font-weight: 300;
            margin: .75rem auto;
          }
          .way {
            text-align: left;
            margin: .25rem auto;
            font-size: .225rem;
            font-weight: 300;
            width: 70%;
          }
          .spend {
            font-size: .225rem;
            font-weight: 300;
            width: 70%;
            text-align: left;
            margin: .625rem auto 0rem;
          }
        }
      }
    }
  }
}
</style>

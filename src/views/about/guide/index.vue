<template>
  <div>
    <div class="banner">
      <div class="title">参会指南</div>
      <div class="en">GUIDE</div>
    </div>
    <div class="content">
      <section class="section1">
        <div
          class="tag wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          大会场馆
        </div>
        <div class="scene-plan">
          <div
            :class="{ scene: true, chosed: truePic }"
            @click="truePic = true"
          >
            大会场景图
          </div>
          <div
            :class="{ plan: true, chosed: !truePic }"
            @click="truePic = false"
          >
            大会平面图
          </div>
        </div>
        <div class="map" v-fadeInUp>
          <img
            v-show="truePic"
            src="https://img2023.gcsis.cn/2023/4/42089a0585c7403191042decc029556f.jpeg"
          />
          <img
            v-show="!truePic"
            src="https://img2023.gcsis.cn/2023/5/ddd7d65178194490ae1f576865602b50.jpg"
          />
        </div>
      </section>
      <section class="section2">
        <div
          class="tag wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          大会交通
        </div>
        <div class="transport">
          <div class="routeMap wow fadeInLeft" data-wow-duration="1s">
            <div class="inner"></div>
          </div>
          <div class="route">
            <div
              class="route1 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div class="trangle">
                <span>1</span>
              </div>
              <div class="pos">杭州萧山国际机场——杭州洲际酒店</div>
              <div class="way">
                <div class="icon">
                  <svgIcon
                    name="subway"
                    color="#409eff"
                    style="width: 0.3125rem; height: 0.3125rem"
                  ></svgIcon>
                  <div>地铁</div>
                </div>

                <div class="way-txt">
                  搭乘地铁7号线（吴山广场方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。
                </div>
              </div>
              <div class="spend">
                <div class="icon">
                  <svgIcon
                    name="taxi"
                    color="#409eff"
                    style="width: 0.3125rem; height: 0.3125rem"
                  ></svgIcon>
                  <div>TAX</div>
                </div>
                <div class="way-txt">
                  路程25公里 时间约50分钟 车费60元左右。
                </div>
              </div>
            </div>
            <div
              class="route2 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div class="trangle">
                <span>2</span>
              </div>
              <div class="pos">杭州东站—杭州洲际酒店</div>
              <div class="way">
                <div class="icon">
                  <svgIcon
                    name="subway"
                    color="#409eff"
                    style="width: 0.3125rem; height: 0.3125rem"
                  ></svgIcon>
                  <div>地铁</div>
                </div>
                <div class="way-txt">
                  搭乘地铁4号线（浦沿方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。
                </div>
              </div>
              <div class="spend">
                <div class="icon">
                  <svgIcon
                    name="taxi"
                    color="#409eff"
                    style="width: 0.3125rem; height: 0.3125rem"
                  ></svgIcon>
                  <div>TAX</div>
                </div>
                <div class="way-txt">路程7公里 时长约20分钟 车费20元左右。</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section3">
        <div
          class="tag wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          酒店住宿
        </div>
        <div class="accom">
          <div class="map" v-fadeInUp></div>
          <el-card
            class="card_3 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div class="title_3">酒店住址及联系人</div>
            <div class="info">
              <div class="pos_3">杭州洲际酒店（上城区解放东路2号）</div>
              <div class="name_3">
                <span>俞佳亮 13958156639</span>
                <span>叶强斌 18110910493</span>
              </div>
            </div>
            <div class="info">
              <div class="pos_3">杭州瑞立江河汇酒店（上城区之江路1299号）</div>
              <div class="name_3">
                <span>李斌 13958164094</span>
                <span>周吉 18858102530</span>
              </div>
            </div>
            <div class="info">
              <div class="pos_3">杭州望湖宾馆（拱墅区环城西路2号）</div>
              <div class="name_3">
                <span>沈晶磊 15925684550</span>
                <span>丁佳 18957191215</span>
              </div>
            </div>
            <div class="info">
              <div class="pos_3">杭州中维歌德大酒店（上城区西湖大道19号）</div>
              <div class="name_3">
                <span>朱文斌 13588057345</span>
                <span>张黎 13456828796</span>
              </div>
            </div>
            <div class="info">
              <div class="pos_3">
                杭州滨奥皇冠假日酒店（滨江区科技馆街888号）
              </div>
              <div class="name_3">
                <span>王嘉敏 15061981851</span>
                <span>沈梦超 18367174066</span>
              </div>
            </div>
            <div class="info">
              <div class="pos_3">
                白马湖建国饭店（滨江区长江南路336号678幢）
              </div>
              <div class="name_3">
                <span>来玲玲 18072858687</span>
                <span>傅琦 13588886762</span>
              </div>
            </div>
          </el-card>
        </div>
      </section>
      <section class="section4">
        <div
          class="tag wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          大会签到
        </div>
        <div class="details" v-fadeInUp>
          <div class="detail">
            <div class="sign">签到位置</div>
            <div class="moredetail">杭州洲际酒店正门入口</div>
          </div>
          <div class="detail">
            <div class="sign">签到时间</div>
            <div class="moredetail">5月7日 上午 08:00-9:00 下午13:00-13:30</div>
            <div class="moredetail">5月8日 上午 08:00-9:00 下午13:00-13:30</div>
          </div>
          <div class="detail">
            <div class="sign">签到流程</div>
            <div class="moredetail">通过大会【短信】签到，领取大会胸卡</div>
          </div>
        </div>
        <div
          class="not wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div class="title_not">
            <svgIcon
              name="bell"
              color="#409eff"
              style="width: 0.5rem; height: 0.5rem"
            ></svgIcon>
            <span>温馨提示</span>
          </div>
          <ol>
            <li>1. 嘉宾自行领取个人参会胸卡，不代领</li>
            <li>2. 每位嘉宾专属码只有一次领证时效，不可重复领取</li>
            <li>3. 大会胸卡将作为参会期间唯一身份认证，遗失无补，请妥善保管</li>
            <li>4. 嘉宾在会议期间需全程佩戴</li>
          </ol>
        </div>
      </section>
      <section class="section5">
        <div
          class="tag wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          联系我们
        </div>
        <div>
          <el-card
            class="card wow slideInLeft"
            style="top: 4.5rem; left: 3.55rem; z-index: 222"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            <div class="name">
              <div class="name1">朱女士</div>
              <div class="name2">商务合作</div>
            </div>
            <div class="comm">
              <div class="phone">
                <Phone
                  color="#1185e4"
                  style="
                    width: 0.4375rem;
                    height: 0.4375rem;
                    margin-right: 0.25rem;
                  "
                />
                +86-15988310161
              </div>
              <div class="email">
                <Message
                  color="#1185e4"
                  style="
                    width: 0.4375rem;
                    height: 0.4375rem;
                    margin-right: 0.25rem;
                  "
                />
                yuki.zhu@dbappsecurity.com.cn
              </div>
            </div>
          </el-card>
          <el-card
            class="card wow slideInRight"
            style="top: 1.5rem; left: 11rem"
            data-wow-delay="0.1s"
            data-wow-duration="0.8s"
          >
            <div class="name">
              <div class="name1">薛女士</div>
              <div class="name2">会务咨询</div>
            </div>
            <div class="comm">
              <div class="phone">
                <Phone
                  color="#1185e4"
                  style="
                    width: 0.4375rem;
                    height: 0.4375rem;
                    margin-right: 0.25rem;
                  "
                />
                +86-13810244613
              </div>
              <div class="email">
                <Message
                  color="#1185e4"
                  style="
                    width: 0.4375rem;
                    height: 0.4375rem;
                    margin-right: 0.25rem;
                  "
                />
                mia.xue@dbappsecurity.com.cn
              </div>
            </div>
          </el-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WOW from 'wow.js'
let truePic = ref(true)
const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}
onMounted(() => {
  initWOW()
})
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
  background: url('/src/assets/images/bg_images/guide.png') no-repeat
    center/cover;
  .title {
    color: #fff;
    font-size: 0.625rem;
    margin-top: 2.75rem;
    font-weight: 600;
    margin-left: 2.25rem;
  }
  .en {
    color: #fff;

    font-weight: 300;
    font-size: 0.4rem;
    margin-top: 0.25rem;
    margin-left: 2.875rem;
  }
}
.content {
  .tag {
    padding-left: 0.1875rem;
    font-size: 0.475rem;
    @include linear-txt;
    line-height: 0.625rem;
    height: 0.625rem;
    border-left: 0.0375rem solid $theme-color-blue;
    margin-left: 2.25rem;
    margin-bottom: 0.25rem;
  }

  section[class^='section'] {
    margin: 1.25rem;
  }

  .section1 {
    .scene-plan {
      display: flex;
      justify-content: center;

      .scene,
      .plan {
        margin: 0.125rem 0.25rem;
        color: #999999;
        transition: all 0.3s;
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
      margin: 0.25rem 0;
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
        margin: 0.25rem 0.375rem;
        height: 10.0625rem;
        overflow-y: scroll;
        .inner {
          width: 9.375rem;
          height: 25rem;
          background:
            url(../../../assets/images/guide/guide_plan.png) no-repeat top left,
            url(../../../assets/images/guide/guide_plan2.png) no-repeat bottom
              left;
          background-size: 9.375rem;
        }
      }

      .route {
        .route1,
        .route2 {
          overflow: hidden;
          position: relative;
          width: 7.5rem;
          height: 4rem;
          margin: 0.625rem 0.5rem 1.125rem;
          background: white;
          box-shadow: 0 0.0375rem 0.075rem rgba($color: #000000, $alpha: 0.15);
          text-align: center;
          transition: all 0.3s;
          .trangle {
            position: absolute;
            width: 1rem;
            height: 0.9375rem;
            background: linear-gradient(
              to top left,
              $theme-color-blue,
              $theme-color-green
            );
            clip-path: polygon(0 0, 100% 0, 0 100%);
            color: white;
            font-weight: 400;
            span {
              position: absolute;
              top: 15%;
              left: 20%;
            }
          }
          .pos {
            font-size: 0.325rem;
            font-weight: 300;
            margin: 0.75rem auto;
          }
          .way,
          .spend {
            display: flex;
            align-items: center;
            margin: 0.25rem auto 0.5625rem;
            width: 85%;
            .icon {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 0.375rem;
              div {
                font-size: 0.15rem;
                font-weight: 300;
                @include linear-txt;
              }
            }
            .way-txt {
              line-height: 0.3rem;
              margin-left: 0.375rem;
              display: inline-block;
              text-align: left;
              font-size: 0.225rem;
              font-weight: 300;
            }
          }

          &:hover {
            scale: 1.1;
          }
        }
      }
    }
  }

  .section3 {
    .accom {
      display: flex;
      justify-content: center;
      .map {
        margin: 0.25rem 0.375rem;
        width: 9.375rem;
        height: 10rem;
        background: url(../../../assets/images/guide/map.png);
        background-size: cover;
      }
    }
    .card_3 {
      margin: 0.625rem;
      .title_3 {
        padding-left: 0.25rem;
        font-size: 0.375rem;
        font-weight: 300;
        border-left: 0.05rem solid #1185e4;
        line-height: 0.5625rem;
        margin: 0.375rem 0.25rem 0.25rem;
      }
      .info {
        margin: 0.625rem 0rem -0.1875rem;
        .pos_3 {
          font-size: 0.275rem;
          margin: 0.125rem;
          padding-left: 0.25rem;
          font-weight: 400;
          border-left: #1185e4 solid 0.025rem;
          line-height: 0.375rem;
        }

        .name_3 {
          font-size: 0.225rem;
          margin: 0.125rem;
          font-weight: 300;
          span {
            margin-left: 0.25rem;
          }
        }
      }
    }
  }

  .section4 {
    .details {
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: center;
      margin-top: 1rem;
      border-bottom: 0.025rem solid #eaebed;
      .detail {
        display: flex;
        flex-direction: column;
        width: 10rem;
        padding-left: 0.375rem;
        border-left: 0.025rem solid #eaebed;
        margin-bottom: 0.7rem;
        .sign {
          font-size: 0.325rem;
          margin-bottom: 0.25rem;
        }

        .moredetail {
          font-size: 0.25rem;
          font-weight: 300;
          margin: 0.1875rem 0rem;
        }

        &:nth-of-type(1) {
          border-left: none;
        }
      }
    }

    .not {
      overflow: hidden;
      width: 80%;
      margin: 0 auto;
      margin-top: 0.5rem;
      background-color: #edebeb;
      height: 4.375rem;
      border-radius: 0.1875rem;
      .title_not {
        font-size: 0.35rem;
        height: 0.625rem;
        line-height: 0.625rem;
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        margin-left: 0.625rem;
        span {
          display: inline-block;
          top: 50%;
        }
      }
      ol {
        margin-top: 0.5rem;
        margin-left: 0.75rem;
        li {
          line-height: 0.5rem;
          font-size: 0.3rem;
          font-weight: 300;
        }
      }
    }
  }

  .section5 {
    position: relative;
    height: 8rem;
    .card {
      position: absolute;
      width: 8.75rem;
      height: 4rem;
      background: url(../../../assets/images/guide/card_bg.jpg);
      background-size: cover;
      .name {
        display: flex;
        align-items: flex-end;
        font-weight: 300;
        margin: 0.375rem;
        .name1 {
          font-size: 0.375rem;
          font-weight: 400;
        }
        .name2 {
          margin-left: 0.125rem;
          font-size: 0.25rem;
        }
      }

      .comm {
        width: 5.625rem;
        margin: 1rem auto;
        .phone,
        .email {
          font-size: 0.25rem;
          margin: 0.375rem;
          display: flex;
          align-items: center;
        }
      }
      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
        z-index: 555;
      }
    }
  }
}
</style>

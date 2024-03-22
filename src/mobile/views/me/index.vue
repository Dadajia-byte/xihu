<template>
  <div class="container">
    <div class="top">
      <div class="user">
        <div class="avatar_bg">
          <div class="avatar">
            <el-icon color="#008fce">
              <Avatar />
            </el-icon>
          </div>
        </div>
        <div class="tag">游客</div>
      </div>
      <div class="point">
        积分：
        <span>0></span>
      </div>
      <div class="qiandao">
        <el-icon style="font-size: 5vw; padding-right: 1vw">
          <Calendar />
        </el-icon>
        每日签到
      </div>
    </div>
    <div class="bottom">
      <div class="card1">
        <div class="item">
          <svgIcon
            name="personmes"
            style="width: 10vw; height: 10vw; padding-bottom: 1vw"
          ></svgIcon>
          个人资料
        </div>
        <div class="item">
          <svgIcon
            name="postdown"
            style="width: 10vw; height: 10vw; padding-bottom: 1vw"
          ></svgIcon>
          海报下载
        </div>
      </div>
      <div class="card2">
        <div class="des">
          <div class="border"></div>
          <div class="des_title">我的订阅</div>
        </div>
        <div class="items">
          <div class="item">
            <svgIcon
              name="meetingsub"
              style="width: 10vw; height: 10vw; padding-bottom: 1vw"
            ></svgIcon>
            议程订阅
          </div>
          <div class="item">
            <svgIcon
              name="activity"
              style="width: 10vw; height: 10vw; padding-bottom: 1vw"
            ></svgIcon>
            精彩活动订阅
          </div>
        </div>
      </div>
      <div class="card3">
        <div class="des">
          <div class="border"></div>
          <div class="des_title">我的积分</div>
        </div>
        <div class="items">
          <div class="item">
            <svgIcon
              name="point"
              style="width: 10vw; height: 10vw; padding-bottom: 1vw"
            ></svgIcon>
            积分规则
          </div>
          <div class="item">
            <svgIcon
              name="duihuan"
              style="width: 10vw; height: 10vw; padding-bottom: 1vw"
            ></svgIcon>
            积分兑换
          </div>
          <div class="item">
            <svgIcon
              name="detail"
              style="width: 10vw; height: 10vw; padding-bottom: 1vw"
            ></svgIcon>
            积分明细
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  background-color: #f5f6f8;
  height: 100vh;
  font-size: 3.2vw;
  color: #474546;

  .top {
    height: 30%;
    display: flex;
    background: linear-gradient(to top right, #08d3e1, #004bc0);
    width: 100%;
    color: white;

    .user {
      scale: 0.9;
      position: relative;
      width: 18vw;
      height: 18vw;
      border-radius: 9vw;
      background-color: white;
      left: 5%;
      top: 20%;

      .avatar {
        position: absolute;
        width: 16vw;
        height: 16vw;
        border-radius: 8vw;
        background-color: #cbcdca; //这里放一张游客图片
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        overflow: hidden;

        .el-icon {
          position: absolute;
          font-size: 16vw;
          bottom: -2vw;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .tag {
        left: 50%;
        transform: translateX(-50%);
        background-color: #0768dd;
        width: 18vw;
        font-size: 3.5vw;
        height: 5vw;
        border-radius: 2.5vw;
        text-align: center;
        line-height: 6vw;
        position: absolute;
        bottom: -2.5vw;
      }
    }

    .point {
      font-size: 3.8vw;
      position: relative;
      top: 35%;
      left: 10%;

      span {
        font-size: 5vw;
      }
    }

    .qiandao {
      box-sizing: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 20%;
      left: 30%;
      font-size: 3.5vw;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10vw);
      border: solid 0.3vw white;
      height: 6vw;
      border-radius: 3vw;
      width: 28vw;
      text-align: center;
      line-height: 6vw;
    }
  }

  .bottom {
    div[class^='card'] {
      position: relative;
      top: -10vw;
      width: 90vw;
      height: 32vw;
      margin: 0 auto;
      background-color: white;
      margin-bottom: 5vw;
      border-radius: 2vw;
      box-shadow: 0.5vw 0.5vw 1vw 0.3vw rgba(0, 0, 0, 0.2);
    }

    .card1 {
      height: 25vw !important;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .item {
        display: flex;
        margin-top: 6vw;
        flex-direction: column;
        align-items: center;
        height: 80%;
        width: 30%;
      }
    }

    .card2,
    .card3 {
      overflow: hidden;

      .des {
        margin-top: 2vw;
        margin-left: 4vw;
        font-size: 4.5vw;
        color: black;
        width: 25vw;
        display: flex;
        align-items: center;
        height: 6vw;
        margin-bottom: 2vw;

        .border {
          height: 6vw;
          width: 0.6vw;
          background: linear-gradient(to bottom, #a8e5ea, #367db3);
        }

        .des_title {
          margin-left: 1vw;
        }
      }

      .items {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .item {
          margin-top: 3vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 80%;
          width: 30%;
        }
      }
    }
  }
}
</style>

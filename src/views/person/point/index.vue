<template>
  <el-card class="point-card">
    <div class="title">我的积分</div>
    <el-icon class="coin"><Coin /></el-icon>
    <div class="number">500</div>
    <div class="line"></div>
    <el-icon class="medal"><Trophy /></el-icon>
    <div class="subtitle1">积分奖励</div>
    <bigpointcard></bigpointcard>
    <el-icon class="down"><ArrowDown /></el-icon>
    <div class="more">查看更多</div>
    <div class="line"></div>
    <el-icon class="good"><Goods /></el-icon>
    <div class="subtitle2">积分商城</div>
    <bigshopcard></bigshopcard>
    <div class="line"></div>
    <el-icon class="memo"><Memo /></el-icon>
    <div class="subtitle3">积分规则说明</div>
    <div class="text">
      1.
      您所得积分可参与平台不定期开展的物品兑换活动，具体参见每次兑换活动说明；
      <br />
      2.
      用户所得积分仅可在活动期间内参与物品兑换活动，活动结束后将无法进行兑换，每个账号用户在活动期间仅能参与3次兑换，您不得通过直接或间接方式利用多个账号获取多次兑换机会；
      <br />
      3.
      您获取积分后将有机会获取奖品。请以网站所展示的展品为准（奖品先到先得，全部兑换完为止）
      <br />
      4.
      请您勿必知晓，您须按要求填写相关信息，如因用户原因导致无法配送或收货等后果由用户自行承担相关责任；同时，本活动奖品价值为市场参考价值，且您所收到奖品请以所发送的实物为准；
      <br />
      5.
      如您在积分领取及活动过程中存在违规行为（包括但不限于使用多个账号、使用辅助程序等非人为操作方式、利用平台技术漏洞和平台规则漏洞等作弊方式或他不合理方式参与本活动），平台有权取消、冻结您的积分并取消您参与活动的资格，没收相关奖励，情节严重的，平台有权封禁账号并追究用户违规责任；
      <br />
      6.
      如出现不可抗力或情势变更的情况（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办的），则平台可依相关法律法规的规定主张免责；
      <br />
      7.
      平台可以根据运营情况对积分规则进行变动或调整，相关变动或调整将公布在活动页面上，公布后依法生效；
      <br />
      8. 平台在法律允许的最大范围内对活动拥有解释权。
    </div>
  </el-card>
</template>

<script setup lang="ts">
import bigpointcard from './compoment/bigpointcard.vue'
import bigshopcard from './compoment/bigshopcard.vue'
</script>

<style scoped>
.point-card {
  width: 150%;
  display: flex;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  height: 21.25rem;
}
.title {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  margin-bottom: 0.125rem;
  font-size: 0.375rem;
  border-left: solid 0.05rem #1185e4;
  padding-left: 0.125rem;
}
.coin {
  margin-top: 0.0625rem;
  margin-left: 0.4375rem;
  font-size: 0.4375rem;
  color: #777777;
}
.number {
  margin-top: -0.475rem;
  margin-left: 0.9375rem;
  font-size: 0.4375rem;
  font-weight: bold;
}
.more {
  margin-top: -0.225rem;
  margin-left: 6.125rem;
  width: 0.75rem;
  font-size: 0.175rem;
  color: #1185e4;
}
.line {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  border: 0.0125rem solid #e3e5e7;
  width: 12.5rem;
}
.down {
  margin-top: .475rem;
  margin-left: 6.8375rem;
  font-size: 0.2rem;
  color: #1185e4;
}
.medal {
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  font-size: 0.4rem;
  color: #f8cd00;
}
.subtitle1 {
  margin-top: -0.4125rem;
  margin-left: 0.825rem;
  margin-bottom: 0.125rem;
  font-size: 0.35rem;
}
.subtitle2 {
  margin-top: -0.4125rem;
  margin-left: 0.825rem;
  margin-bottom: 0.125rem;
  font-size: 0.35rem;
}
.good {
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  font-size: 0.4rem;
  color: #ee8b06;
}
.memo {
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  font-size: 0.4rem;
  color: #1185e4;
}
.subtitle3 {
  margin-top: -0.4125rem;
  margin-left: 0.825rem;
  margin-bottom: 0.125rem;
  font-size: 0.35rem;
}
.text {
  margin-top: 0.325rem;
  margin-left: 0.3375rem;
  font-size: 0.2rem;
  color: #777777;
  width: 12.5rem;
  text-align: justify;
  line-height: 0.3rem;
}
</style>

<template>
  <el-card class="point-card">
    <!-- 我的积分模块 start -->
    <div class="box1">
      <div class="title">我的积分</div>
      <el-icon class="coin">
        <Coin />
      </el-icon>
      <div class="number">{{ userStore.userData.points }}</div>
    </div>
    <!-- 我的积分模块 end -->

    <div class="line"></div>

    <!-- 积分任务模块 start -->
    <div class="box2">
      <el-icon class="medal">
        <Trophy />
      </el-icon>
      <div class="subtitle1">积分奖励</div>

      <!-- 积分任务模块实现展开（1000px是动态高度，200px是初始固定高度） start -->
      <bigpointcard
        class="point-task"
        :style="{ maxHeight: TaskisExpand ? '12.5rem' : '2.5rem' }"
      ></bigpointcard>
      <div style="display: flex" v-show="!TaskisExpand" @click="taskExpand">
        <div class="more">查看更多</div>
        <el-icon class="down">
          <ArrowDown />
        </el-icon>
      </div>
      <!-- 积分任务模块实现展开 end -->

      <!-- 积分任务模块实现收起 start -->
      <div style="display: flex" v-show="TaskisExpand" @click="taskCollapse">
        <div class="less">收起</div>
        <el-icon class="up">
          <ArrowUp />
        </el-icon>
      </div>
      <!-- 积分任务模块实现收起 end -->
    </div>
    <!-- 积分任务模块 end -->

    <div class="line"></div>

    <!-- 积分商城模块 start -->
    <div class="box3">
      <el-icon class="good">
        <Goods />
      </el-icon>
      <div class="subtitle2">积分商城</div>

      <!-- 积分兑换模块实现展开（1000px是动态高度，650px是初始固定高度）start -->
      <bigshopcard
        class="shop"
        :style="{ maxHeight: ShopisExpand ? '12.5rem' : '8.125rem' }"
      ></bigshopcard>
      <div style="display: flex" v-show="!ShopisExpand" @click="shopExpand">
        <div class="more">查看更多</div>
        <el-icon class="down">
          <ArrowDown />
        </el-icon>
      </div>
      <!-- 积分兑换模块实现展开（1000px是动态高度，650px是初始固定高度）end -->

      <!-- 积分兑换模块实现收起 start -->
      <div style="display: flex" v-show="ShopisExpand" @click="shopCollapse">
        <div class="less">收起</div>
        <el-icon class="up">
          <ArrowUp />
        </el-icon>
      </div>
      <!-- 积分兑换模块实现收起 end -->
    </div>
    <!-- 积分商城模块 end -->

    <div class="line"></div>

    <!-- 无限滑动展示积分明细表 start -->
    <div class="box4">
      <el-icon class="notebook">
        <Notebook />
      </el-icon>
      <div class="subtitle3">积分明细</div>
      <el-table
        :data="tableData"
        stripe
        true
        :row-style="{ height: '0.625rem' }"
        class="table"
      >
        <el-table-column prop="time" label="" width="350%" />
        <el-table-column prop="action" label="" />
        <el-table-column prop="change" label="" />
      </el-table>
    </div>
    <!-- 无限滑动展示积分明细表 end -->

    <div class="line"></div>

    <!-- 静态不需要更改 -->
    <div class="box5">
      <el-icon class="memo">
        <Memo />
      </el-icon>
      <div class="subtitle4">积分规则说明</div>
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
    </div>
  </el-card>
</template>

<script setup lang="ts">
import bigpointcard from './compoment/bigpointcard.vue'
import bigshopcard from './compoment/bigshopcard.vue'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

import usePointStore from '@/store/modules/point'
const pointStore = usePointStore()

import { onMounted, ref } from 'vue'
let TaskisExpand = ref(false)
let ShopisExpand = ref(false)
const taskExpand = () => {
  TaskisExpand.value = true
}
const taskCollapse = () => {
  TaskisExpand.value = false
}
const shopExpand = () => {
  ShopisExpand.value = true
}
const shopCollapse = () => {
  ShopisExpand.value = false
}

// 积分明细表的数据
const tableData = [
  {
    time: '2024-02-22 14:36:46',
    action: '签到',
    change: '+100积分',
  },
  {
    time: '2024-02-21 22:48:21',
    action: '订阅',
    change: '+200积分',
  },
  {
    time: '2024-02-21 21:33:30',
    action: '订阅',
    change: '+200积分',
  },
  {
    time: '2024-02-21 21:33:24',
    action: '订阅',
    change: '+200积分',
  },
  {
    time: '2024-02-21 21:22:11',
    action: '订阅',
    change: '+200积分',
  },
  {
    time: '2024-02-18 11:19:43',
    action: '订阅',
    change: '+200积分',
  },
  {
    time: '2024-02-17 11:37:09',
    action: '订阅',
    change: '+200积分',
  },
  {
    time: '2024-02-16 20:50:53',
    action: '用户注册',
    change: '+100积分',
  },
]

onMounted(() => {
  pointStore.getUserPointHistory()
  console.log('积分明细：', pointStore.userPointHistory)
})
</script>

<style scoped>
.point-card {
  width: 150%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  min-height: 21.25rem;
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
.point-task,
.shop {
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.more,
.less {
  margin-left: 6.125rem;
  width: 0.75rem;
  font-size: 0.175rem;
  cursor: pointer;
  color: #1185e4;

  &.less {
    margin-left: 6.375rem;
  }
}
.line {
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  border: 0.0125rem solid #e3e5e7;
  width: 12.5rem;
}
.down,
.up {
  margin-left: -0.025rem;
  font-size: 0.2rem;
  color: #1185e4;
  cursor: pointer;

  &.up {
    margin-top: -0.025rem;
    margin-left: -0.375rem;
  }
}

.subtitle1,
.subtitle2,
.subtitle3,
.subtitle4 {
  margin-top: -0.4125rem;
  margin-left: 0.825rem;
  margin-bottom: 0.125rem;
  font-size: 0.35rem;
}

.medal,
.good,
.notebook,
.memo {
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
  font-size: 0.4rem;
  color: #ee8b06;

  &.medal {
    color: #f8cd00;
  }
  &.notebook {
    color: #12b899;
  }
  &.memo {
    color: #1185e4;
  }
}
.table {
  width: 95%;
  margin: auto;
  display: auto;
  height: 4.375rem;
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

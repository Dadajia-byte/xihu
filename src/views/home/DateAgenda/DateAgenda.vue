<template>
  <div class="date-agenda">
    <span class="divider wow fadeInUp">
      <div class="content">
        <span style="font-size: 0.8125rem" class="head">A</span>
        <div class="content2">genda 大会议程</div>
      </div>
    </span>
    <el-card
      class="timeline-container wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.1s"
      style="background-color: transparent; box-shadow: none; border: none"
    >
      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="setActive(index, item)"
        >
          <div
            class="timeline-content"
            :style="
              index === activeIndex
                ? 'background:linear-gradient(to right, #457fca, #48c6ef);'
                : 'background-color:#fff'
            "
          >
            <div
              class="day"
              :style="index === activeIndex ? 'color:#fff;' : 'color: #1185e4;'"
            >
              {{ item.date }}
            </div>
            <div
              class="date"
              :style="index === activeIndex ? 'color:#fff;' : 'color: #666;'"
            >
              {{ item.day }}
            </div>
          </div>
          <div class="arrow-down" v-show="index === activeIndex"></div>
        </div>
      </div>
      <div
        class="box-card"
        style="width: 13.5714rem; height: 1.2857rem"
        v-for="(item, index) in meetingStore.agendaItems"
        :key="index"
      >
        <div class="item1">
          <div>
            {{
              `${item.startTime.slice(11, 16)}-${item.endTime.slice(11, 16)}`
            }}
          </div>
          <div class="location">
            <svgIcon
              name="location"
              style="width: 0.1429rem; height: 0.1429rem"
            ></svgIcon>
            {{ item.location }}
          </div>
        </div>
        <div class="item2">
          <span>{{ item.title }}</span>
        </div>
        <div class="item3">
          <el-button
            icon="Plus"
            type="primary"
            v-show="item.isSub == 0"
            style="
              width: 1.4286rem;
              height: 0.4714rem;
              font-size: 0.2571rem;
              background: linear-gradient(to right, #457fca, #48c6ef);
            "
            @click="goSub(item.id)"
          >
            订阅
          </el-button>
          <div
            class="subbed"
            v-show="item.isSub == 1"
            @click="cancelSub(item.id)"
          >
            已订阅
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import useMeetingStore from '@/store/modules/meeting'
import { ElMessage } from 'element-plus'
import WOW from 'wow.js'

let meetingStore = useMeetingStore()
const items = ref([
  { date: 'Day 1', day: '5月5日' },
  { date: 'Day 2', day: '5月6日' },
  { date: 'Day 3', day: '5月7日' },
  { date: 'Day 4', day: '5月8日' },
])

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}

const activeIndex = ref(0)

const setActive = async (index: number, item: any) => {
  activeIndex.value = index
  meetingStore.reqData.date = item.day
  await meetingStore.getAgenda()
}

const goSub = async (id: number) => {
  console.log(id)
  await meetingStore
    .subAgenda(id)
    .then(() => {
      nextTick(async () => {
        // 重新请求数据
        await meetingStore.getAgenda()
      })
      ElMessage({
        message: '订阅成功',
        type: 'success',
      })
    })
    .catch((res) => {
      console.log(res)
      ElMessage({
        message: res.message,
        type: 'error',
      })
    })
}
const cancelSub = async (id: number) => {
  await meetingStore.cancelAgenda(id)
  nextTick(async () => {
    await meetingStore.getAgenda()
    ElMessage({
      message: '取消订阅成功',
      type: 'success',
    })
  })
}
onMounted(async () => {
  console.log('我是请求数据函数，我应该在登录之后')
  initWOW()
  meetingStore.reqData.date = '5月5日'
  await meetingStore.getAgenda()
})

/* 静态样式相关的代码 */
</script>

<style scoped lang="scss">
.divider {
  overflow: hidden;
  height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 0.5786rem;
  margin: 0.5714rem auto;
  font-weight: 700;
  font-family: sybold;
  position: relative;
  .content {
    position: absolute;
    display: flex;
    align-items: end;
    height: 0.8125rem;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    .content2 {
      @include linear-txt;
      line-height: 0.875rem;
    }
  }

  .head {
    position: relative;
    color: #457fca;
    padding-bottom: 0.1125rem;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.125rem;
      height: 0.125rem;
      width: 0.75rem;
      border-radius: 0.25rem;
      background: linear-gradient(
        to bottom right,
        $theme-color-blue,
        $theme-color-green
      );
    }
  }
}

.timeline-container {
  position: relative;
  width: 15.5143rem;
  margin: 0 auto;

  .arrow-down {
    transition:
      bottom 0.3s,
      opacity 0.3s;
    /* Start a bit lower */
    bottom: 0rem;
    opacity: 0;
    /* Start faded out */
  }

  .timeline-item.active .arrow-down {
    opacity: 1;
    /* Fade in */
  }

  .timeline {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 100%;
      height: 0.0286rem;
      background-color: #1185e4;
      z-index: 1;
    }

    .timeline-item {
      text-align: center;
      position: relative;
      z-index: 2;
      height: 1.5714rem;

      &.active {
        .arrow-down {
          content: '';
          position: absolute; // Adjust as per arrow size
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 0.2857rem solid transparent;
          border-right: 0.2857rem solid transparent;
          border-top: 0.3571rem solid #457fca; // Arrow color
        }
      }

      .timeline-content {
        display: inline-block;
        width: 2.0893rem;
        padding: 0.0714rem 0.1429rem;
        border-radius: 0.0643rem;
        box-shadow: 0 0.0286rem 0.0571rem rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        .date {
          font-size: 0.2571rem;
          padding: 0.0714rem 0.0286rem;
        }

        .day {
          font-size: 0.3429rem;
          font-weight: bold;
          padding: 0.0714rem 0.0286rem;
        }
      }
    }
  }

  .box-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    box-shadow: 0rem 0.0429rem 0.0857rem rgba(0, 0, 0, 0.15);
    border-radius: 0.0714rem;
    margin: 0.1429rem auto 0.2857rem;
    .location {
      padding-left: 0.125rem;
      display: flex;
    }
    .item1 {
      flex: 3;

      div {
        margin-left: 0.3571rem;

        &:nth-child(1) {
          padding-left: 0.1rem;
          font-size: 0.3714rem;
          font-weight: 700;
          border-left: #1185e4 solid 0.0429rem;
        }

        &:nth-child(2) {
          padding-top: 0.1143rem;
          text-align: center;
          font-size: 0.1429rem;
          color: black;
        }
      }
    }

    .item2 {
      flex: 7;

      span {
        display: inline-block;
        margin-left: 0.5714rem;
        height: 0.5714rem;
        line-height: 0.5714rem;
        padding: 0rem 0.3571rem 0rem 0.2143rem;
        font-size: 0.3714rem;
        font-weight: 700;
        background: linear-gradient(to right, #84bded, #fafafa);
        border-radius: 0.2857rem;
      }
    }

    .item3 {
      flex: 2;
      justify-self: right;

      .subbed {
        width: 1.4286rem;
        height: 0.4714rem;
        line-height: 0.4143rem;
        text-align: center;
        border-radius: 0.0714rem;
        border: #fafafa 0.0286rem solid;
      }
    }
  }
}
</style>

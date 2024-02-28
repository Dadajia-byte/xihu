<template>
  <div class="date-agenda">
    <span class="divider">大会议程</span>
    <el-card class="timeline-container">
      <div class="timeline">
        <div class="timeline-item" v-for="(item, index) in items" :key="index" :class="{ active: index === activeIndex }"
          @click="setActive(index, item)">
          <div class="timeline-content" :style="index === activeIndex
            ? 'background-color:#1185e4;'
            : 'background-color:#fff'
            ">
            <div class="day" :style="index === activeIndex ? 'color:#fff;' : 'color: #1185e4;'">
              {{ item.date }}
            </div>
            <div class="date" :style="index === activeIndex ? 'color:#fff;' : 'color: #666;'">
              {{ item.day }}
            </div>
          </div>
          <div class="arrow-down" v-show="index === activeIndex"></div>
        </div>
      </div>
      <div class="box-card" style="width: 950px; height: 90px" v-for="item in meetingStore.agendaItems">
        <div class="item1">
          <div>
            {{
              `${item.startTime.slice(11, 16)}-${item.endTime.slice(11, 16)}`
            }}
          </div>
          <div>{{ item.location }}</div>
        </div>
        <div class="item2">
          <span>{{ item.title }}</span>
        </div>
        <div class="item3">
          <el-button icon="Plus" type="primary" v-show="item.isSub == 0"
            style="width: 100px; height: 33px; font-size: 18px" @click="goSub(item.id)">
            订阅
          </el-button>
          <div class="subbed" v-show="item.isSub == 1" @click="cancelSub(item.id)">
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
let meetingStore = useMeetingStore()
const items = ref([
  { date: 'Day 1', day: '5月5日' },
  { date: 'Day 2', day: '5月6日' },
  { date: 'Day 3', day: '5月7日' },
  { date: 'Day 4', day: '5月8日' },
])

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

  meetingStore.reqData.date = '5月5日'
  await meetingStore.getAgenda()
})

/* 静态样式相关的代码 */

</script>

<style scoped lang="scss">
.divider {
  display: flex;
  width: 280px;
  align-items: center;
  text-align: center;
  color: #1185e4;
  font-size: 30px;
  margin: 40px auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 3px solid #1185e4;
    margin: 0 10px;
  }
}

.timeline-container {
  position: relative;
  width: 1086px;
  margin: 0 auto;

  .arrow-down {
    transition:
      bottom 0.3s,
      opacity 0.3s;
    /* Start a bit lower */
    bottom: 0px;
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
      height: 2px;
      background-color: #1185e4;
      z-index: 1;
    }

    .timeline-item {
      text-align: center;
      position: relative;
      z-index: 2;
      height: 110px;

      &.active {
        .arrow-down {
          content: '';
          position: absolute; // Adjust as per arrow size
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-top: 25px solid #1185e4; // Arrow color
        }
      }

      .timeline-content {
        display: inline-block;
        width: 120px;
        padding: 5px 10px;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        .date {
          font-size: 18px;
          padding: 5px 2px;
        }

        .day {
          font-size: 24px;
          font-weight: bold;
          padding: 5px 2px;
        }
      }
    }
  }

  .box-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 10px auto 20px;

    .item1 {
      flex: 3;

      div {
        margin-left: 25px;

        &:nth-child(1) {
          padding-left: 7px;
          font-size: 26px;
          font-weight: 700;
          border-left: #1185e4 solid 3px;
        }

        &:nth-child(2) {
          padding-top: 8px;
          text-align: center;
          font-size: 10px;
          color: black;
        }
      }
    }

    .item2 {
      flex: 7;

      span {
        display: inline-block;
        margin-left: 40px;
        height: 40px;
        line-height: 40px;
        padding: 0px 25px 0px 15px;
        font-size: 26px;
        font-weight: 700;
        background: linear-gradient(to right, #84bded, #fafafa);
        border-radius: 20px;
      }
    }

    .item3 {
      flex: 2;
      justify-self: right;

      .subbed {
        width: 100px;
        height: 33px;
        line-height: 29px;
        text-align: center;
        border-radius: 5px;
        border: #fafafa 2px solid;
      }
    }
  }
}
</style>

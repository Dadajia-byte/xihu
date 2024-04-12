<!-- <template>
  <div class="agenda-page">
    <Screen></Screen>
    <div class="filter-container">
      <div class="filter-main">
        <div class="all" :class="{ active: mainIndex === 1 }">全部议程</div>
      </div>
      <div class="filter-date">
        <div
          class="filteritem"
          v-for="(item, index) in dateList"
          :key="index"
          :class="{ active: index === activeDateIndex }"
          @click="setDateActive(index, item)"
          :style="
            index === activeDateIndex
              ? 'background-color:#79C3FF;'
              : 'background-color:#EDEBEB'
          "
        >
          {{ item.date }}
        </div>
      </div>
      <div class="filter-type">
        <div
          class="filteritem"
          v-for="(item, index) in typeList"
          :key="index"
          :class="{ active: index === activeTypeIndex }"
          @click="setTypeActive(index, item)"
          :style="
            index === activeTypeIndex
              ? 'background-color:#79C3FF;'
              : 'background-color:#EDEBEB'
          "
        >
          {{ item.type }}
        </div>
      </div>
    </div>

    <div class="agendalist-container" v-show="meetingStore.reqData.date === ''">
      <div
        class="agenda-content wow fadeInUp"
        v-for="(dateItem, index) in filteredAgendas"
        :key="index"
      >
        <div class="content-item">
          <div class="date">
            <span>{{ dateItem.date }}</span>
          </div>
          <div
            class="cardcontainer"
            v-for="(events, index) in dateItem.events"
            :key="index"
          >
            <el-card body-style="display:flex;">
              <div class="part1">
                <div style="display: flex">
                  <div class="time">
                    {{
                      `${events.startTime.slice(11, 16)}-${events.endTime.slice(11, 16)}`
                    }}
                  </div>
                  <div class="link">
                    <span>
                      <el-icon>
                        <ChatDotSquare />
                      </el-icon>
                      {{ events.activityType }}
                    </span>
                  </div>
                  <div class="link">
                    <span>
                      <el-icon>
                        <VideoCamera />
                      </el-icon>
                      回放
                    </span>
                  </div>
                </div>

                <div class="location">
                  <el-icon>
                    <Location />
                  </el-icon>
                  {{ events.location }}
                </div>
              </div>

              <div class="part2">
                <div class="title">
                  <span>{{ events.title }}</span>
                </div>
              </div>
              <div class="part3">
                <el-button icon="Plus" type="primary">订阅</el-button>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>

    <div class="agendalist-container" v-show="meetingStore.reqData.date !== ''">
      <div class="agenda-content">
        <div class="content-item">
          <div class="date" v-show="meetingStore.agendaItems?.length > 0">
            <span>{{ meetingStore.reqData.date }}</span>
          </div>
          <div
            class="cardcontainer"
            v-for="(item, index) in meetingStore.agendaItems"
            :key="index"
          >
            <el-card body-style="display:flex;">
              <div class="part1">
                <div style="display: flex">
                  <div class="time">
                    {{
                      `${item.startTime.slice(11, 16)}-${item.endTime.slice(11, 16)}`
                    }}
                  </div>
                  <div class="link">
                    <span>
                      <el-icon>
                        <ChatDotSquare />
                      </el-icon>
                      {{ item.activityType }}
                    </span>
                  </div>
                  <div class="link">
                    <span>
                      <el-icon>
                        <VideoCamera />
                      </el-icon>
                      回放
                    </span>
                  </div>
                </div>

                <div class="location">
                  <el-icon>
                    <Location />
                  </el-icon>
                  {{ item.location }}
                </div>
              </div>

              <div class="part2">
                <div class="title">
                  <span>{{ item.title }}</span>
                </div>
              </div>
              <div class="part3">
                <el-button
                  icon="Plus"
                  type="primary"
                  v-show="item.isSub == 0"
                  style="
                    width: 1.4286rem;
                    height: 0.4714rem;
                    font-size: 0.2571rem;
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
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, nextTick } from 'vue'
import Screen from './components/Screen.vue'
// @ts-ignore
import WOW from 'wow.js'
import useMeetingStore from '@/store/modules/meeting'
import { ElMessage } from 'element-plus'
import { agendaItem } from '@/api/meeting/type'

let meetingStore = useMeetingStore()

const dateList = ref([
  { date: '全部' },
  { date: '5月5日' },
  { date: '5月6日' },
  { date: '5月7日' },
  { date: '5月8日' },
])
const dates = ref([
  { date: '5月5日', show: 0, findFlag: '05-05' },
  { date: '5月6日', show: 0, findFlag: '05-06' },
  { date: '5月7日', show: 0, findFlag: '05-07' },
  { date: '5月8日', show: 0, findFlag: '05-08' },
])
const typeList = ref([
  { type: '全部' },
  { type: '主论坛' },
  { type: '平行论坛' },
  { type: '科普论坛' },
  { type: '掌上论剑' },
  { type: '生态合作论坛' },
])

const activeTypeIndex = ref(0)
const activeDateIndex = ref(0)
const mainIndex = ref(1) //1为全部议程 -1为我的议程


const setTypeActive = async (index: number, item: any) => {
  activeTypeIndex.value = index
  meetingStore.reqData.type = item.type === '全部' ? '' : item.type
  await meetingStore.getAgenda()
}
const setDateActive = async (index: number, item: any) => {
  activeDateIndex.value = index
  meetingStore.reqData.date = item.date === '全部' ? '' : item.date
  await meetingStore.getAgenda()
}

const initAgenda = async () => {
  meetingStore.reqData.date = ''
  meetingStore.reqData.type = ''
  meetingStore.reqData.num = -1
  await meetingStore.getAgenda()
}

const filteredAgendas = computed(() => {
  return dates.value
    .map((dateItem: { findFlag: string }) => {
      // 根据 dateItem.findFlag 过滤议程
      const eventsForDate = meetingStore.agendaItems?.filter((event: any) =>
        event.startTime.includes(dateItem.findFlag),
      )
      return {
        ...dateItem,
        events: eventsForDate,
      }
    })
    ?.filter((item: any) => item.events?.length > 0) // 过滤掉没有议程的日期
})

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
    .catch((res: any) => {
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

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}

onMounted(async () => {
  initWOW()

  await initAgenda()
  console.log(filteredAgendas)
})

onUnmounted(() => {
  meetingStore.reqData.num = 4
  meetingStore.reqData.date = ''
  meetingStore.reqData.type = ''
})
</script>

<style scoped lang="scss">
.agenda-page {
  width: 100%;

  .filter-container {
    margin: 0 auto;
    width: 17.1563rem;
    padding: 0.5313rem 0 0.875rem;

    .filter-main {
      display: flex;
      width: 17.1563rem;
      box-shadow: 0.0125rem 0.0625rem 0.0625rem #d5d5d5;

      .all,
      .admin {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 0.9219rem;
        font-size: 0.3125rem;
        line-height: 0.9219rem;
        text-align: center;
        font-weight: bold;
      }
    }

    .filter-date {
      margin: 0.5rem 0;
      display: flex;
    }

    .filter-type {
      display: flex;
    }

    .filteritem {
      cursor: pointer;
      display: flex;
      justify-content: center;
      width: 2.1719rem;
      height: 0.6094rem;
      margin-right: 0.4219rem;
      font-size: 0.25rem;
      line-height: 0.6094rem;
    }
  }

  .agenda-content {
    margin: 0 auto;
    width: 17.1563rem;

    .card-container {
      &:hover {
        transition: transform ease-in-out 0.5s;
        transform: scale(1.2);
      }
    }

    .date {
      font-size: 0.4375rem;
      line-height: 0.6094rem;
      position: relative;
      font-style: oblique;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.0781rem;
        width: 100%;
        height: 0.0781rem;
        background-color: #1185e4;
      }
    }

    .part1 {
      flex: 2.5;

      .time {
        font-size: 0.4063rem;
        font-weight: bold;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: -0.1563rem;
          top: 0;
          height: 0.4063rem;
          width: 0.0781rem;
          background-color: #1185e4;
        }
      }

      .location {
        font-size: 0.1875rem;
        line-height: 0.5625rem;
      }

      .link {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 0.1719rem;
        line-height: 0.3125rem;
        text-align: end;
        margin-left: 0.2188rem;

        span {
          color: #1185e4;
        }
      }
    }

    .part2 {
      flex: 4;

      span {
        display: inline-block;
        height: 0.7143rem;
        line-height: 0.7143rem;
        padding: 0rem 0.4464rem 0rem 0.2679rem;
        font-size: 0.4063rem;
        font-weight: 700;
        background: linear-gradient(to right, #84bded, #fafafa);
        border-radius: 0.3571rem;
      }
    }

    .part3 {
      flex: 2;
      display: flex;
      justify-items: end;

      .subbed {
        width: 1.4286rem;
        height: 0.4714rem;
        line-height: 0.4143rem;
        text-align: center;
        border-radius: 0.0714rem;
        border: #fafafa 0.0286 rem solid;
      }
    }

    .el-card {
      margin: 0.4rem 0;
    }
  }

  .active {
    background-color: #79c3ff;
    color: #fff;
    font-weight: bold;
  }
}
</style> -->

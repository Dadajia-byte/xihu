<template>
  <div class="agenda-page">
    <Screen @updateType="handleUpdate"></Screen>

    <div class="filter-container">
      <div class="date-container">
        <div class="tip">大会日期：</div>
        <div
          class="date"
          v-for="(item, index) in dateList"
          :key="index"
          :class="{ active: index === activeDateIndex }"
          @click="setDateActive(index, item)"
        >
          {{ item.date }}
        </div>
      </div>
    </div>

    <div class="agenda">
      <div class="agenda-container" v-show="meetingStore.reqData.date === ''">
        <div
          class="agenda-wrapper"
          v-for="(dateItem, index) in filteredAgendas"
          :key="index"
        >
          <div class="date wow fadeInUp">
            <span>{{ dateItem.date }}</span>
          </div>
          <div class="card-container">
            <div
              class="card wow fadeInUp"
              v-for="(events, index) in dateItem.events"
              :key="index"
            >
              <div class="card-wrapper">
                <div class="header">
                  <div class="timer">
                    <el-icon>
                      <Clock />
                    </el-icon>
                    {{
                      `${events.startTime.slice(11, 16)}-${events.endTime.slice(11, 16)}`
                    }}
                  </div>
                  <div class="link-wrapper">
                    <div class="link">
                      <el-icon>
                        <ChatDotSquare />
                      </el-icon>
                      {{ events.activityType }}
                    </div>
                    <div class="link">
                      <el-icon>
                        <VideoCamera />
                      </el-icon>
                      回放
                    </div>
                  </div>
                </div>
                <div class="title">
                  {{ events.title }}
                </div>
                <div class="content">
                  <div class="location">
                    <el-icon>
                      <Location />
                    </el-icon>
                    地点:{{ events.location }}
                  </div>
                </div>
                <div class="footer">
                  <div class="type">
                    {{ events.activityType }}
                  </div>
                  <div class="sub">
                    <el-button
                      icon="Plus"
                      type="primary"
                      style="
                        line-height: 0.3125rem;
                        font-size: 0.2rem;
                        height: 0.3125rem;
                        background: linear-gradient(to right, #457fca, #48c6ef);
                      "
                    >
                      订阅
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="agenda-container" v-show="meetingStore.reqData.date !== ''">
        <div class="agenda-wrapper">
          <div
            class="date wow fadeInUp"
            v-show="meetingStore.agendaItems?.length > 0"
          >
            <span>{{ meetingStore.reqData.date }}</span>
          </div>
          <div class="card-container">
            <div
              class="card wow fadeInUp"
              v-for="(events, index) in meetingStore.agendaItems"
              :key="index"
            >
              <div class="card-wrapper">
                <div class="header">
                  <div class="timer">
                    <el-icon>
                      <Clock />
                    </el-icon>
                    {{
                      `${events.startTime.slice(11, 16)}-${events.endTime.slice(11, 16)}`
                    }}
                  </div>
                  <div class="link-wrapper">
                    <div class="link">
                      <el-icon>
                        <ChatDotSquare />
                      </el-icon>
                      {{ events.activityType }}
                    </div>
                    <div class="link">
                      <el-icon>
                        <VideoCamera />
                      </el-icon>
                      回放
                    </div>
                  </div>
                </div>

                <div class="title">
                  {{ events.title }}
                </div>
                <div class="content">
                  <div class="location">
                    <el-icon>
                      <Location />
                    </el-icon>
                    地点:{{ events.location }}
                  </div>
                </div>
                <div class="footer">
                  <div class="type">
                    {{ events.activityType }}
                  </div>
                  <div class="sub">
                    <el-button
                      icon="Plus"
                      type="primary"
                      style="
                        line-height: 0.3125rem;
                        font-size: 0.2rem;
                        height: 0.3125rem;
                        background: linear-gradient(
                          to bottom right,
                          #457fca,
                          #48c6ef
                        );
                      "
                    >
                      订阅
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="type-filter">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ activeType }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in typeList"
                :key="index"
                @click="setTypeActive(index, item)"
              >
                {{ item.type }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import Screen from './components/Screen.vue'
// @ts-ignore
import WOW from 'wow.js'
import useMeetingStore from '@/store/modules/meeting'
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
// @ts-ignore
const filteredAgenda = ref<agendaItem[]>([])
const activeType = ref('全部')
// @ts-ignore
interface ss {
  date: string
  show: number
  findFlag: string
  events: agendaItem[]
}
const handleUpdate = (newValue: number) => {
  meetingStore.reqData.type = typeList.value[newValue + 1].type
  activeType.value = typeList.value[newValue + 1].type
  meetingStore.getAgenda()
}
const setTypeActive = async (index: number, item: any) => {
  activeTypeIndex.value = index
  activeType.value = item.type
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
    .map((dateItem) => {
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
.filter-container {
  width: 100%;
  height: 1.5rem;
  box-shadow: 0.0125rem 0.0625rem 0.0625rem #d5d5d5;
  padding: 0.375rem 0 0.375rem 1.8125rem;

  .date-container {
    display: flex;
    align-content: center;

    .tip {
      font-size: 0.3125rem;
      font-weight: bold;
      line-height: 0.875rem;
      width: 1.875rem;
      margin-right: 0.675rem;
    }

    .date {
      font-size: 0.275rem;
      line-height: 0.625rem;
      margin: 0.125rem 0;
      margin-right: 0.675rem;
      width: 2.25rem;
      border-radius: 0.875rem;
      border: 0.0125rem solid #d5d5d5;
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
    }

    .active {
      background: linear-gradient(
        to bottom right,
        $theme-color-blue,
        $theme-color-green
      );
      color: #fff;
      font-weight: bold;
    }
  }
}

.agenda {
  display: flex;
  width: 100%;
  justify-content: center;
  .type-filter {
    margin-left: 0.5rem;
    margin-top: 0.6875rem;
    height: 0.5875rem;
    width: 4.45rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.375rem;
    border-radius: 0.5875rem;
    border: 0.0125rem solid #d5d5d5;
    background: #fff;
    cursor: pointer;

    .el-dropdown-link {
      padding-left: 0.1875rem;
      width: 4.45rem;
      font-size: 0.25rem;
      line-height: 0.5875rem;
    }
    .el-dropdown-menu__item {
      font-size: 0.25rem;
    }
  }
}

.agenda-container {
  margin: 0.375rem 0 0.375rem 1.8125rem;
  width: 14.1375rem;
  display: flex;
  flex-wrap: wrap;

  .date {
    margin-top: 0.3125rem;
    font-size: 0.4375rem;
    line-height: 0.6094rem;
    position: relative;
    font-style: oblique;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.0781rem;
      width: 14.1375rem;
      height: 0.0781rem;
      background: linear-gradient(to right, #457fca, #48c6ef);
    }
  }

  .card-container {
    margin-top: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    width: 14.325rem;

    .card {
      position: relative;
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0.4125rem;
        left: 0.1rem;
        width: 4.4rem;
        height: 3rem;
        border-radius: 0.0625rem;
        background: #d5d5d5;
        transition: background-color 0.3s;
        z-index: 1;
      }

      &:hover::after {
        background: linear-gradient(to right, #457fca, #48c6ef);
      }

      .card-wrapper {
        margin-top: 0.3125rem;
        margin-right: 0.375rem;
        padding: 0.3375rem 0.1875rem;
        width: 4.4rem;
        height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        border-radius: 0.0625rem;
        background: #fff;
        z-index: 2;

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

        .header {
          display: flex;
          justify-content: space-between;
          font-size: 0.2rem;
          height: 0.3125rem;

          .timer {
            line-height: 0.3125rem;
            display: flex;
            align-items: center;
          }

          .link-wrapper {
            display: flex;
          }

          .link {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-right: 0.2rem;
            line-height: 0.3125rem;
            color: #1185e4;
          }
        }

        .title {
          margin-top: 0.15rem;
          font-size: 0.3125rem;
          font-weight: bold;
          line-height: 0.4375rem;
        }

        .content {
          margin-top: 0.15rem;
          font-size: 0.2rem;

          .location {
            display: flex;
            align-items: center;
          }
        }

        .footer {
          margin-top: 0.3625rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.25rem;
          text-align: center;
          height: 0.375rem;

          .type {
            font-size: 0.2rem;
            width: 1.35rem;
            display: flex;
            justify-content: center;
            line-height: 0.375rem;
            border-radius: 0.375rem;
            border: 0.0125rem solid #d5d5d5;
          }
        }
      }
    }
  }
}
</style>

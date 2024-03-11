<template>
  <div class="agenda-page">
    <Screen></Screen>
    <div class="filter-container">
      <div class="filter-main">
        <div
          class="all"
          :class="{ active: mainIndex === 1 }"
          @click="setMainActive"
        >
          全部议程
        </div>
        <div
          class="admin"
          :class="{ active: mainIndex === -1 }"
          @click="setMainActive"
        >
          我的日程
        </div>
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
        class="agenda-content"
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
          <div class="date">
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
                <el-button icon="Plus" type="primary">订阅</el-button>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, onBeforeMount } from 'vue'
import Screen from './components/Screen.vue'
// @ts-ignore
import WOW from 'wow.js'
import useMeetingStore from '@/store/modules/meeting'

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

const filteredAgenda = ref([])

const filterAgendaItem = (dateItem: any) => {
  filteredAgenda.value = meetingStore.agendaItems?.filter((item) => {
    item.startTime.includes(dateItem.findFlag)
  })
  return filteredAgenda.value
}

const setMainActive = () => {
  mainIndex.value = -mainIndex.value
}
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
      const eventsForDate = meetingStore.agendaItems?.filter((event) =>
        event.startTime.includes(dateItem.findFlag),
      )
      return {
        ...dateItem,
        events: eventsForDate,
      }
    })
    ?.filter((item) => item.events?.length > 0) // 过滤掉没有议程的日期
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
})
</script>

<style scoped lang="scss">
.agenda-page {
  width: 100%;

  // .agenda-list {
  //   width: 100%;
  //   padding: 1rem;

  //   .title {
  //     width: 100%;
  //     text-align: center;
  //     font-size: 0.5rem;
  //     @include linear-txt;
  //   }

  //   .title-re {
  //     margin: 0.1067rem 0;
  //     @include linear-txt;
  //     text-align: center;
  //     line-height: 1.4;
  //     font-size: 0.1967rem;
  //   }

  //   .agenda-content {
  //     width: fit-content;
  //     min-height: 70vh;
  //     margin-top: 1.2333rem;
  //     margin-bottom: 0.6333rem;
  //     display: flex;
  //     flex-direction: row;

  //     .ad-item {
  //       display: flex;
  //       @include text-column;
  //       cursor: pointer;
  //       border: 0.0167rem solid rgba(217, 217, 217, 0.382);

  //       .expand {
  //         width: 0;
  //         transition: all 0.3s;
  //         position: relative;

  //         .e-r {
  //           position: absolute;
  //           bottom: 0;
  //           height: 5.5rem;
  //           text-align: center;
  //           right: 0.1667rem;
  //           @include linear-txt;
  //         }

  //         .e-l {
  //           position: absolute;
  //           bottom: 0;
  //           height: 5.5rem;
  //           left: 0;
  //           text-align: center;
  //           left: 0.1667rem;
  //           @include linear-txt;
  //         }
  //       }

  //       .time {
  //         height: 3.8rem;
  //         width: 1rem;
  //         font-size: 0.3rem;
  //         background: linear-gradient(
  //           to bottom,
  //           $theme-color-green,
  //           $theme-color-blue
  //         );
  //         color: white;
  //         display: flex;
  //         align-items: center;
  //         padding: 0.2rem 0.2rem;
  //         clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  //         position: relative;
  //         top: -0.6667rem;
  //       }

  //       .ad-title {
  //         flex: 2;
  //         @include linear-txt;
  //         display: flex;
  //         align-items: center;
  //         font-size: 0.35rem;
  //         position: relative;
  //       }
  //     }

  //     .ad-item-re {
  //       flex-direction: row-reverse;

  //       .e-r {
  //         position: absolute;
  //         top: 0;
  //         text-align: start;
  //         height: 5.5rem;
  //       }

  //       .e-l {
  //         position: absolute;
  //         top: 0;
  //         height: 5.5rem;
  //         left: 0;
  //         text-align: start;
  //       }

  //       .ad-title {
  //         text-align: end;
  //         justify-content: flex-end;
  //       }

  //       .time {
  //         text-align: end;
  //         justify-content: flex-end;
  //         background: linear-gradient(
  //           to bottom,
  //           $theme-color-blue,
  //           $theme-color-green
  //         );
  //         clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
  //         position: relative;
  //         top: 0.6667rem;
  //       }
  //     }
  //   }
  // }

  .filter-container {
    margin: 0 auto;
    width: 13.725rem;
    padding: 0.425rem 0 0.7rem;

    .filter-main {
      display: flex;
      width: 13.725rem;
      box-shadow: 0.0125rem 0.0625rem 0.0625rem #d5d5d5;

      .all,
      .admin {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-content: center;
        width: 6.8625rem;
        height: 0.7375rem;
        font-size: 0.25rem;
        line-height: 0.7375rem;
        text-align: center;
        font-weight: bold;
      }
    }

    .filter-date {
      margin: 0.4rem 0;
      display: flex;
    }

    .filter-type {
      display: flex;
    }

    .filteritem {
      cursor: pointer;
      display: flex;
      justify-content: center;
      width: 1.7375rem;
      height: 0.4875rem;
      margin-right: 0.3375rem;
      font-size: 0.2rem;
      line-height: 0.4875rem;
    }
  }

  .agenda-content {
    margin: 0 auto;
    width: 13.725rem;

    .date {
      font-size: 0.35rem;
      line-height: 0.4875rem;
      position: relative;
      font-style: oblique;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.0625rem;
        width: 100%;
        height: 0.0625rem;
        background-color: #1185e4;
      }
    }

    .part1 {
      flex: 2.5;

      .time {
        font-size: 0.325rem;
        font-weight: bold;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: -0.125rem;
          top: 0;
          height: 0.325rem;
          width: 0.0625rem;
          background-color: #1185e4;
        }
      }

      .location {
        font-size: 0.15rem;
        line-height: 0.45rem;
      }

      .link {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 0.1375rem;
        line-height: 0.25rem;
        text-align: end;
        margin-left: 0.175rem;

        span {
          color: #1185e4;
        }
      }
    }

    .part2 {
      flex: 4;

      span {
        display: inline-block;
        height: 0.5714rem;
        line-height: 0.5714rem;
        padding: 0rem 0.3571rem 0rem 0.2143rem;
        font-size: 0.325rem;
        font-weight: 700;
        background: linear-gradient(to right, #84bded, #fafafa);
        border-radius: 0.2857rem;
      }
    }

    .part3 {
      flex: 2;
      display: flex;
      justify-items: end;
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
</style>

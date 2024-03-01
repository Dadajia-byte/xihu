<template>
  <div class="agenda-page">
    <Screen></Screen>
    <div class="agenda-list">
      <h2 class="title">全部会议</h2>
      <p class="title-re">Agendas</p>
      <div class="agenda-content">
        <div
          class="ad-item wow fadeInLeft"
          v-for="(item, index) in data"
          :class="index % 2 == 0 ? 'ad-item-re' : ''"
          @mouseover="item.isExpand = true"
          @mouseleave="data.forEach((i) => (i.isExpand = false))"
          :key="item.title"
          :data-wow-delay="index / 10 + 's'"
          @click="handleRouter"
        >
          <div class="time">
            {{ item.date }}
          </div>
          <div class="ad-title">
            {{ item.title }}
          </div>
          <div
            class="expand"
            :style="{
              width: item.isExpand ? '200px' : '0px',
            }"
          >
            <span
              v-if="item.isExpand"
              class="e-r"
              @mouseover="stopP"
              @mouseleave="stopP"
            >
              时间 {{ item.time }}
            </span>
            <span
              v-if="item.isExpand"
              class="e-l"
              @mouseover="stopP"
              @mouseleave="stopP"
            >
              地点 {{ item.address }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Screen from './components/Screen.vue'
// @ts-ignore
import WOW from 'wow.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}

const handleRouter = () => {
  router.push('/lay/agenda-live')
}

onMounted(() => {
  initWOW()
})

const stopP = (e: any) => {
  e.stopPropagation
}

type dataType = {
  title: string
  date: string
  time: string
  address: string
  isExpand?: boolean
}

const data = ref<dataType[]>([
  {
    title: '格致论道@西湖论剑',
    date: '5月5日 下午',
    time: '十八时零分至二十一时零分',
    address: '杭州市滨江区文化中心剧院一层',
  },
  {
    title: '95后极客青年Talk',
    date: '5月6日 上午',
    time: '十八时零分至二十一时零分',
    address: '线上直播',
  },
  {
    title: '当科幻照进现实我们会更安全吗',
    date: '5月6日 下午',
    time: '十八时零分至二十一时零分',
    address: '线上直播',
  },
  {
    title: '人工智能会颠覆安全行业吗',
    date: '5月6日 下午',
    time: '十八时零分至二十一时零分',
    address: '线上直播',
  },
  {
    title: '反诈直播间@西湖论剑',
    date: '5月6日 下午',
    time: '十八时零分至二十一时零分',
    address: '线上直播',
  },
  {
    title: '主论坛生态合作伙伴',
    date: '5月7日 上午',
    time: '十八时零分至二十一时零分',
    address: '杭州洲际酒店杭州厅',
  },
  {
    title: '主论坛生态合作伙伴',
    date: '5月7日 上午',
    time: '十八时零分至二十一时零分',
    address: '杭州英冠索菲特酒店',
  },
  {
    title: '数字中国安全大会',
    date: '5月7日 下午',
    time: '十八时零分至二十一时零分',
    address: '杭州英冠索菲特酒店',
  },
])
</script>

<style scoped lang="scss">
.agenda-page {
  width: 100%;

  .agenda-list {
    width: 100%;
    padding: 1rem;

    .title {
      width: 100%;
      text-align: center;
      font-size: 0.5rem;
      @include linear-txt;
    }

    .title-re {
      margin: 0.1067rem 0;
      @include linear-txt;
      text-align: center;
      line-height: 1.4;
      font-size: 0.1967rem;
    }

    .agenda-content {
      width: fit-content;
      min-height: 70vh;
      margin-top: 1.2333rem;
      margin-bottom: 0.6333rem;
      display: flex;
      flex-direction: row;

      .ad-item {
        display: flex;
        @include text-column;
        cursor: pointer;
        border: 0.0167rem solid rgba(217, 217, 217, 0.382);

        .expand {
          width: 0;
          transition: all 0.3s;
          position: relative;

          .e-r {
            position: absolute;
            bottom: 0;
            height: 5.5rem;
            text-align: center;
            right: 0.1667rem;
            @include linear-txt;
          }

          .e-l {
            position: absolute;
            bottom: 0;
            height: 5.5rem;
            left: 0;
            text-align: center;
            left: 0.1667rem;
            @include linear-txt;
          }
        }

        .time {
          height: 3.8rem;
          width: 1rem;
          font-size: 0.3rem;
          background: linear-gradient(
            to bottom,
            $theme-color-green,
            $theme-color-blue
          );
          color: white;
          display: flex;
          align-items: center;
          padding: 0.2rem 0.2rem;
          clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
          position: relative;
          top: -0.6667rem;
        }

        .ad-title {
          flex: 2;
          @include linear-txt;
          display: flex;
          align-items: center;
          font-size: 0.35rem;
          position: relative;
        }
      }

      .ad-item-re {
        flex-direction: row-reverse;

        .e-r {
          position: absolute;
          top: 0;
          text-align: start;
          height: 5.5rem;
        }

        .e-l {
          position: absolute;
          top: 0;
          height: 5.5rem;
          left: 0;
          text-align: start;
        }

        .ad-title {
          text-align: end;
          justify-content: flex-end;
        }

        .time {
          text-align: end;
          justify-content: flex-end;
          background: linear-gradient(
            to bottom,
            $theme-color-blue,
            $theme-color-green
          );
          clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
          position: relative;
          top: 0.6667rem;
        }
      }
    }
  }
}
</style>

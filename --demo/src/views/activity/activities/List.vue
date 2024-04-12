<template>
  <div class="list-box">
    <div class="type">
      <div
        class="type-item"
        v-for="(item, index) in type"
        :key="index"
        @click="filter(item)"
        :style="
          item === activityStore.filterItem.type
            ? 'background-color:#01a4ff;color:#fff;scale:1.2'
            : ''
        "
      >
        {{ item }}
      </div>
    </div>

    <div
      class="list-card wow fadeInUp"
      v-for="(item, index) in activityStore.lists"
      :style="{ flexDirection: index % 2 == 0 ? 'row' : 'row-reverse' }"
      :key="item.id"
    >
      <div
        class="card-left"
        :style="{
          transformOrigin: index % 2 == 0 ? '100% 50%' : '0px 50%',
        }"
      >
        <div class="titles">
          <span>{{ item.title }}</span>
        </div>
        <el-button class="dy" @click="sub(item.id)" v-show="item.isSub == 0">
          订阅
        </el-button>
        <el-button
          class="dy"
          @click="cancelSub(item.id)"
          v-show="item.isSub != 0"
        >
          取消订阅
        </el-button>
        <div class="c-c">
          {{ item.content }}
        </div>
        <div class="c-t">
          <span>{{ item.time }}</span>
          <span>{{ item.peo }}人订阅</span>
        </div>
      </div>
      <div
        class="card-right"
        :style="{
          backgroundImage: `url(${item.image})`,
        }"
      ></div>
    </div>
    <div class="demo-pagination-block">
      <el-pagination
        v-model:current-page="activityStore.filterItem.startIndex"
        v-model:page-size="activityStore.filterItem.pageSize"
        :small="false"
        layout="prev, pager, next, jumper"
        :total="activityStore.total"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useActivityStore from '@/store/modules/activity'
// @ts-ignore
import WOW from 'wow.js'
import { onBeforeUnmount } from 'vue'
import { ElMessage } from 'element-plus'

import judgeLog from '@/utils/judgeLog'
//@ts-ignore
const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}
let type = [
  '全部',
  '格致论道',
  '西湖论剑安全特训营',
  '新品发布',
  '第二直播间',
  '掌上论剑',
  '西湖论剑十周年回顾',
]

let activityStore = useActivityStore()

const filter = (item: string) => {
  activityStore.filterItem.type = item
  activityStore.getActivty()
}

onBeforeUnmount(() => {
  ;(activityStore.filterItem.type = ''),
    (activityStore.filterItem.pageSize = 4),
    (activityStore.filterItem.startIndex = 1)
})
const handleCurrentChange = () => {
  activityStore.getActivty()
}

const sub = (id: number) => {
  judgeLog()
  activityStore
    .subActivity(id)
    .then(() => {
      ElMessage.success('订阅成功')
    })
    .then(() => {
      activityStore.getActivty()
    })
    .catch((err) => {
      ElMessage.error(err.message)
    })
}
const cancelSub = (id: number) => {
  activityStore
    .cancelActivity(id)
    .then(() => {
      ElMessage.success('取消订阅成功')
    })
    .then(() => {
      activityStore.getActivty()
    })
}
</script>
<script lang="ts">
export default {
  name: 'List',
}
</script>

<style scoped lang="scss">
.list-box {
  width: 100%;
  background-color: white;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.125rem 0px rgb(228, 228, 228);
  padding: 0 0.8333rem 0.8667rem 0.8333rem;

  .type {
    position: relative;
    width: 100%;
    margin-left: 3%;
    height: 100px;
    margin-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.0313rem;
      /* 设置边框的高度 */
      background: linear-gradient(
        to right,
        #004dbd,
        #014fbb,
        #019bc4,
        #1bc2c1,
        #aeebe4,
        #ffffff
      );
    }

    .type-item {
      display: inline-block;
      width: auto;
      padding: 0.125rem 0.1875rem;
      flex: 1;
      font-size: 0.225rem;
      margin: 0.575rem 0.1875rem;
      border: #f4f9ff solid 0.025rem;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        scale: 1.2;
      }
    }
  }

  .list-card {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 4.2rem;
    margin-bottom: 1.2rem;

    .card-left {
      flex: 3;
      padding: 0.4333rem;
      height: 100%;
      padding-left: 0.6rem;

      background-image: url(../../assets/images/bg_images/activity_item_bgc.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      box-shadow: 0 0 10px rgba(219, 219, 219, 0.903);
      border: 1px solid rgba(206, 206, 206, 0.678);
      transition: all 0.3s;

      .titles {
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 0.3rem;
          font-weight: bold;
        }
      }

      .dy {
        margin-left: 82%;
        font-size: 0.2rem;
        padding: 0.093rem 0.25rem;
        background-color: #f4f9ff;
        color: #0179ef;
        border-radius: 0.125rem;
      }

      .c-c {
        padding-left: 0.3333rem;

        font-size: 0.2rem;
        line-height: 1.7;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .c-t {
        color: #0179ef;
        font-size: 0.2rem;
        margin-top: 0.6667rem;

        span {
          font-weight: 500;
          margin-right: 0.2667rem;
        }
      }

      &:hover {
        scale: 1.11;
      }
    }

    .card-right {
      position: relative;
      top: -0.75rem;
      margin: 0.25rem;
      flex: 4;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>

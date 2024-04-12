<template>
  <div>
    <div class="ticket">
      <div class="header">
        <div class="title">线上购票</div>
      </div>
      <div class="ticket_container">
        <div
          class="ticket_item"
          v-for="(item, index) in ticket"
          :key="index"
          @click="setActive(index)"
        >
          <div class="top" v-show="index === activeIndex">当前选择</div>
          <div class="type">{{ item.type }}</div>
          <div class="price">{{ item.price }}</div>
          <div class="desc">
            <span>面向对象:</span>
            <div class="goal">{{ item.goal }}</div>
            <span>基础服务:</span>
            <div class="service">{{ item.service }}</div>
          </div>
          <div class="buy" :class="activeIndex === index ? 'active' : ''">
            <!-- <svgIcon name="index === activeIndex ? 'ticketactive':'ticket'" style="height:.25rem ;width: .25rem;"></svgIcon>  -->
            <span>&nbsp;立即购票</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref(0)
const setActive = (index: number) => {
  activeIndex.value = index
}
const ticket = ref([
  {
    type: '贵宾票',
    price: '¥199',
    goal: ' 行业领袖、企业高层管理人员、政府代表、研究机构负责人等高端用户',
    service:
      '享有快速通道办理入会手续。可参加贵宾专属的圆桌论坛和闭门会议。提供专属贵宾休息区，配备全天候茶歇服务。',
  },
  {
    type: '校园票',
    price: '¥29',
    goal: ' 专为在校学生设计，以支持和鼓励学生群体参与数字安全领域的学习和交流',
    service:
      '参与大会的所有公开讲座和展览。接触国内外知名网络安全专家，为学术研究和职业发展搭建桥梁。获得大会指定的学习资料和会议记录。',
  },
  {
    type: '技术票',
    price: '¥99',
    goal: '对数字安全感兴趣的公众人士，希望了解最新行业动态、技术趋势',
    service:
      '准入大会的公共区域，参与主题演讲和技术展示。提供大会日程手册，方便安排参会日程。参与互动讲座和技术研讨会，与行业同好深入交流。机会参加由赞助商提供的产品体验和技术演练。',
  },
])
</script>

<style lang="scss" scoped>
.ticket {
  background: url('/src/assets/images/bg_images/imgwall.png') no-repeat
    center/cover;
  padding-bottom: 1rem;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;

    .title {
      font-size: 0.675rem;
      font-weight: bold;
      @include linear-txt;
    }
  }

  .ticket_container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 0.625rem;
    .desc {
      padding: 0.125rem;

      span {
        font-size: 0.25rem;
        margin-left: 0.625rem;
        margin-bottom: 0.125rem;
        line-height: 0.45rem;
        height: 0.45rem;
      }
      .goal {
        margin: 0 auto;
        width: 80%;
        font-size: 0.2rem;
        line-height: 0.25rem;
        margin-bottom: 0.25rem;
        color: #abaaab;
      }
      .service {
        margin: 0 auto;
        width: 80%;
        font-size: 0.2rem;
        line-height: 0.25rem;
        color: #abaaab;
        margin-bottom: 0.5rem;
      }
    }

    .ticket_item {
      cursor: pointer;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 6.25rem;
      height: 7.5rem;
      margin-right: 0.3125rem;
      position: relative;
      box-shadow: 0px 0px 0.125rem 0px #abaaab;

      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        top: -0.625rem;
        color: #fff;
        background: #ff1b88;

        font-size: 0.3125rem;
        height: 0.625rem;
      }

      .type {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1rem;
        color: #ff1b88;
        font-size: 0.45rem;
      }

      .price {
        color: #002691;
        display: flex;
        justify-content: center;
        font-size: 0.675rem;
        font-weight: bold;
        margin: 0.3125rem 0;
      }

      .buy {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.25rem;
        margin: 0 auto;
        height: 0.625rem;
        width: 2.5rem;

        margin-top: 0.3125rem;
        margin-bottom: 0.3125rem;

        border: 1px solid #ff1b88;
        border-radius: 0.625rem;
        transition: all 0.3s ease-in-out;
      }

      .active {
        background-color: #ff1b88;
        box-shadow: 0px 0px 10px 0px #abaaab;
        color: #fff;
      }
    }
  }
}
</style>

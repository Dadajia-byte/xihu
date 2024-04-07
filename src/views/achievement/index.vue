<template>
  <div class="achievement-page">
    <div class="screen">
      <h1 class="wow fadeInLeft">成果发布</h1>
      <div class="ranks">
        <div class="rank wow fadeInLeft" data-wow-delay="0s">
          <p>1</p>
          <p><a href="#section1">白皮书</a></p>
        </div>
        <div class="rank wow fadeInLeft" data-wow-delay="0.2s">
          <p>2</p>
          <p><a href="#section2">新品发布</a></p>
        </div>
        <div class="rank wow fadeInLeft" data-wow-delay="0.4s">
          <p>3</p>
          <p><a href="#section3">书籍</a></p>
        </div>
      </div>
    </div>
    <!-- 白皮书 -->
    <section id="section1">
      <div class="white-paper a-p-item">
        <div class="title wow fadeInUp">
          <p>白皮书</p>
          <p>White Paper</p>
        </div>
        <div class="card">
          <CardItem
            :class="{
              ci: true,
              wow: true,
              slideInRight: index % 2 === 0,
              slideInLeft: index % 2 !== 0,
            }"
            v-for="(item, index) in data"
            :key="item.bgUrl"
            :card-data="item"
            data-wow-duration="1s"
          ></CardItem>
        </div>
      </div>
    </section>
    <!-- 新品发布 -->
    <section id="section2">
      <div class="new-product a-p-item">
        <div class="title wow fadeInUp">
          <p>新品发布</p>
          <p>New Product Launch</p>
        </div>
        <div class="new-cards">
          <div
            v-for="(item, index) in newData"
            :key="item.bgUrl"
            class="wow fadeInUp"
            :data-wow-delay="index * 0.2 + 's'"
          >
            <NewCard
              :title="item.title"
              :bg-url="item.bgUrl"
              :content="item.content"
            ></NewCard>
          </div>
        </div>
      </div>
    </section>
    <section id="section3">
      <div class="bk a-p-item">
        <div class="title wow fadeInUp">
          <p>书籍</p>
          <p>Books</p>
        </div>
        <div class="books">
          <div v-for="item in bookData" :key="item.bgUrl" class="wow fadeInUp">
            <Book :bk-data="item"></Book>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// @ts-ignore
import WOW from 'wow.js'
import Book from './components/Book.vue'
import CardItem from './components/CardItem.vue'
import NewCard from './components/NewCard.vue'

const data = ref([
  {
    bgUrl:
      'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/7/70fe3218d7ae4f58ae91a838ed4d64dd.jpg',
    enTitle:
      '2023 West Lake Debate - essence Special Issue of the 11th Anniversary',
    chTitle: '2023西湖论剑-11周年精华特刊',
    content:
      '建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉 (以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。整体框架中，一方面着重强调了数字安全的重要性，数字安全和数字技术并列为支撑数字中国建设的两大能力。另一方面，“安全”在2522框架中无处不在——数字基础设施不可无安全保障，数据资源大循环不可无安全赋能，建设公平规范的数字治理生态不可无安全辅助。建设数字中国，构筑数字安全屏障势在必行。',
  },
  {
    bgUrl:
      'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8cc23042ae8f4a6e80f25997132d13c0.png',
    enTitle: '2023 Digital Security Capability Insight Report',
    chTitle: '2023数字安全能力洞察报告',
    content:
      '数字经济成为全球新一轮科技革命和产业变革的重要引擎，将开启人类数字文明的新时代。数字安全的基础性作用日益突出，在数字化建设进程中，加紧实施国家信息化发展战略，筑牢可信可控的数字安全屏障，夯实数字基础设施安全底座，增强关键基础设施安全韧性，助力数字社会安全发展，已成为支撑现代化建设、增强国家综合实力的必然选择。',
  },
  {
    bgUrl:
      'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0bfbde79d1774b43bab8f03d1c75e44c.png',
    enTitle:
      'Anheng Information 2023 Industry Solution Blue Book (6 books in total)',
    chTitle: '安恒信息2023年行业解决方案蓝皮书（全6本）',
    content:
      '数字安全是未来数字化发展的重要组成部分，立足数字安全建设。备预不虞，为国常道，安恒信息结合多年网络安全、数据安全经验以及对行业发展趋势的理解和把握，安恒信息首次发布六大行业解决方案蓝皮书，全面介绍网信、公安、运营商、金融、教育、交通六大行业中的解决方案最佳实践，为产业数字化发展指明了方向，全面加速推动经济社会全面发展。',
  },
])

const newData = ref([
  {
    bgUrl:
      'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/bf77ef3740464bd38b383633d30831a6.jpg',
    title: '下一代防火墙',
    content:
      '明御防火墙（DAS-TGFW）秉持“持续边界安全态势改善”的理念，以用户为核心，以边界、应用、威胁、权限为防护对象，构建了以资产为视角的可持续智能安全运营防护体系。是集传统防火墙、入侵防御、防病毒、上网行为管控、VPN、威胁情报等安全模块于一身，同时可联合态势感知、EDR等产品进行一体化建设的智能安全网关。',
  },
  {
    bgUrl:
      'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/500e36be359f492ab623b7998263ccc2.jpg',
    title: '安全托管运营服务MSS',
    content:
      '提供体系化、常态化的安全托管服务，协助构建7*24小时全天候、全方位的安全运营体系， 实现安全风险从发现到响应处置的闭环，持续不断提高网络安全水平',
  },
])

const bookData = ref([
  {
    bgUrl:
      'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/cd902015f99246108a0615d4668f5d0d.png',
    title: '《数据安全与隐私计算》',
    content:
      '本书首先介绍了业内多个具备代表性的数据安全理论及实践框架，从数 据常见风险出发，引出数据安全保护最佳实践，然后介绍了数字经济时代数据要素市场的基本信息，基于构建数据要素市场、促进数据合规安全流通，释放数据价值等场景中的实践，抽象并总结了一套数据要素可信、安全、合 规流通的体系架构，包括数据安全保护技术与保护数据价值释放的隐私计算 技术，最后针对政务、金融、电力能源、公安行业等重点行业，分析了数据 安全与数据孤岛现象的根本原因，介绍了数据安全实践案例，以及如何通过 部署数据要素流通体系架构，打破“数据壁垒”，促进多方数据融合计算的实践案例。 本书可以作为高校学生、隐私计算技术从业者、数据要素市场从业者、 数据安全行业从业者的入门读物，也可作为相关机构或组织进行数据要素市 场流通体系建设实践的参考指南。',
  },
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

onMounted(() => {
  initWOW()
})
</script>

<style scoped lang="scss">
.achievement-page {
  width: 100%;

  .ci {
    padding: 0.4rem 0;
    border-bottom: 1px solid rgb(229, 229, 229);
    box-shadow: 0 0rem 0.3333rem 0 rgb(230, 230, 230);
  }

  .a-p-item {
    padding: 1rem 0.5rem;

    .card {
      width: 100%;
      margin-top: 0.6667rem;
      display: flex;
      flex-direction: column;
      gap: 0.8333rem;

      .ci:nth-child(odd) {
        flex-direction: row;
        margin-left: auto;
      }

      .ci:nth-child(even) {
        flex-direction: row-reverse;
        margin-right: auto;
      }
    }

    .title {
      width: 100%;
      @include linear-txt;
      text-align: center;

      p:first-child {
        font-size: 0.4667rem;
      }

      p:last-child {
        margin-top: 0.2333rem;
        font-size: 0.2rem;
      }
    }
  }

  .new-product {
    background-color: #eff7fe;

    .new-cards {
      display: flex;

      justify-content: center;
      width: 100%;
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;
    }
  }

  .bk {
    .books {
      width: 100%;
      margin: 0.6667rem auto;
    }
  }

  .screen {
    width: 100%;
    height: 8rem;
    background-size: cover;
    background-image: url('/src/assets/images/bg_images/result.jpg');
    padding: 3%;

    h1 {
      color: white;
      font-size: 0.5rem;
    }
  }

  .ranks {
    display: flex;
    flex-direction: column;
    padding: 0.1667rem 0.3333rem;
    gap: 0.6667rem;
    margin-top: 0.5333rem;
    margin-left: 0.5rem;

    .rank {
      display: flex;
      width: 3.6667rem;
      align-items: center;
      background-color: white;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 0.0833rem;

      &:hover {
        transform: scale(1.1);
      }

      p:first-child {
        color: white;
        background: linear-gradient(
          to right,
          $theme-color-green,
          $theme-color-blue
        );
        padding: 0.2167rem 0.4333rem;
        scale: 1.3;
        border-radius: 0.0833rem;
      }

      p:last-child {
        flex: 1;
        text-align: center;
        background-color: white;
        @include linear-txt;
        font-size: 0.3rem;
      }
    }
  }
}
</style>

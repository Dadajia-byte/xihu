<template>
  <div>
    <!-- 头部筛选栏 -->
    <div class="header">
      <div class="title wow fadeInRight">海报下载</div>
    </div>
    <div class="divider wow fadeInUp">
      <div
        class="meetingposter"
        :class="isActive === 0 ? 'active' : ''"
        @click="setMeetingActive"
      >
        <el-icon>
          <DataLine />
        </el-icon>
        &nbsp;大会海报
      </div>
      <div
        class="guestposter"
        :class="isActive === 1 ? 'active' : ''"
        @click="setGuestActive"
      >
        <el-icon>
          <DataLine />
        </el-icon>
        &nbsp;嘉宾海报
      </div>
    </div>

    <!-- 海报页面 -->
    <div class="poster-container" v-show="isActive === 0">
      <div
        class="poster wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
        v-for="(item, index) in posterList"
        :key="index"
      >
        <div
          class="poster-img"
          :style="{ backgroundImage: 'url(' + item.url + ')' }"
        ></div>
        <div class="poster-name" @click="selectPoster(item)">
          {{ item.name }}
        </div>

        <el-dialog
          v-model="item.dialogVisible"
          width="5.6875rem"
          :show-close="false"
          style="
            background-color: transparent;
            box-shadow: none;
            padding: 0;
            height: 10.75rem;
          "
          :align-center="true"
        >
          <div
            class="preview-img"
            :style="{ backgroundImage: 'url(' + item.url + ')' }"
          ></div>
          <div class="dialogdownload" @click="download(item)">点击下载</div>
        </el-dialog>
      </div>
    </div>

    <!-- 嘉宾页面 -->
    <div class="guest-container" v-show="isActive === 1">
      <div
        class="guest wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
        v-for="(item, index) in guestList"
        :key="index"
      >
        <div class="img-wrapper">
          <div
            class="img"
            :style="{
              background: 'url(' + item.url + ')' + 'no-repeat center/cover',
            }"
          ></div>
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="desc">{{ item.description }}</div>
        <div class="download" @click="selectGuest(item)">点击下载</div>
        <el-dialog
          v-model="item.dialogVisible"
          width="5.6875rem"
          :show-close="false"
          style="
            background-color: transparent;
            box-shadow: none;
            padding: 0;
            height: 10.75rem;
          "
          :align-center="true"
        >
          <div
            class="preview-img"
            :style="{ backgroundImage: 'url(' + item.url + ')' }"
          ></div>
          <div class="dialogdownload" @click="download(item)">点击下载</div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WOW from 'wow.js'

const isActive = ref(0)
const posterList = ref([
  {
    name: '数字安全@数字中国',
    // url: '@/assets/images/bg_imgages/login_bg.png',
    url: 'https://img2023.gcsis.cn/2023/5/a5bcfbeb41004c6090952b57a08b173c.jpg',
    dialogVisible: false,
  },
  {
    name: '数字中国&安全治理',
    url: 'https://img2023.gcsis.cn/2023/5/b4205433c25e4030861cbfb53dbe1df8.jpg',
    dialogVisible: false,
  },
  {
    name: '信创软件供应链安全论坛',
    url: 'https://img2023.gcsis.cn/2023/5/8b8ccd6acc5245358d6ba2616e063502.jpg',
    dialogVisible: false,
  },
  {
    name: '车联网安全论坛',
    url: 'https://img2023.gcsis.cn/2023/5/1626b33553c74615bdcc05eb01553530.jpg',
    dialogVisible: false,
  },
  {
    name: '工业领域网络和数据安全论坛',
    url: 'https://img2023.gcsis.cn/2023/5/520901df5d8a45f5b50481037b6d876d.jpg',
    dialogVisible: false,
  },
  {
    name: '网络安全创新发展高端论坛',
    url: 'https://img2023.gcsis.cn/2023/5/d5e71883ab6241af8a73c73cc52bc17a.jpg',
    dialogVisible: false,
  },
  {
    name: '',
    url: '',
    dialogVisible: false,
  },
])
const guestList = ref([
  {
    url: 'https://img2023.gcsis.cn/2023/4/3976ced942c44672b457895baa4e33e8.png',
    name: '刘世锦',
    description: '中国发展研究基金会副理事长、国务院发展研究中心原副主任',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/81ea365660294a9bafb0968263d4f0b4.jpeg',
    name: '邬贺铨',
    description: '中国工程院院士',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/4e02c7f3e7dd4d67b9cc24cd2d24cc64.jpeg',
    name: '方滨兴',
    description: '中国工程院院士',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/d9c75b81f4164adebb6bfd3010ea74f4.jpeg',
    name: '齐同军',
    description: '杭州市数据资源管理局副局长',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/36a0ed759c29489ab094a7f5cf733428.jpeg',
    name: '张亮',
    description: '无锡市城市运行管理中心党支部书记、副主任',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/8358a2eed7fb471cb60b0d306e10227e.jpeg',
    name: '方坚',
    description: '芜湖市数据资源管理局副局长',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/53308d63685642969f18cb679090d166.jpeg',
    name: '郑磊',
    description:
      '复旦大学国际关系与公共事务学院教授、上海市一网统管城市数字治理实验室主任',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/7fa0179beaa44f83b409ff0c9ac6682b.jpeg',
    name: '刘博',
    description: '安恒信息首席科学家，高级副总裁',
    dialogVisible: false,
  },
  {
    url: 'https://img2023.gcsis.cn/2023/5/53308d63685642969f18cb679090d166.jpeg',
    name: '范渊',
    description: '安恒信息董事长',
    dialogVisible: false,
  },
])
const setMeetingActive = () => {
  isActive.value = 0
}
const setGuestActive = () => {
  isActive.value = 1
}
const download = (item: any) => {
  const a = document.createElement('a')
  a.download = item.name
  a.href = item.url + '?response-content-type=application/octet-stream'
  a.click()
}
const selectPoster = (item: any) => {
  item.dialogVisible = true
}
const selectGuest = (item: any) => {
  item.dialogVisible = true
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
onMounted(() => {
  initWOW()
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 7.175rem;
  padding-left: 2.8625rem;
  padding-top: 3.2625rem;
  background: url('@/assets/images/poster_images/banner.jpeg') no-repeat center
    center;

  .title {
    color: #fff;
    font-weight: bold;
    font-size: 0.6125rem;
  }
}

.divider {
  justify-content: center;
  display: flex;

  .meetingposter,
  .guestposter {
    cursor: pointer;
    margin-right: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.35rem;
    height: 1.25rem;
    width: 2.4375rem;
    transition: color 0.5s ease-in-out;
    position: relative;
    color: rgb(139, 132, 132);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0.025rem;
      background-color: #2db1ba;
      transition:
        width 0.3s ease,
        left 0.3s ease;
    }

    &.active::after {
      width: 100%;
      left: 0;
    }
  }

  .active {
    color: #2db1ba;
  }
}

.poster-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.625rem auto 0 auto;
  width: 17.625rem;

  .poster {
    height: 11.05rem;
    width: 5.6875rem;
    margin-right: 0.1875rem;

    .poster-img {
      height: 10.125rem;
      width: 5.6875rem;
      cursor: pointer;
      background: no-repeat center/cover;
    }

    .poster-name {
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 0.925rem;
      width: 5.6875rem;
      font-weight: 500;
      font-size: 0.2625rem;
      line-height: 0.925rem;
      transition: color 0.3s ease-in-out;
    }

    &:hover .poster-name {
      color: #2db1ba;
    }
  }
}

.guest-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.625rem auto 0 auto;
  width: 18.1875rem;

  .guest {
    height: 6.525rem;
    width: 5.6875rem;
    margin-right: 0.375rem;
    margin-top: 0.375rem;
    padding: 0.375rem;
    display: flex;
    align-content: center;
    flex-direction: column;

    background-color: #fff;
    box-shadow: 0.05rem 0.075rem 0.5rem 0.05rem rgba(122, 147, 177, 0.17);

    .img-wrapper {
      margin: 0 auto;
      height: 3.125rem;
      width: 3.125rem;
      clip-path: circle();
      overflow: hidden;
      position: relative;

      .img {
        position: absolute;
        top: 0;
        width: 3.125rem;
        height: 5.555rem;
        background: no-repeat center/cover;
        transition: transform 0.3s ease-in-out;
      }

      &:hover .img {
        transform: scale(1.1);
      }
    }

    .name {
      margin-top: 0.5rem;
      margin-bottom: 0.3rem;
      display: flex;
      justify-content: center;
      font-size: 0.3rem;
      height: 0.55rem;
      line-height: 0.55rem;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -0.0625rem;
        left: 50%;
        transform: translateX(-50%);
        height: 0.025rem;
        width: 0.1875rem;
        background-color: #2db1ba;
      }
    }

    .desc {
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 0.2rem;
      color: #abaaaa;
      line-height: 0.3125rem;
      height: 0.625rem;
    }

    .download {
      margin: 0.0625rem auto 0;
      display: flex;
      justify-content: center;
      height: 0.5rem;
      width: 2.1875rem;
      line-height: 0.5rem;
      border-radius: 0.5rem;
      border: 0.025rem solid #2db1ba;
      color: #2db1ba;
      font-size: 0.2rem;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: #2db1ba;
        color: #fff;
      }
    }
  }
}

.preview-img {
  height: 10.125rem;
  width: 5.6875rem;
  background: no-repeat center/cover;
}

.dialogdownload {
  margin: 0.0625rem auto 0;
  display: flex;
  justify-content: center;
  height: 0.5rem;
  width: 2.1875rem;
  line-height: 0.5rem;
  border-radius: 0.5rem;
  border: 0.025rem solid #2db1ba;
  color: #ffffff;
  font-size: 0.2rem;
  cursor: pointer;
  background-color: #2db1ba;
}
</style>

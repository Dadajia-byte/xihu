<template>
  <div class="container">
    <div class="title">大会议程</div>
    <el-form>
      <el-form-item>
        <div class="search">
          <el-input placeholder="请输入会议名称进行搜索">
            <template #suffix>
              <el-icon>
                <Search></Search>
              </el-icon>
            </template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="全部议程">
          <el-option label="5月5日" value="5月5日" />
          <el-option label="5月6日" value="5月6日" />
          <el-option label="5月7日" value="5月7日" />
          <el-option label="5月8日" value="5月8日" />
        </el-select>


        <el-select placeholder="全部类型">
          <el-option label="主论坛" value="主论坛" />
          <el-option label="平行论坛" value="平行论坛" />
          <el-option label="科普论坛" value="科普论坛" />
          <el-option label="掌上论剑" value="掌上论剑" />
          <el-option label="生态合作论坛" value="生态合作论坛" />
        </el-select>

      </el-form-item>
    </el-form>
    <div class="meeting-list" v-for="group in meetingList" :key="group.dayTime">
      <div class="dayTime">{{ group.dayTime }}</div>
      <div class="meeting" v-for="item in group.items" :key="item.title">
        <div class="meeting_top">
          <div class="meeting_title">{{ item.title }}</div>
          <div class="huifang">观看回放</div>
        </div>
        <div class="meeting_bot">
          <div class="time">{{ item.time }}</div>
          <div class="pos">{{ item.pos }}</div>
          <button>订阅+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const meetingList = [
  {
    dayTime: '5月5日 下午',
    items: [
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
    ]
  },
  {
    dayTime: '5月6日 上午',
    items: [
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
    ]
  },
  {
    dayTime: '5月6日 上午',
    items: [
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
    ]
  },
  {
    dayTime: '5月6日 上午',
    items: [
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
      {
        title: '格致论道@西湖论剑',
        time: '18:00-21:00',
        pos: '杭州市滨江区文化中心剧场一层'
      },
    ]
  },
]
</script>

<style scoped lang="scss">
.container {
  // background: url();
  // background-size: cover;
  overflow: hidden;
  background-color: blue;

  .title {
    font-size: 7vw;
    width: fit-content;
    color: white;
    margin: 10vw auto 4vw;
  }

  .el-form {
    flex-wrap: wrap;

    .el-form-item:nth-of-type(1) {
      margin-top: 1vw;


      .search {
        width: 85%;
        margin: 0 auto;
        border-radius: 5vw;
        overflow: hidden;

        .el-input {
          height: 10vw;



        }
      }
    }

    .el-form-item:nth-of-type(2) {
      width: 100%;

      .el-select {
        height: 8vw;
        border-radius: 5vw;
        overflow: hidden;
        width: 35vw;
        margin: 0 auto;
      }
    }
  }

  .meeting-list {
    width: 90vw;
    margin: 0 auto 5vw;

    .dayTime {
      width: 35vw;
      height: 8vw;
      clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
      background: linear-gradient(to right, #31d0d5, #108bd4);
      color: white;
      font-size: 4vw;
      line-height: 8vw;
      text-indent: 1em;
      margin-bottom: 2vw;
    }

    .meeting {
      width: 90vw;
      height: 50vw;
      background-color: black;
      margin-bottom: 5vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: white;
      overflow: hidden;

      .meeting_top {
        margin: 4vw;
        display: flex;
        justify-content: space-between;

        .meeting_title {
          font-size: 4.5vw;
        }

        .huifang {
          width: 20vw;
          height: 5vw;
          border-radius: 2.5vw;
          font-size: 3vw;
          text-align: center;
          line-height: 5vw;
          background-color: #28d7e0;
        }
      }

      .meeting_bot {
        margin: 3vw;
        font-size: 2.7vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          width: 12vw;
          height: 6vw;
          background-color: transparent;
          border: 0.5vw solid white;
          border-radius: 3vw;
        }
      }
    }
  }
}

:deep(.el-input__inner::placeholder) {
  font-size: 3vw;
}
</style>

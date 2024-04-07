<template>
  <div class="container">
    <div class="bg"></div>
    <el-card
      class="box-card"
      style="background-color: transparent; box-shadow: none; border: none"
    >
      <el-row>
        <el-col class="left" :span="5">
          <el-card>
            <img class="avatar" :src="userStore.userData.avatar" />
            <div class="username">{{ userStore.userData.username }}</div>
            <el-menu class="el-menu-vertical" style="border: none" router>
              <el-menu-item index="/home">
                <el-icon>
                  <House />
                </el-icon>
                首页
              </el-menu-item>
              <el-menu-item index="/person/setting">
                <el-icon>
                  <User />
                </el-icon>
                个人信息
              </el-menu-item>
              <el-menu-item index="/person/calendar">
                <el-icon>
                  <Calendar />
                </el-icon>
                我的日程
              </el-menu-item>
              <el-menu-item index="/person/subscribe">
                <el-icon>
                  <EditPen />
                </el-icon>
                我的订阅
              </el-menu-item>
              <el-menu-item index="/person/point">
                <el-icon>
                  <Coin />
                </el-icon>
                我的积分
              </el-menu-item>
              <el-menu-item index="/person/history">
                <el-icon>
                  <Clock />
                </el-icon>
                观看历史
              </el-menu-item>
            </el-menu>
            <el-button plain round class="logout" @click="Logout">
              退出登录
            </el-button>
          </el-card>
        </el-col>
        <el-col :span="0.1"></el-col>
        <el-col class="right" :span="12">
          <Main></Main>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/setting'
import Main from './main/index.vue'
let userStore = useUserStore()
let layoutSettingStore = useLayoutSettingStore()
let $router = useRouter()
onMounted(() => {
  userStore.userInfo()
})
const Logout = async () => {
  // 退出登录成功后返回首页
  layoutSettingStore.isLog = false
  await userStore.logout().then(() => {
    $router.push('/home')
    ElMessage.success('退出登录成功')
  })
}
</script>

<style lang="scss" scoped>
body {
  background-color: #f9f9f9;
}
.container {
  position: relative;
  .bg {
    z-index: -1;
    position: absolute;
    top: -1.875rem;
    width: 100%;
    height: 13.75rem;
    background: url('/src/assets/images/bg_images/person.png') no-repeat
      center/cover;
    opacity: 0.5;
  }
}
.box-card {
  width: 80%;
  margin: 1.875rem auto 0;
  height: 37.5rem;

  .left {
    display: flex;
    justify-content: center;
    height: 10rem;

    .avatar {
      margin-left: 12%;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }

    .username {
      width: fit-content;
      margin: 0.1875rem auto 0.375rem;
    }

    .logout {
      margin: 0.25rem 0.375rem 0;
    }
  }
}
</style>

<template>
  <div class="underframe">
    <!-- logo -->
    <img :src="setting.logo(1)" class="logo" />
    <el-menu
      default-active="1"
      mode="horizontal"
      background-color="transparent"
      :ellipsis="false"
      active-text-color="#409EFF"
      router
      style="font-size: 0.2857rem !important"
    >
      <!-- 菜单组件 -->
      <Menu :menuList="layoutSettingStore.menuList"></Menu>
      <!-- 直播 -->
      <el-menu-item index="8" style="color: #ff0020; font-size: 0.2571rem">
        直播
        <el-icon
          style="
            width: 0.1429rem;
            height: 0.1286rem;
            color: #ff0000;
            transform: translateY(-0.0714rem);
          "
        >
          <Histogram />
        </el-icon>
      </el-menu-item>

      <div class="loginAbout">
        <el-button
          class="log"
          @click="layoutSettingStore.dialogFormVisible = true"
          v-if="!layoutSettingStore.isLog"
        >
          <el-icon :size="22">
            <UserFilled />
          </el-icon>
          登录|注册
        </el-button>
        <img
          :src="userStore.userData.avatar"
          v-if="layoutSettingStore.isLog"
          class="avatar"
          @click="goPerson"
        />
        <el-dropdown v-if="layoutSettingStore.isLog">
          <div class="el-dropdown-link">
            {{ userStore.userData.username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goPerson">个人中心</el-dropdown-item>
            </el-dropdown-menu>
            <el-dropdown-menu>
              <el-dropdown-item @click="Logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-menu>
    <!-- 右侧登录用户相关 -->
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'
import useUserStore from '@/store/modules/user'

import useLayoutSettingStore from '@/store/setting'

import { ElMessage } from 'element-plus'
import setting from '@/setting'
import { useRouter } from 'vue-router'

let $router = useRouter()
let userStore = useUserStore()
let layoutSettingStore = useLayoutSettingStore()

const Logout = async () => {
  // 退出登录成功后返回首页
  layoutSettingStore.isLog = false
  await userStore.logout().then(() => {
    $router.push('/home')
    ElMessage.success('退出登录成功')
  })
}

const goPerson = () => {
  $router.push('/person')
}
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
<style scoped lang="scss">
.underframe {
  height: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(0.0714rem);
  font-size: 0.2857rem;

  .el-menu {
    margin-left: 1.4286rem;
    width: 50%;
    font-weight: 400;
    border-bottom: none;
    display: flex;
    align-items: center;
    height: 85%;
  }

  .logo {
    width: 3.1143rem;
    height: 0.6714rem;
    margin: 0 0.4286rem 0 1.7143rem;
  }

  .el-dropdown {
    .el-dropdown-link {
      width: 2.5rem;
      color: black;
      font-weight: 400;
    }

    margin: auto 0.1429rem;
  }

  .search {
    margin: 0 0.1429rem;
  }

  .language {
    border-left: 0.0429rem solid #838383;
    padding-left: 0.1429rem;
    margin-right: 0.1429rem;
    display: flex;
    align-items: center;
  }

  .loginAbout {
    margin-left: 2.5rem;
    display: flex;
    align-items: center;
  }
}

.log {
  height: 0.6rem;
  border-radius: 0.1rem;
  color: #0d49df;
  padding: 0px 0.0714rem;
  line-height: 0.6rem;
  font-size: 0.2571rem;
}

.avatar {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.1429rem;
  vertical-align: center;
  border-radius: 50%;
  cursor: pointer;
}
</style>

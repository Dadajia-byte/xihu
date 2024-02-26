<template>
  <div class="underframe">
    <!-- logo -->
    <img :src="setting.logo(1)" alt="" class="logo" />
    <el-menu default-active="1" mode="horizontal" background-color="transparent" :ellipsis="false"
      active-text-color="#409EFF" router style="font-size: 20px!important">
      <!-- 菜单组件 -->
      <Menu :menuList="layoutSettingStore.menuList">
      </Menu>

      <!-- 直播 -->
      <el-menu-item index="8" style="color: #ff0020;font-size: 18px;">
        直播
        <el-icon style="width: 10px;height: 9px;color: #ff0000;transform: translateY(-5px);">
          <Histogram />
        </el-icon>
      </el-menu-item>
    </el-menu>
    <!-- 搜索 -->
    <div class="search">
      <el-icon>
        <Search color="#838383" />
      </el-icon>
    </div>
    <!-- 语言切换 -->
    <div class="language">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ layoutSettingStore.choosedLan }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="chooseLan('中文')">中文</el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-menu>
            <el-dropdown-item @click="chooseLan('ENG')">ENG</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- 右侧登录用户相关 -->
    <div class="loginAbout">
      <el-button class="log" @click="layoutSettingStore.dialogFormVisible = true" v-if="!layoutSettingStore.isLog">
        <el-icon :size="22">
          <UserFilled />
        </el-icon>
        登录|注册
      </el-button>
      <img :src="userStore.userData.data.avatar" v-if="layoutSettingStore.isLog" class="avatar" @click="goPerson" />
      <el-dropdown v-if="layoutSettingStore.isLog">
        <span class="el-dropdown-link">
          {{ userStore.userData.data.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
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
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/setting'
import { ElMessage } from 'element-plus'
import setting from '@/setting'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let $router = useRouter()
let userStore = useUserStore()
let layoutSettingStore = useLayoutSettingStore()




const chooseLan = (Lan: string) => {
  return (layoutSettingStore.choosedLan = Lan)
}

const Logout = () => {
  // 退出登录成功后返回首页
  layoutSettingStore.isLog = false
  userStore.logout().then(() => {
    $router.push('/home')
    ElMessage.success('退出成功登录')
  })

}

const goPerson = () => {
}
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
<style scoped lang="scss">
.underframe {
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(255, 255, 255, .9);
  backdrop-filter: blur(5px);
  font-size: 20px;

  .el-menu {
    margin-left: 100px;
    width: 50%;
    font-weight: 400;
    border-bottom: none;
    display: flex;
    align-items: center;
    height: 85%;
  }

  .logo {
    width: 218px;
    height: 47px;
    margin: 0 30px 0 120px;
  }

  .el-dropdown {


    .el-dropdown-link {
      color: black;
      font-weight: 400;
    }

    margin: auto 10px;
  }

  .search {
    margin: 0 10px;
  }

  .language {
    border-left: 3px solid #838383;
    padding-left: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }

  .loginAbout {
    display: flex;
    align-items: center;
  }
}

.log {
  height: 42px;
  border-radius: 7px;
  color: #0d49df;
  padding: 0px 5px;
  line-height: 42px;
  font-size: 18px;
}

.avatar {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  vertical-align: center;
  border-radius: 50%;
  cursor: pointer;
}
</style>

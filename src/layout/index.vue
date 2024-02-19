<template>
  <div class="layout">
    <!-- 顶部导航栏 -->
    <Tabbar
      class="tabbar"
      :bgc="bgc"
      :logoNum="logoNum"
      :style="tabbarStyle"
      :textColor="textColor"
    ></Tabbar>

    <Main class="main"></Main>
    <Footer class="footer"></Footer>
    <!-- 对话框 -->
    <el-dialog
      v-model="layoutSettingStore.dialogFormVisible"
      width="670"
      :show-close="false"
      style="
        border-radius: 12px;
        opacity: 0.95;
        box-shadow: 0px 8px 24px #000000;
      "
    >
      <!-- 头部 -->
      <div class="header">
        <div class="login">
          <span
            :class="{ login1: !isAccountLogin, login2: isAccountLogin }"
            @click="isAccountLogin = false"
          >
            手机号登录
          </span>
          <span
            :class="{ login2: !isAccountLogin, login1: isAccountLogin }"
            @click="isAccountLogin = true"
          >
            账号登录
          </span>
        </div>
      </div>
      <!-- 表单 -->
      <el-form label-width="25px">
        <el-form-item>
          <el-input
            :placeholder="isAccountLogin ? '请输入账号' : '请输入手机号码'"
          >
            <template #prefix>
              <el-icon>
                <Iphone />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :placeholder="isAccountLogin ? '请输入密码' : '请输入短信验证码'"
          >
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码">
            <template #prefix>
              <el-icon>
                <Key />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" style="width: 285px; border-radius: 17px">
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <!-- 其他登录方式 -->
      <div class="other">
        <div class="otherLogin">其他登录方式</div>
        <div style="margin-top: 3px">@@</div>
      </div>
      <!-- 底部说明 -->
      <div class="bottom">
        <div class="explain">
          登录视为您已同意第三方账号绑定协议、服务条款、隐私政策
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import Main from './main/index.vue'
// 引入顶部导航
import Tabbar from './tabbar/index.vue'
// 引入页脚
import Footer from './footer/index.vue'
import useLayoutSettingStore from '@/store/setting'
import { ref, onMounted, onUnmounted } from 'vue'
let layoutSettingStore = useLayoutSettingStore()
let bgc = ref('rgba(255, 255, 255, 0.3)')
let logoNum = ref(1)
let textColor = ref('#1185e4')
let isAccountLogin = ref<boolean>(true)
let tabbarStyle = ref({
  top: '33px',
  width: '1370px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '30px',
  backdropFilter: 'blur(10px)',
})

const updateTabbarPosition = () => {
  let scrollTop = window.scrollY
  const initialTop = 33 // 初始 top 值
  console.log(bgc.value)

  if (scrollTop < initialTop) {
    tabbarStyle.value = {
      top: initialTop - scrollTop + 'px',
      width: '1370px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
    }
  } else if (scrollTop < 750) {
    tabbarStyle.value = {
      top: '0px',
      width: '100%',
      left: '0',
      transform: 'none',
      borderRadius: '0px',
      backdropFilter: 'blur(10px)',
    }
    bgc.value = 'rgba(255, 255, 255, 0.3);'
    logoNum.value = 1
    textColor.value = '#1185e4'
  } else {
    tabbarStyle.value = {
      top: '0px',
      width: '100%',
      left: '0',
      transform: 'none',
      borderRadius: '0px',
      backdropFilter: 'blur(10px)',
    }
    bgc.value = 'rgba(255,255,255,0.7)'
    logoNum.value = 1
    textColor.value = 'black'
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateTabbarPosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateTabbarPosition)
})
</script>

<style scoped>
.layout {
  background-color: #fafafa;
  position: relative;
  /* 测试属性 start */
  height: 3000px !important;

  /* 测试属性end */
  .tabbar {
    position: fixed;
    z-index: 999;
    transition:
      top 0.3s ease,
      width 0.3s ease,
      left 0.3s ease,
      transform 0.3s ease;
    /* 其他必要样式 */
  }

  .footer {
    position: absolute;
    bottom: 0;
  }

  .main {
    height: 804px;
  }

  .header {
    margin: calc(76px - 38px - 18px) calc(112px - 60px - 20px) 40px;

    .login {
      border-left: 2px #0b8eee solid;
      height: 32px;
      display: flex;
      align-items: center;
    }

    .login span {
      cursor: pointer;
      transition: all 0.3s ease;
      /* 过渡动画效果 */
    }

    .login1,
    .login2 {
      padding: 0px 5px;
    }

    .login1 {
      font-size: 24px;
      color: #333333;
    }

    .login2 {
      font-size: 18px;
      color: #838383;
    }
  }

  .el-form-item {
    width: 310px;

    .el-input {
      height: 37px;
      border-radius: 6px;
    }
  }

  .other {
    margin-left: 40px;
    margin-bottom: 10px;
    font-size: 10px;
    font-weight: 700;
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;

    .explain {
      font-size: 12px;
    }
  }
}
</style>

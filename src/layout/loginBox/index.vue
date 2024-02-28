<template></template>

<script setup lang="ts">
import { storeToRefs } from 'vue'
/* 导入相关仓库 */
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/setting'
/* pinia相关操作 */
let userStore = useUserStore()
let layoutSettingStore = useLayoutSettingStore()
let {
  accLogForm,
  phoneLogForm,
  regForm,
  userData,
  checkUser,
  accLogin,
  phoneLogin,
  registerAcc,
  clearLogForm,
  clearRegForm,
} = userStore
let { dialogFormVisible, dialogRegisterVisible, isLog } =
  storeToRefs(layoutSettingStore)
/* 图片验证码 */
let captchaUrl = ref('http://8.130.55.70:8080/dev-api/captcha/get')
function refreshCaptcha() {
  const timestamp = new Date().getTime()
  captchaUrl.value = `http://8.130.55.70:8080/dev-api/captcha/get?timestamp=${timestamp}`
}
</script>

<style scoped></style>

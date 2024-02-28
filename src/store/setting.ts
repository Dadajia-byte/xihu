import { defineStore } from 'pinia'
import { ref } from 'vue'
import { constantRoutes } from '@/routers/routes'

let useLayoutSettingStore = defineStore('settingStore', () => {
  // 引入路由（常量路由）

  let menuList = ref(constantRoutes[0].children)
  // 是否显示对话框
  const dialogFormVisible = ref(false)
  // 是否显示注册对话框
  const dialogRegisterVisible = ref(false)
  // 是否登录
  let isLog = ref(false)
  // 使用语言
  let choosedLan = ref('中文')
  return {
    dialogFormVisible,
    dialogRegisterVisible,
    isLog,
    choosedLan,
    menuList,
  }
})

export default useLayoutSettingStore

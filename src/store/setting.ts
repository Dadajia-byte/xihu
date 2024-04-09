import { defineStore } from 'pinia'
import { ref } from 'vue'
import { constantRoutesPC } from '@/routers/routes'

let useLayoutSettingStore = defineStore('settingStore', () => {
  // 引入路由（常量路由）

  let menuList = ref(constantRoutesPC[0].children)
  // 是否显示对话框
  const dialogFormVisible = ref(false)
  // 是否显示注册对话框
  const dialogRegisterVisible = ref(false)
  // 是否登录
  let isLog = ref(false)
  let isLoading = ref(true)
  return {
    dialogFormVisible,
    dialogRegisterVisible,
    isLog,
    menuList,
    isLoading,
  }
})

export default useLayoutSettingStore

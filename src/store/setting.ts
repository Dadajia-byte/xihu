// layout 相关配置仓库
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
let useLayoutSettingStore = defineStore('settingStore', () => {
  // 是否显示对话框
  const dialogFormVisible = ref(false)
  // 登录表单收集数据
  const loginForm = reactive({
    username: '',
    password: '',
  })
  // 注册表单收集数据
  const registerForm = reactive({
    username: '',
    password: '',
    password2: '',
  })

  return {
    dialogFormVisible,
    loginForm,
    registerForm,
  }
})

export default useLayoutSettingStore

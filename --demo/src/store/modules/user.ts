// layout 相关配置仓库
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import {
  reqAccLogin,
  reqUserInfo,
  reqPhoneLogin,
  reqRegister,
  reqLogout,
  reqUpdateUser,
} from '@/api/user'
import {
  accountLogData,
  phoneLogData,
  registerData,
  userData,
} from '@/api/user/type'
let useUserStore = defineStore('userStore', () => {
  // 小仓库存储数据的地方
  let token = ref(GET_TOKEN())
  /* 表单收集数据 */
  // 账号登录表单收集数据
  const accLogForm: accountLogData = reactive({
    account: '',
    password: '',
    captcha: '',
  })
  // 手机号登录表单收集数据
  const phoneLogForm: phoneLogData = reactive({
    phone: '',
    verifyCode: '',
    captcha: '',
  })
  // 注册表单收集数据
  const regForm: registerData = reactive({
    account: '',
    phone: '',
    username: '',
    password: '',
    checkPwd: '',
    verifyCode: '',
    sex: '',
    avatar: '',
  })
  // 返回的信息
  let userData: userData = reactive({
    id: '',
    username: '',
    token: '',
    avatar: '',
    phone: '',
    account: '',
    email: '',
    sex: '',
    birth: '',
    position: '',
    company: '',
    points: 0,
  })

  // 清空表单的函数
  const clearLogForm = () => {
    Object.assign(phoneLogForm, {
      phone: '',
      verifyCode: '',
      captcha: '',
    })
    Object.assign(accLogForm, {
      account: '',
      password: '',
      captcha: '',
    })
  }
  const clearRegForm = () => {
    Object.assign(regForm, {
      account: '',
      phone: '',
      username: '',
      password: '',
      checkPwd: '',
      verifyCode: '',
      avatar: '',
    })
  }
  // 清空userData的数据
  const clearUserData = () => {
    Object.assign(userData, {
      id: '',
      username: '',
      token: '',
      avatar: '',
      phone: '',
      account: '',
      email: '',
      sex: '',
      birth: '',
      position: '',
      company: '',
      points: 0,
    })
  }

  // 账号登录
  const accLogin = async (data: accountLogData) => {
    const response = await reqAccLogin(data)
    if (response.code === 0) {
      // 登录成功
      token.value = response.data.token
      SET_TOKEN(token.value)
      // 更新 userData
      userData = { ...response.data }
    } else {
      // 登录失败
      return Promise.reject(new Error(response.msg))
    }
  }
  // 手机号登录
  const phoneLogin = async (data: phoneLogData) => {
    const response = await reqPhoneLogin(data)
    if (response.code === 0) {
      // 登录成功
      token.value = response.data.token
      SET_TOKEN(token.value)
      // 更新 userData !!!这里有个小坑，因为是reactive对象，不能使用={...response.data}进行解构赋值，会丧失响应式
      Object.assign(userData, response.data)
    } else {
      // 登录失败
      return Promise.reject(new Error(response.msg))
    }
  }

  // 检测是否登录
  const userInfo = async () => {
    if (token) {
      let res = await reqUserInfo()
      if (res.code == 0) {
        Object.assign(userData, res.data)
        return 'ok'
      } else {
        return Promise.reject(new Error('未登录'))
      }
    }
  }
  // 注册
  const registerAcc = async (data: registerData) => {
    await reqRegister(data)
      .then((res) => {
        return res
      })
      .catch((res) => {
        Promise.reject(new Error(res.msg as any))
      })
  }
  // 修改用户信息
  const updateUser = async () => {
    let res = await reqUpdateUser(userData)
    if (res.code == 0) {
      return 'ok'
    } else {
      return Promise.reject(new Error(res.msg))
    }
  }

  // 退出登录
  const logout = async () => {
    await reqLogout().then(() => {
      token.value = ''
      clearUserData()
      REMOVE_TOKEN()
    })
  }

  return {
    // 基本数据
    accLogForm,
    phoneLogForm,
    regForm,
    userData,
    token,
    // 操作
    userInfo,
    accLogin,
    phoneLogin,
    registerAcc,
    logout,
    // 清空
    clearLogForm,
    clearRegForm,
    clearUserData,
    // 更新用户信息
    updateUser,
  }
})

export default useUserStore

import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
//创建axios实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 开发环境
  // baseURL: 'http://8.130.55.70:8080/dev-api/', // 生成环境
  timeout: 5000,
})
//请求拦截器
request.interceptors.request.use((config) => {
  //config 配置对象，headers属性请求头，经常给服务器携带公共参数
  let userStore = useUserStore()
  if (userStore.token) {
    config.headers['Authorization'] = `${userStore.token}`
  }
  return config
})
//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    //处理网络错误
    let msg = ''
    let status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request

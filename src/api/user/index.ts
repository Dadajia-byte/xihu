import request from '@/utils/request'
import {
  accountLogData,
  logResponse,
  otherResponse,
  phoneLogData,
  registerData,
} from './type'
enum API {
  USER_CHECK = '/user/token',
  REGISTER = '/sms/register', // 注册
  CAPTCHA = '/captcha/get', // 图形验证码获取
  ACCOUNT_LOGIN = '/user/login', // 账号登录
  SENDMESSAGE = '/sms/send', // 发送手机验证码
  PHONE_LOGIN = '/sms/loginbyphone', // 手机号登录
  USER_LOGOUT = '/user/logout', // 用户退出
}

// 注册接口
export const reqRegister = (data: registerData) =>
  request.post<any, otherResponse>(API.REGISTER, data)
// 账号登录接口
export const reqAccLogin = (data: accountLogData) =>
  request.post<any, logResponse>(API.ACCOUNT_LOGIN, data)
// 发送手机验证码接口
export const reqSendMessage = (data: number) =>
  request.post<any, any>(API.SENDMESSAGE, data)
// 手机号登录接口
export const reqPhoneLogin = (data: phoneLogData) =>
  request.post<any, logResponse>(API.PHONE_LOGIN, data)
// 图形验证码获取接口
export const reqCaptcha = () => request.get<any, any>(API.CAPTCHA)
// 用户验证接口
export const reqCheckUser = () =>
  request.get<any, any>(API.USER_CHECK)
// 用户注销接口
export const reqLogout = () => request.post<any, any>(API.USER_LOGOUT)

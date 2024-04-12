export interface registerData {
  account: string
  phone: number | string
  username: string
  password: string
  checkPwd: string
  verifyCode: number | string
  avatar?: string
  sex: number | string
}

export interface phoneLogData {
  phone: number | string
  verifyCode: number | string
  captcha: string
}

export interface accountLogData {
  account: string
  password: string
  captcha: string
}

export interface otherResponse {
  code: number
  msg: string
  data: null
}

export interface logResponse {
  code: number | string
  msg: string
  data: userData
}

export interface userData {
  id: number | string
  username: string
  token: string
  avatar: string
  phone: number | string
  account: string
  email: string
  sex: string
  position: string
  company: string
  birth: string
  points: number
}

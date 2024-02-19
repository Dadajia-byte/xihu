export interface registerData {
  account: number
  phone: number
  username: string
  password: number
}

export interface phoneLogData {
  phone: number
  verifyCode: number
  captcha: string
}

export interface accountLogData {
  account: number
  password: string
  captcha: string
}

export interface otherResponse {
  code: number
  msg: string
  data: null
}

export interface logResponse {
  code: number
  msg: string
  data: {
    id: number
    username: string
    token: string
  }
}

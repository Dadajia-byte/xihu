export interface masterResponse {
  code: number
  msg: string
  data: masters
}

export type masters = master[]

export interface master {
  guestname: string
  description: string
  videoUrl: string
  avatar: string
  startTime: string
  endTime: string
  title: string
  isExpert: boolean
}

export interface reqMasterData {
  date: string // 不填选全部
  isExpert: number | string
  guestname: string // 模糊搜索
}

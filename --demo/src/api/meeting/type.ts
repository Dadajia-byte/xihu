// 请求会议的数据
export interface reqData {
  type?: string
  date?: string
  num: number
}

export interface agendaResponse {
  code: number
  msg: string
  data: agendaItems
}

export type agendaItems = agendaItem[]

// 有关议程的数据
export interface agendaItem {
  id: number
  title: string
  startTime: number[]
  endTime: number[]
  activityType: string
  imageUrl: string
  location: string
  description: string
  liveUrl: string
  replayUrl: string
  subscriptionCount: number
  popularity: number
  isSub: number // 0是不订阅，1是订阅
}

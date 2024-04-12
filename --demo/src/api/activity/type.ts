export type records = activityItem[]

export interface activityItem {
  id: number
  title: string
  image: string
  time: string
  content: string
  type: string
  peo: number
  isSub: number
}

export interface responseData {
  code: number
  msg: string
  data: {
    records: records
    total: number
    size: number
    current: number
    pages: number
  }
}

// 传入的数据类型
export interface postData {
  type: string
  startIndex: number
  pageSize: number
}

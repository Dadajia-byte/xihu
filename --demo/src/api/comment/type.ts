export interface commentResponse {
  code: number
  msg: string
  data: commentList
}

export type commentList = comment[]
//   评论相关
export interface comment {
  id: number
  content: string
  userId: number
  userName: string
  createTime: string
  isDeleted: number
  activityId: number
  parentId: number
  rootParentId: number
  child: comment[] | null
}

export interface reqData {
  activityId: number
}

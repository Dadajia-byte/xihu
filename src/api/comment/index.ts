import request from '@/utils/request'
import { reqData, commentResponse } from './type'

enum API {
  GET_COMMENT = '/comment/list',
  DELETE_COMMENT = '/comment/delete',
  ADD_COMMENT = '/comment/add',
}

export const reqComment = (data: reqData) =>
  request.get<any, commentResponse>(`${API.GET_COMMENT}/${data.activityId}`)

// export const reqDeleteComment = (id: number) =>
//   request.post<any, any>(API.DELETE_COMMENT,)

// export const reqAddComment = (id: number) =>
//   request.post<any, any>(API.DELETE_COMMENT,)

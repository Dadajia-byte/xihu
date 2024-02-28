import request from '@/utils/request'
import { postData, responseData } from './type'

enum API {
  GET_ACTIVITY = '/goodactivities/list',
  SUB_ACTIVITY = '/goodregistration',
}

export const reqActivity = (data: postData) =>
  request.post<any, responseData>(API.GET_ACTIVITY, data)

export const reqSubActivity = (id: number) =>
  request.post<any, any>(API.SUB_ACTIVITY, { activityId: id })

export const reqCancelActivity = (id: number) =>
  request.delete<any, any>(`${API.SUB_ACTIVITY}/${id}`)

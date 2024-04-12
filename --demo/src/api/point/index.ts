import request from '@/utils/request'
import { reqPointName } from './type'

enum API {
  FINISH_POINT = '/user/getpoints',
  GET_USER_HISTORY = '/user/pointsItem',
}

export const reqPoint = (data: reqPointName) =>
  request.post<any, any>(API.FINISH_POINT, data)

export const reqUserHistory = () => request.post<any, any>(API.GET_USER_HISTORY)

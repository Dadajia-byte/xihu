import request from '@/utils/request'
import { reqMasterData } from './type'

enum API {
  GET_MASTER = '/guests/list',
}

export const reqMaster = (data: reqMasterData) =>
  request.post<any, any>(API.GET_MASTER, data)

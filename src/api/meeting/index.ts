import request from '@/utils/request'
import { reqData, agendaResponse } from './type'

enum API {
    GET_AGENDA = '/activities/list',
    SUB_AGENDA = '/registration'
}

type id = {
    activityId: number,
}
export const reqAgenda = (data: reqData) => request.post<any, agendaResponse>(API.GET_AGENDA, data)

export const reqSubAgenda = (data: id) => request.post<any, any>(API.SUB_AGENDA, data)

export const reqCancelAgenda = (id: number) => request.delete<any, any>(`${API.SUB_AGENDA}/${id}`)
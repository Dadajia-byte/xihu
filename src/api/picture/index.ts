import { reqData } from './type'
import request from '@/utils/request'

enum API {
  GET_PICTURE_LIST = '/images/list',
  UPLOAD_PICTURE = '/images/upload',
}

// 获取图片列表
type id = {
  id: number
}
type uploadImg = {
  url: string
}
export const reqPictureList = (data: reqData) => {
  return request.post<any, any>(API.GET_PICTURE_LIST, data)
}

export const reqUploadPicture = (data: uploadImg) => {
  return request.post<any, any>(API.UPLOAD_PICTURE, data)
}

export const reqDeletePicture = (data: id) => {
  return request.post<any, any>(API.UPLOAD_PICTURE, data)
}

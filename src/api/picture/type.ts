export interface reqData {
  type?: string
  num: string
}

export type imgList = imgItem[]
// 图片
export interface imgItem {
  id: number
  imageType?: string
  imageUrl: string
  imageName?: string
}

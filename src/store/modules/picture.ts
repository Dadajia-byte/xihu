import {
  reqPictureList,
  reqUploadPicture,
  reqDeletePicture,
} from '@/api/picture'
import { defineStore } from 'pinia'
import { reqData, imgItem } from '@/api/picture/type'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
const usePictureStore = defineStore('picture', () => {
  let getPictureData: reqData = reactive({
    type: '', //空为全部
    num: '-1', //-1为全部
  })
  let imgList = ref<imgItem[]>([])
  let uploadImg = ref({
    url: '',
  })
  let deleteId = ref({
    id: 0,
  })
  const getPictureList = async () => {
    const res = await reqPictureList(getPictureData)
    imgList.value = res.data
  }

  const uploadPictrue = async () => {
    const res = await reqUploadPicture(uploadImg.value)
    if (res.code === 0) {
      ElMessage.success('上传成功')
    } else {
      ElMessage.error(`${res.msg}`)
    }
  }

  const deletePictrue = async () => {
    const res = await reqDeletePicture(deleteId.value)
    if (res.code === 0) {
      ElMessage.success('删除成功')
    } else {
      ElMessage.error(`${res.msg}`)
    }
    getPictureList()
  }
  return {
    getPictureData,
    imgList,
    uploadImg,
    deleteId,
    getPictureList,
    uploadPictrue,
    deletePictrue,
  }
})

export default usePictureStore

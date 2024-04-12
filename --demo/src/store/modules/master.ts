import { reqMaster } from '@/api/master'
import { master, masterResponse, reqMasterData } from '@/api/master/type'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const useMasterStore = defineStore('masterStore', () => {
  // 发送请求的参数，用于获取全部的数据、日期筛选、搜索
  let getMasterData: reqMasterData = reactive({
    date: '', // 传入具体日期“5月1日”，若空则全部
    isExpert: '', // 填写数字，若0则代表嘉宾，1代表专家，若空则全部
    guestname: '', // 模糊搜索
  })

  let masterData = ref<master[]>([])

  const getMasterInfo = () => {
    reqMaster(getMasterData).then((res: masterResponse) => {
      masterData.value = res.data
    })
  }

  return {
    getMasterData,
    masterData,
    getMasterInfo,
  }
})

export default useMasterStore

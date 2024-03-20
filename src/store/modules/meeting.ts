import { defineStore } from 'pinia'
import { reqAgenda, reqSubAgenda, reqCancelAgenda } from '@/api/meeting/index'
import { reqData, agendaResponse, agendaItem } from '@/api/meeting/type'
import { reactive, ref } from 'vue'
let useMeetingStore = defineStore('meetingStore', () => {
  let reqData: reqData = reactive({
    type: '',
    date: '',
    num: -1, // num==-1代表全部日期
  })

  let agendaItems = ref<agendaItem[]>([])

  let meetingNum = ref<number>(0)

  // 获取会议信息
  const getAgenda = async () => {
    let result: agendaResponse = await reqAgenda(reqData)
    if (result.code === 0) {
      agendaItems.value = result.data
      return 'ok'
    } else {
      return Promise.reject(new Error(result.msg))
    }
  }

  // 订阅会议
  const subAgenda = async (data: number) => {
    let id = {
      activityId: data,
    }
    await reqSubAgenda(id).then((res) => {
      if (res.code == 0) {
        return 'ok'
      } else {
        return Promise.reject(new Error(res.msg))
      }
    })
  }
  // 取消订阅
  const cancelAgenda = async (id: number) => {
    await reqCancelAgenda(id).then((res) => {
      if (res.code == 0) {
        return 'ok'
      } else {
        return Promise.reject(new Error(res.msg))
      }
    })
  }

  return {
    reqData,
    agendaItems,
    meetingNum,
    getAgenda,
    subAgenda,
    cancelAgenda,
  }
})
export default useMeetingStore

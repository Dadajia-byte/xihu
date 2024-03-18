import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { reqPoint, reqUserHistory } from '@/api/point'
import { reqPointName, reqUserPointHistory } from '@/api/point/type'

export default defineStore('pointStore', () => {
  let pointName: reqPointName = reactive({
    pointname: '',
  })

  let userPointHistory = ref<reqUserPointHistory[]>([])

  const finishPoint = () => {
    reqPoint(pointName)
  }

  const getUserPointHistory = () => {
    reqUserHistory().then((res) => {
      userPointHistory.value = res.data
    })
  }

  return {
    pointName,
    userPointHistory,
    finishPoint,
    getUserPointHistory,
  }
})

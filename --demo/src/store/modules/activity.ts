import { defineStore } from 'pinia'
import { postData, activityItem } from '@/api/activity/type'
import {
  reqActivity,
  reqCancelActivity,
  reqSubActivity,
} from '@/api/activity/index'
import { ref, reactive } from 'vue'
export default defineStore('ActivtyStore', () => {
  let lists = ref<activityItem[]>([])

  let total = ref(0)

  let filterItem: postData = reactive({
    type: '全部',
    pageSize: 4,
    startIndex: 1,
  })

  const getActivty = async () => {
    let res = await reqActivity(filterItem)
    if (res.code == 0) {
      lists.value = res.data.records
      total.value = res.data.total
      return 'ok'
    } else {
      return Promise.reject(new Error(res.msg))
    }
  }

  const subActivity = async (id: number) => {
    let res = await reqSubActivity(id)
    if (res.code == 0) {
      return 'ok'
    } else {
      return Promise.reject(new Error(res.msg))
    }
  }

  const cancelActivity = async (id: number) => {
    let res = await reqCancelActivity(id)
    if (res.code == 0) {
      return 'ok'
    } else {
      return Promise.reject(new Error(res.msg))
    }
  }

  return {
    filterItem,
    lists,
    total,
    getActivty,
    subActivity,
    cancelActivity,
  }
})

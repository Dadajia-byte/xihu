// import { defineStore } from 'pinia'
// import { commentResponse, comment,reqData } from '@/api/comment/type'
// import {
//   reqComment
// } from '@/api/comment/index'
// import { ref, reactive } from 'vue'
// const useCommentStore =  defineStore('commentStore', () => {
//     let commentList = ref<comment[]>([])

//     let getCommentData:reqData = reactive({
//       activityId: 0
//     })
//     const getComment = () => {
//       reqComment(getCommentData).then((res:commentResponse) => {
//         commentList.value = res.data
//       }
//     }

//     return {
//       getCommentData,
//       getComment,
//     }
//   })
//   export default useCommentStore

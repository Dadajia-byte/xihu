import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { reqPoint } from "@/api/point";
import { reqPointName } from "@/api/point/type";

export default defineStore('pointStore', () => {

    let pointName: reqPointName = reactive({
        pointname: ''
    })

    const finishPoint = () => {
        reqPoint(pointName)
    }

    return {
        pointName,
        finishPoint
    }
})
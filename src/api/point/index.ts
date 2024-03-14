import request from "@/utils/request";
import { reqPointName } from "./type";

enum API {
    FINISH_POINT = '/user/getpoints'
}

export const reqPoint = (data: reqPointName) => request.post<any, any>(API.FINISH_POINT, data)
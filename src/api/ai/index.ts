import request from '@/utils/request.ts'
export const posterAPI = (text: string) => {
    return request({
        url: '/poster',
        method: 'POST',
        data: {
            text
        }
    })
}
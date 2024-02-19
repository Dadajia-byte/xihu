// 用于项目通用配置
export default {
  title: '西湖论剑数字平台', // 项目的标题
  logo1: '/public/logo1.png', // logo图片
  logo2: '/public/logo2.png',
  logo3: '/public/logo3.png',
  logo: (num: number) => {
    return `/public/logo${num}.png`
  },
}

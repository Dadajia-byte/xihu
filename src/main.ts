import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import './utils/flexible'
import 'animate.css/animate.min.css'
import 'wow.js/css/libs/animate.css'
import 'video.js/dist/video-js.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'swiper/scss'
import App from './App.vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})

// 注册全局组件
import gloablComponent from './components/index'
app.use(gloablComponent)

// 引入路由
import routers from './routers'
app.use(routers)

// 引入pinia
import pinia from './store'
app.use(pinia)

// 图片懒加载
import { lazyLoad, fadeIn } from './directives'
app.use(lazyLoad).use(fadeIn)

app.config.globalProperties.$echarts = echarts

// 引入路由鉴权
import './permission'

app.mount('#app')

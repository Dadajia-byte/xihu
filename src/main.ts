import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import gloablComponent from './components/index';
import 'virtual:svg-icons-register'
import '@/styles'

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
app.use(gloablComponent);
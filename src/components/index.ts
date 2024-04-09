// 引入项目中全部的全局组件
// 引入element-plus提供的全部图标组件
import * as ElementPlusIcons from '@element-plus/icons-vue'
import SvgIcon from './SvgIcon/index.vue'
import TitleBg from './TitleBg/index.vue'
import Load from './Load/index.vue'
const allGlobalComponents: any = {
  Load,
  SvgIcon,
  TitleBg,
}

// 对外暴露插件对象
export default {
  install(app: any) {
    // 将自定义组件注册为全局
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
    // 将element-plus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIcons)) {
      app.component(key, component)
    }
  },
}

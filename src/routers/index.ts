// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'

// 引入常量路由
import { constantRoutes } from '@/routers/routes'

// 暴露并创建路由器
export default createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

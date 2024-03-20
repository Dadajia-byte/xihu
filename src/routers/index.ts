// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'

// 检测用户代理（User-Agent）是否为移动设备
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

// 根据设备类型选择路由配置
function selectRoutes() {
  return isMobileDevice() ? constantRoutesMobile : constantRoutesPC
}

// 引入常量路由
import { constantRoutesPC, constantRoutesMobile } from '@/routers/routes'
import type { RouteRecordRaw } from 'vue-router'
// 暴露并创建路由器
export default createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: selectRoutes() as RouteRecordRaw[],
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

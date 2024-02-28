// 路由鉴权
import router from '@/routers'
// @ts-ignore
import NProgress from 'nprogress'
import setting from './setting'
// 引入nprogress样式
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
// 获取用户相关小仓库token判断用户是否登录成功
// 因为在外面所以要重新引入大仓库pinia
import pinia from './store'
import useUserStore from './store/modules/user'
import useLayoutSettingStore from './store/setting'
let layoutSettingStore = useLayoutSettingStore(pinia)
let userStore = useUserStore(pinia)

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  document.title = `${setting.title}-${to.meta.title}`
  next()
})

// 全局后置守卫
router.afterEach((to, from) => {
  NProgress.done()
})

// 第一个问题：任意路由切换实现进度条业务 ——— nprogress
// 第二个问题：路由鉴权（路由组件访问权限的设置）
// 全部路由组件：登录|404|任意路由|首页|数据大屏|权限管理（三个子路由）|商品管理（四个子路由）

/**
 * 1.用户未登录：只能访问login
 * 2.用户登陆成功：不可以访问login，其余组件都可以访问
 *
 */

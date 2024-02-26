// 对外暴露配置路由(常量路由)

export const constantRoutes = [
  {
    // 登录成功后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          hidden: false, // 是否隐藏 true为隐藏，默认false
        },
      },
      {
        path: '/meeting',
        component: () => import('@/views/meeting/index.vue'),
        name: 'meeting',
        meta: {
          title: '大会云集',
          hidden: false,
        }
      },
      {
        path: '/activity',
        component: () => import('@/views/activity/index.vue'),
        name: 'activity',
        meta: {
          title: '精彩活动',
          hidden: false,
        }
      },
      {
        path: '/achivevement',
        component: () => import('@/views/achievement/index.vue'),
        name: 'achivevement',
        meta: {
          title: '成果展示',
          hidden: false,
        }
      },
      {
        path: '/master',
        name: 'master',
        component: () => import('@/views/master/index.vue'),
        meta: {
          title: '大咖云集',
          hidden: false,
        }
      },
      {
        path: '/mate',
        name: 'mate',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        meta: {
          title: '合作伙伴',
          hidden: false,
        },
        children: [
          {
            path: '/mate/businessman',
            component: () => import('@/views/mate/businessman/index.vue'),
            meta: {
              title: '展商合作',
              hidden: false,
            }
          },
          {
            path: '/mate/media',
            component: () => import('@/views/mate/media/index.vue'),
            meta: {
              title: '媒体合作',
              hidden: false,
            }
          },
        ]
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/layout/index.vue'),
        meta: {
          title: '关于大会',
        },
        redirect: '/home',
        children: [
          {
            path: '/about/introduction',
            component: () => import('@/views/about/introduction/index.vue'),
            meta: {
              title: '大会介绍',
              hidden: false,
            }
          },
          {
            path: '/about/guide',
            component: () => import('@/views/about/guide/index.vue'),
            meta: {
              title: '参赛指南',
              hidden: false,
            }
          }
        ]
      },
    ]
  },

  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMathc(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
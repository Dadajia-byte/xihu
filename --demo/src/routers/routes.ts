// 对外暴露配置路由(常量路由)
export const constantRoutesPC = [
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
          title: '大会议程',
          hidden: false,
        },
      },
      {
        path: '/activity',
        name: 'activity',
        redirect: '/home',
        meta: {
          title: '精彩活动',
          hidden: false,
        },
        children: [
          {
            path: '/activity/activities',
            component: () => import('@/views/activity/activities/index.vue'),
            meta: {
              title: '精彩活动',
              hidden: false,
            },
          },
          {
            path: '/activity/discuss',
            component: () => import('@/views/activity/discuss/index.vue'),
            meta: {
              title: '热门议题',
              hidden: false,
            },
          },
        ],
      },
      {
        path: '/achivevement',
        component: () => import('@/views/achievement/index.vue'),
        name: 'achivevement',
        meta: {
          title: '成果展示',
          hidden: false,
        },
      },
      {
        path: '/master',
        name: 'master',
        component: () => import('@/views/master/index.vue'),
        meta: {
          title: '大咖云集',
          hidden: false,
        },
      },
      {
        path: '/mate',
        name: 'mate',
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
            },
          },
          {
            path: '/mate/media',
            component: () => import('@/views/mate/media/index.vue'),
            meta: {
              title: '媒体合作',
              hidden: false,
            },
          },
        ],
      },
      {
        path: '/about',
        name: 'about',
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
            },
          },
          {
            path: '/about/guide',
            component: () => import('@/views/about/guide/index.vue'),
            meta: {
              title: '参赛指南',
              hidden: false,
            },
          },
        ],
      },
      {
        path: '/poster',
        name: 'poster',
        component: () => import('@/views/poster/index.vue'),
        meta: {
          title: '海报分享',
          hidden: true,
        },
      },
      {
        path: '/AIreport',
        name: 'AIreport',
        component: () => import('@/views/AI/index.vue'),
        meta: {
          title: 'AI报告',
          hidden: true,
        },
      },
      {
        path: '/shot',
        name: 'shot',
        component: () => import('@/views/shot/index.vue'),
        meta: {
          title: '打卡拍照',
          hidden: true,
        },
      },
      {
        path: '/onlinebuy',
        name: 'onlinebuy',
        component: () => import('@/views/onlinebuy/index.vue'),
        meta: {
          title: '线上购票',
          hidden: true,
        },
      },
    ],
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
  {
    path: '/person',
    component: () => import('@/views/person/index.vue'),
    name: 'person',
    meta: {
      title: '个人中心',
      hidden: true,
    },
    children: [
      {
        path: '/person/setting',
        component: () => import('@/views/person/personMes/index.vue'),
        meta: {
          title: '个人信息',
          hidden: true,
        },
      },
      {
        path: '/person/calendar',
        component: () => import('@/views/person/calendar/index.vue'),
        meta: {
          title: '我的日程',
          hidden: true,
        },
      },
      {
        path: '/person/subscribe',
        component: () => import('@/views/person/subscribe/index.vue'),
        meta: {
          title: '我的订阅',
          hidden: true,
        },
      },
      {
        path: '/person/history',
        component: () => import('@/views/person/history/index.vue'),
        meta: {
          title: '观看历史',
          hidden: true,
        },
      },
      {
        path: '/person/point',
        component: () => import('@/views/person/point/index.vue'),
        meta: {
          title: '我的积分',
          hidden: true,
        },
      },
    ],
  },
]

export const constantRoutesMobile = [
  {
    path: '/',
    component: () => import('@/mobile/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/mobile/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          hidden: false, // 是否隐藏 true为隐藏，默认false
        },
      },
      {
        path: '/activity',
        component: () => import('@/mobile/views/activity/index.vue'),
        name: 'activity',
        meta: {
          title: '精彩活动',
          hidden: false,
        },
      },
      {
        path: '/meeting',
        component: () => import('@/mobile/views/meeting/index.vue'),
        name: 'meeting',
        meta: {
          title: '大会议程',
          hidden: false,
        },
      },
      {
        path: '/mate',
        component: () => import('@/mobile/views/mate/index.vue'),
        name: 'mate',
        meta: {
          title: '展商风采',
          hidden: false,
        },
      },
      {
        path: '/me',
        component: () => import('@/mobile/views/me/index.vue'),
        name: 'me',
        meta: {
          title: '我的',
          hidden: false,
        },
      },
    ],
  },
]

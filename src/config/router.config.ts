import BasicLayout from '@/layouts/BasicLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export const constantRouterMap = [
  {
    name: 'basicLayout',
    path: '/',
    redirect: '/dashboard',
    component: BasicLayout,
    children: [],
  },
  {
    name: 'authLayout',
    path: '/auth',
    component: AuthLayout,
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        name: 'login',
        path: '/auth/login',
        meta: {
          title: '登录',
        },
        component: () => import('@/views/auth/login/index.vue'),
      },
      {
        name: 'register',
        path: '/auth/register',
        meta: {
          title: '注册',
        },
        component: () => import('@/views/auth/register/index.vue'),
      },
    ],
  },
]

export interface IRouterMeta {
  icon: string
  title: string
  requireAuth?: boolean
  hidden?: boolean
  roles?: string[]
}

export interface IRouter {
  name: string
  path: string
  meta: IRouterMeta
  component: any
  children?: IRouter[]
}

export function getAsyncRouterMap(): IRouter[] {
  return [
    {
      name: '产品列表',
      path: '/dashboard',
      meta: {
        icon: 'TaobaoCircleOutlined',
        title: '产品列表',
        requireAuth: true,
      },
      component: () => import('@/views/dashboard/index.vue'),
    },
  ]
}

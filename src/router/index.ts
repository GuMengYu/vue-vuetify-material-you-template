// types
import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const Discover = () => import('@/pages/Discover.vue')
const FourOhFour = () => import('@/pages/errors/FourOhFour.vue')
const Home = () => import('@/pages/Home.vue')

const Playground = () => import('@/pages/Playground.vue')
const Setting = () => import('@/pages/setting/Setting.vue')

const appRoutes: RouteRecordRaw[] = [
  {
    path: 'discover/',
    name: 'discover',
    component: Discover,
    meta: { keepAlive: true },
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/playground',
    name: 'playground',
    component: Playground,
  },
]

export function useRouter(app: App) {
  const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: (to, from, savedPosition) => savedPosition || ({ x: 0, y: 0 } as any),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        children: appRoutes,
        redirect: { path: '/discover' },
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'FourOhFour',
        component: FourOhFour,
      },
    ],
  })
  app.use(router)
  return router
}

import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/demo01',
        name: 'demo01',
        component: () => import('@/pages/demo01.vue')
      },
      {
        path: '/demo02',
        name: 'demo02',
        component: () => import('@/pages/demo02.vue')
      },
      {
        path: '/demo03',
        name: 'demo03',
        component: () => import('@/pages/demo03.vue')
      },
      {
        path: '/demo04',
        name: 'demo04',
        component: () => import('@/pages/demo04.vue')
      },
      {
        path: '/demo05',
        name: 'demo05',
        component: () => import('@/pages/demo05.vue')
      },
      {
        path: '/demo06',
        name: 'demo06',
        component: () => import('@/pages/demo06.vue')
      },
      {
        path: '/demo07',
        name: 'demo07',
        component: () => import('@/pages/demo07.vue')
      },
      {
        path: '/demo08',
        name: 'demo08',
        component: () => import('@/pages/demo08.vue')
      },
      {
        path: '/demo09',
        name: 'demo09',
        component: () => import('@/pages/demo09.vue')
      },
      {
        path: '/demo10',
        name: 'demo10',
        component: () => import('@/pages/demo10.vue')
      },
      {
        path: '/demo11',
        name: 'demo11',
        component: () => import('@/pages/demo11.vue')
      },
      {
        path: '/demo12',
        name: 'demo12',
        component: () => import('@/pages/demo12.vue')
      },
      {
        path: '/demo13',
        name: 'demo13',
        component: () => import('@/pages/demo13.vue')
      },
      {
        path: '/demo14',
        name: 'demo14',
        component: () => import('@/pages/demo14.vue')
      },
      {
        path: '/demo15',
        name: 'demo15',
        component: () => import('@/pages/demo15.vue')
      }
    ]
  }
];
export default routes;

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe';
import Sistem from '../views/Sistem';
import Cart from '../views/Cart';
import List from '../views/List';
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Account',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Account.vue'),
      },
      {
        path: '/AboutMe',
        name: 'AboutMe',
        component: AboutMe,
      },
      {
        path: '/Sistem',
        name: 'Sistem',
        component: Sistem,
      },
      {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: '/List',
        name: 'List',
        component: List,
      }

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;

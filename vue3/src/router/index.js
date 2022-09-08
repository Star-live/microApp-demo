import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('@/views/Dialog.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('@/views/Location.vue')
  },
  {
    path: '/state',
    name: 'State',
    component: () => import('@/views/State.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
];
const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/'),
  routes
});

export default router;
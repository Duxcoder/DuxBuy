import type { RouteRecordRaw } from 'vue-router';
import AppHome from '@/pages/AppHome.vue';

export const route: RouteRecordRaw = {
  path: '/about-us',
  name: 'about-us',
  component: AppHome
};

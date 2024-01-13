import type { RouteRecordRaw } from 'vue-router';
import AppHome from '@/pages/AppHome.vue';

export const route: RouteRecordRaw = {
  path: '/news',
  name: 'news',
  component: AppHome
};

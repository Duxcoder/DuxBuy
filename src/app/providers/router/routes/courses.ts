import type { RouteRecordRaw } from 'vue-router';
import AppHome from '@/pages/AppHome.vue';

export const route: RouteRecordRaw = {
  path: '/courses',
  name: 'courses',
  component: AppHome
};

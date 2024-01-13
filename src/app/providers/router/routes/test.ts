import type { RouteRecordRaw } from 'vue-router';
import AppTest from '@/pages/AppTest.vue';

export const route: RouteRecordRaw = {
  path: '/test',
  name: 'test',
  component: AppTest
};

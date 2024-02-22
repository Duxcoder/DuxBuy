import type { RouteRecordRaw } from 'vue-router';
import component from '@/pages/AppHome.vue';
import { pages } from '@/shared/routing';

const { path, name } = pages.login;
export const route: RouteRecordRaw = {
  path,
  name,
  component
};

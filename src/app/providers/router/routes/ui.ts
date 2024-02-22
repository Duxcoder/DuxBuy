import type { RouteRecordRaw } from 'vue-router';
import component from '@/pages/AppUI.vue';
import { pages } from '@/shared/routing';

const { path, name } = pages.ui;
export const route: RouteRecordRaw = {
  path,
  name,
  component
};

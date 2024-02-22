import { IconMultiBox as iconCourses } from '@/shared/ui/icons/basic';
import type { Component } from 'vue';
export type PageType = {
  label: string;
  name: string;
  path: string;
  icon?: Component;
};

type Pages = Record<string, PageType>;

export const pages: Pages = {
  home: {
    label: 'Главная',
    name: 'home',
    path: '/'
  },
  login: {
    label: 'Вход',
    name: 'login',
    path: '/login'
  },
  signUp: {
    label: 'Регистрация',
    name: 'signUp',
    path: '/sign-up'
  },
  aboutUs: {
    label: 'Об академии',
    name: 'aboutUs',
    path: '/about-us'
  },
  courses: {
    label: 'Все курсы',
    name: 'courses',
    path: '/courses',
    icon: iconCourses
  },
  events: {
    label: 'Мероприятия',
    name: 'events',
    path: '/events'
  },
  news: {
    label: 'Новости',
    name: 'news',
    path: '/news'
  },
  ui: {
    label: 'UI',
    name: 'ui',
    path: '/ui'
  }
};

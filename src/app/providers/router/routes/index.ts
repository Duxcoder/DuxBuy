import type { RouteRecordRaw } from 'vue-router';

import { route as homeRoute } from './home';
import { route as coursesRoute } from './courses';
import { route as aboutUsRoute } from './about-us';
import { route as eventsRoute } from './events';
import { route as newsRoute } from './news';
import { route as loginRoute } from './login';
import { route as signUpRoute } from './sign-up';
import { route as testRoute } from './test';

export const routes: readonly RouteRecordRaw[] = [
  homeRoute,
  coursesRoute,
  aboutUsRoute,
  eventsRoute,
  newsRoute,
  loginRoute,
  signUpRoute,
  testRoute
] as const;

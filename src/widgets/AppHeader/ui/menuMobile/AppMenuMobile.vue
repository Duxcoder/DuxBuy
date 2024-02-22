<script setup lang="ts">
import { type PageType } from '@/shared/routing/pages';
import { AppUserPanel } from '../userPanel';
import { AppSelectCity } from '../selectCity';
import { AppSocial } from '@/widgets/AppSocial';
import { AppAddress } from '@/widgets/AppAddress';
import { IconDzen } from '@/shared/ui/icons/social';

defineProps({
  dark: {
    type: Boolean,
    default: true
  },
  links: {
    type: Array<PageType>,
    required: true
  },
  showCitiesAndUser: {
    type: Boolean,
    default: true
  },
  closeMenu: {
    type: Function,
    default: () => {}
  }
});
</script>

<template>
  <aside class="menu-mobile">
    <nav class="nav-mobile">
      <ul class="nav-list-mobile">
        <li v-for="page in links" :key="page.name" class="nav-item-mobile">
          <RouterLink :to="page.path" @click="closeMenu">
            <component v-if="page.icon" :is="page.icon" :dark="dark" />
            <span>{{ page.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <AppSelectCity
      :dark="dark"
      class="select-city-style"
      v-if="showCitiesAndUser"
    />
    <AppUserPanel
      :dark="dark"
      class="user-panel-style"
      v-if="showCitiesAndUser"
    />
    <AppAddress class="address-style" />
    <AppSocial :dark="dark" class="social-style" />
    <a href="https://dzen.ru/" target="_blank" class="dzen-style">
      <IconDzen :dark="dark" />
    </a>
  </aside>
</template>

<style scoped>
@import 'style.css';
</style>

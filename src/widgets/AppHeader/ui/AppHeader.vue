<script setup lang="ts">
import { BaseLogo } from './logo';
import { BaseBurger } from '@/shared/ui/buttons';
import { AppInfoPanel } from './infoPanel';
import { AppNavigation } from './navigation';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { pages } from '@/shared/routing';
import { useScreenStore } from '@/app/providers/stores';
import { BREAKPOINTS } from '@/shared/config/breakpoints';
import { AppMenuMobile } from './menuMobile';

const { courses, events, news, aboutUs } = pages;
const links = [courses, events, news, aboutUs];

defineProps({
  dark: {
    type: Boolean,
    default: true
  }
});
const screenStore = useScreenStore();
const showBurger = computed(
  () => screenStore.screenWidth <= BREAKPOINTS.desktop
);
const showHeaderContent = computed(
  () => screenStore.screenWidth >= BREAKPOINTS.mobile
);

const showMobileMenu = ref(false);

const toggleShowMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <header class="header" :class="{ dark: !dark }">
    <RouterLink
      :to="pages.home.path"
      class="logo"
      @click="() => showMobileMenu && toggleShowMobileMenu()"
    >
      <BaseLogo :dark="dark" />
    </RouterLink>
    <div class="header-content" v-if="showHeaderContent">
      <AppNavigation :links="links" :dark="dark" v-if="!showBurger" />
      <AppInfoPanel :dark="dark" />
    </div>
    <BaseBurger
      :dark="dark"
      :show="showBurger"
      :isOpen="showMobileMenu"
      @click="toggleShowMobileMenu"
      style="margin-left: 20px"
    />
    <Transition>
      <AppMenuMobile
        :links="links"
        v-if="showMobileMenu && showBurger"
        :showCitiesAndUser="!showHeaderContent"
        :closeMenu="toggleShowMobileMenu"
      />
    </Transition>
  </header>
</template>

<style scoped>
@import 'style.css';
</style>

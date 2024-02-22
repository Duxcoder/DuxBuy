<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { type PageType } from '@/shared/routing/pages';

defineProps({
  dark: {
    type: Boolean,
    default: true
  },
  links: {
    type: Array<PageType>,
    required: true
  }
});
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li v-for="page in links" :key="page.name">
        <RouterLink :to="page.path" class="nav-item">
          <component v-if="page.icon" :is="page.icon" :dark="dark" />
          <span>{{ page.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 40px;
  padding: 0 40px;
}
.nav-list {
  display: flex;
  height: 100%;
  gap: 16px;
}
.nav-item {
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  gap: 0.3em;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to left, #f7941d, #27aae1);
    transition: opacity 0.3s;
    opacity: 0;
    z-index: 1;
  }
  &:hover::after,
  &.router-link-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to left, #f7941d, #27aae1);
    transition: opacity 0.3s;
    opacity: 1;
    z-index: 1;
  }
}
</style>

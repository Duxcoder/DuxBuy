<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppHeader } from '@/widgets/AppHeader';
import AppToasts from '@/shared/ui/toasts/ui/AppToasts.vue';
</script>

<template>
  <AppHeader :dark="true" />
  <main>
    <RouterView />
  </main>
  <footer></footer>
  <AppToasts />
</template>

<style scoped></style>

<script setup lang="ts">
import { socialLinks } from './model/socialLinks';
defineProps({
  dark: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div class="social-panel">
    <a
      class="social-link"
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.path"
      target="_blank"
    >
      <component :is="link.icon" :dark="dark" />
    </a>
  </div>
</template>

<style scoped>
.social-panel {
  display: flex;
  align-items: center;
  max-width: 280px;
  justify-content: space-between;
}
.social-link {
  display: flex;
  height: 24px;
  aspect-ratio: 1;
}
</style>
